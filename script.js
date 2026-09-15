(() => {
"use strict";

const KEYS = { saved:"ajobworlds_saved_jobs", apps:"ajobworlds_applications" };
const PAGE_SIZE = 8;
const APP_STATE = {
  screen:"home", currentJobId:null, searchQuery:"", locationQuery:"",
  filters:{country:"",state:"",city:"",category:"",jobType:"",experience:"",education:"",workMode:"",salaryMin:"",salaryMax:"",special:[]},
  sort:"newest", page:1, savedJobs:[], applications:[], resume:null, submitting:false
};

const $ = (id) => document.getElementById(id);
const qs = (sel, root=document) => root.querySelector(sel);
const qsa = (sel, root=document) => [...root.querySelectorAll(sel)];

function safeRead(key, fallback){
  try { const raw=localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }
  catch(e){ toast("Local storage is unavailable. Your data may not persist."); return fallback; }
}
function safeWrite(key, value){
  try { localStorage.setItem(key, JSON.stringify(value)); return true; }
  catch(e){ toast("Could not save data in this browser."); return false; }
}
function toast(message){
  const el=$("toast"); if(!el) return;
  el.textContent=message; el.classList.add("show");
  clearTimeout(toast.timer); toast.timer=setTimeout(()=>el.classList.remove("show"),2400);
}
function showLoading(text="Searching..."){
  $("loadingText").textContent=text; $("loadingState").classList.remove("hidden");
}
function hideLoading(){ $("loadingState").classList.add("hidden"); }
function escapeHTML(value=""){
  return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
}
function money(job){
  const sym={INR:"₹",USD:"$",CAD:"C$",GBP:"£",EUR:"€",AUD:"A$",JPY:"¥"}[job.currency]||job.currency+" ";
  return `${sym}${Number(job.salaryMin).toLocaleString()} – ${sym}${Number(job.salaryMax).toLocaleString()} / month`;
}
function dateText(date){ return new Date(date+"T00:00:00").toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}); }
function iconFor(category){
  return ({Driver:"🚗","Home Job":"🏠",Remote:"💻",Factory:"🏭",Office:"▣",Security:"🛡",Hotel:"🏨",Chef:"👨‍🍳",Hospital:"🏥",IT:"🖥",Warehouse:"🏬",Delivery:"📦",Mechanic:"🛠",Electrician:"⚡",Teacher:"🎓",Bank:"🏦",Retail:"🛍",Cleaner:"🧹",Gardener:"🌱"})[category]||"◉";
}
function currentJob(){ return jobData.find(j=>j.id===APP_STATE.currentJobId); }

function populateSelect(select, values, placeholder="Any"){
  if(!select) return;
  const current=select.value;
  select.innerHTML=`<option value="">${escapeHTML(placeholder)}</option>`+
    values.map(v=>`<option value="${escapeHTML(v)}">${escapeHTML(v)}</option>`).join("");
  if(values.includes(current)) select.value=current;
}
function allCountries(){ return Object.keys(locationData); }
function statesFor(country){ return country && locationData[country] ? Object.keys(locationData[country]) : []; }
function citiesFor(country,state){ return country && state && locationData[country]?.[state] ? locationData[country][state] : []; }

function setupLocationSelects(prefix){
  const c=$(prefix+"Country"), s=$(prefix+"State"), city=$(prefix+"City");
  if(!c||!s||!city) return;
  populateSelect(c,allCountries(), "Select country");
  const updateStates=()=>{
    populateSelect(s,statesFor(c.value),"Select state / province");
    populateSelect(city,[],"Select city");
  };
  const updateCities=()=>{
    populateSelect(city,citiesFor(c.value,s.value),"Select city");
  };
  c.addEventListener("change",updateStates); s.addEventListener("change",updateCities);
  updateStates();
}
function setupFilters(){
  populateSelect($("filterCountry"),allCountries());
  populateSelect($("filterCategory"),jobCategories);
  populateSelect($("filterJobType"),["Full Time","Part Time","Contract","Internship","Apprenticeship","Temporary"]);
  populateSelect($("filterExperience"),["Fresher","0-1 Years","1-3 Years","2-5 Years"]);
  populateSelect($("filterEducation"),["10th Pass","12th Pass","Diploma","Graduate"]);
  populateSelect($("filterWorkMode"),["On-site","Hybrid","Remote"]);
  $("filterCountry").addEventListener("change",()=>{
    populateSelect($("filterState"),statesFor($("filterCountry").value));
    populateSelect($("filterCity"),[]);
  });
  $("filterState").addEventListener("change",()=>populateSelect($("filterCity"),citiesFor($("filterCountry").value,$("filterState").value)));
  qsa("[data-special]").forEach(btn=>btn.addEventListener("click",()=>btn.classList.toggle("active")));
}
function renderCategories(){
  const row=$("categoryRow"), grid=$("categoryGrid");
  const html=jobCategories.map(cat=>`<button class="category-pill" data-category="${escapeHTML(cat)}"><span class="category-icon">${iconFor(cat)}</span><span>${escapeHTML(cat)}</span></button>`).join("");
  if(row) row.innerHTML=html;
  if(grid) grid.innerHTML=jobCategories.map(cat=>`<button class="category-tile category-pill" data-category="${escapeHTML(cat)}"><span class="category-icon">${iconFor(cat)}</span><strong>${escapeHTML(cat)}</strong></button>`).join("");
  qsa("[data-category]").forEach(btn=>btn.addEventListener("click",()=>{
    const cat=btn.dataset.category;
    APP_STATE.filters.category=cat; $("filterCategory").value=cat;
    APP_STATE.searchQuery=""; $("searchInput").value="";
    showScreen("home"); refreshResults();
  }));
  const popular=$("popularTypes");
  if(popular) popular.innerHTML=[
    ["Car Driver","🚗","Driver"],["Work From Home","💻","Home Job"],["Factory Job","🏭","Factory"]
  ].map(x=>`<button class="popular-card" data-category="${x[2]}"><strong>${x[1]} ${x[0]}</strong><small>Explore ${x[0]} opportunities</small></button>`).join("");
}
function readFiltersFromUI(){
  APP_STATE.filters={...APP_STATE.filters,
    country:$("filterCountry").value,state:$("filterState").value,city:$("filterCity").value,
    category:$("filterCategory").value,jobType:$("filterJobType").value,experience:$("filterExperience").value,
    education:$("filterEducation").value,workMode:$("filterWorkMode").value,
    salaryMin:$("salaryMin").value,salaryMax:$("salaryMax").value,
    special:qsa("[data-special].active").map(x=>x.dataset.special)
  };
}
function applyPipeline(){
  const f=APP_STATE.filters, q=(APP_STATE.searchQuery+" "+APP_STATE.locationQuery).trim().toLowerCase();
  let result=jobData.filter(job=>{
    const hay=[job.title,job.company,job.country,job.state,job.city,job.category,job.description,...job.responsibilities].join(" ").toLowerCase();
    if(q && !hay.includes(q)) return false;
    if(f.country && job.country!==f.country) return false;
    if(f.state && job.state!==f.state) return false;
    if(f.city && job.city!==f.city) return false;
    if(f.category && job.category!==f.category) return false;
    if(f.jobType && job.jobType!==f.jobType) return false;
    if(f.experience && job.experience!==f.experience) return false;
    if(f.education && job.education!==f.education) return false;
    if(f.workMode && job.workMode!==f.workMode) return false;
    if(f.salaryMin && job.salaryMax < Number(f.salaryMin)) return false;
    if(f.salaryMax && job.salaryMin > Number(f.salaryMax)) return false;
    for(const s of f.special){
      if(s==="fresher" && job.experience!=="Fresher") return false;
      if(s==="remote" && job.workMode!=="Remote") return false;
      if(s==="wfh" && !["Remote","Home Job"].includes(job.category) && job.workMode!=="Remote") return false;
      if(s==="accommodation" && !job.accommodation) return false;
      if(s==="food" && !job.foodProvided) return false;
      if(s==="visa" && !job.visaSponsorship) return false;
      if(s==="relocation" && !job.relocation) return false;
    }
    return true;
  });
  result=[...result].sort((a,b)=>{
    if(APP_STATE.sort==="oldest") return a.postedDate.localeCompare(b.postedDate);
    if(APP_STATE.sort==="salaryLow") return a.salaryMin-b.salaryMin;
    if(APP_STATE.sort==="salaryHigh") return b.salaryMax-a.salaryMax;
    return b.postedDate.localeCompare(a.postedDate);
  });
  return result;
}
function renderJobs(jobs, target=$("jobList")){
  if(!target) return;
  const start=(APP_STATE.page-1)*PAGE_SIZE, visible=jobs.slice(start,start+PAGE_SIZE);
  $("jobCount").textContent=jobs.length.toLocaleString();
  $("noResults").classList.toggle("hidden",jobs.length!==0);
  target.innerHTML=visible.map(jobCardHTML).join("");
  renderPagination(jobs.length);
  if(jobs.length===0) $("pagination").innerHTML="";
}
function jobCardHTML(job){
  const saved=APP_STATE.savedJobs.includes(job.id);
  return `<article class="job-card" data-job-id="${escapeHTML(job.id)}" tabindex="0" aria-label="${escapeHTML(job.title)} at ${escapeHTML(job.company)}">
    <div class="company-logo">${escapeHTML(job.logo||job.company[0])}</div>
    <div class="job-main">
      <h3 class="job-title">${escapeHTML(job.title)}</h3>
      <div class="company-name">${escapeHTML(job.company)}${job.verified?'<span class="verified">● Verified</span>':''}</div>
      <div class="job-meta">
        <span class="meta">📍 ${escapeHTML(job.city)}, ${escapeHTML(job.state)}, ${escapeHTML(job.country)}</span>
        <span class="meta salary">💰 ${escapeHTML(money(job))}</span>
      </div>
      <div class="tag-row">
        <span class="tag">● ${escapeHTML(job.jobType)}</span><span class="tag">◷ ${escapeHTML(job.experience)}</span>
        <span class="tag">⌂ ${escapeHTML(job.workMode)}</span>
        ${job.accommodation?'<span class="tag">🏠 Accommodation</span>':''}
        ${job.foodProvided?'<span class="tag">🍴 Food Provided</span>':''}
      </div>
      <div class="posted">Posted ${escapeHTML(dateText(job.postedDate))}</div>
    </div>
    <div class="job-actions">
      <button class="heart-btn ${saved?"saved":""}" data-save="${escapeHTML(job.id)}" aria-label="${saved?"Unsave":"Save"} job">${saved?"♥":"♡"}</button>
      <button class="outline-btn" data-details="${escapeHTML(job.id)}">View Details</button>
      <button class="outline-btn apply-mini" data-details="${escapeHTML(job.id)}">Apply Now</button>
    </div>
  </article>`;
}
function renderPagination(total){
  const pages=Math.ceil(total/PAGE_SIZE), p=$("pagination");
  if(!p || pages<=1){ if(p)p.innerHTML=""; return; }
  let html="";
  for(let i=1;i<=pages;i++) if(i<=2||i===pages||Math.abs(i-APP_STATE.page)<=1) html+=`<button class="page-btn ${i===APP_STATE.page?"active":""}" data-page="${i}">${i}</button>`;
  p.innerHTML=html;
}
function refreshResults(){
  APP_STATE.page=1;
  renderJobs(applyPipeline());
}
function runSearch(){
  APP_STATE.searchQuery=$("searchInput").value.trim();
  APP_STATE.locationQuery=$("locationInput").value.trim();
  APP_STATE.page=1;
  $("searchBtn").disabled=true; $("searchBtn").innerHTML='<span class="spinner" style="display:inline-block;width:14px;height:14px;border-width:2px;vertical-align:middle"></span> Searching...';
  showLoading("Searching...");
  setTimeout(()=>{
    hideLoading(); refreshResults();
    $("searchBtn").disabled=false; $("searchBtn").innerHTML='<span>⌕</span> Search Jobs';
  },1200);
}
function openJobDetails(jobId){
  const job=jobData.find(j=>j.id===jobId);
  if(!job){ toast("This job could not be found."); return; }
  APP_STATE.currentJobId=jobId;
  $("jobDetails").innerHTML=`
  <article class="detail-card">
    <div class="detail-hero">
      <div class="company-logo">${escapeHTML(job.logo||job.company[0])}</div>
      <div><h1>${escapeHTML(job.title)}</h1><p>${escapeHTML(job.company)} ${job.verified?'<span class="verified">● Verified Company</span>':''}</p>
      <p>📍 ${escapeHTML(job.city)}, ${escapeHTML(job.state)}, ${escapeHTML(job.country)}</p><div class="detail-salary">💰 ${escapeHTML(money(job))}</div></div>
      <div class="detail-actions"><button class="heart-btn ${APP_STATE.savedJobs.includes(job.id)?"saved":""}" data-save="${escapeHTML(job.id)}">${APP_STATE.savedJobs.includes(job.id)?"♥":"♡"}</button></div>
    </div>
    <div class="detail-tabs"><span>Overview</span><span>Responsibilities</span><span>Requirements</span><span>Benefits</span><span>Company</span></div>
    <div class="detail-body">
      <div>
        <h3>Job Description</h3><p>${escapeHTML(job.description)}</p>
        <h3>Key Responsibilities</h3><ul>${job.responsibilities.map(x=>`<li>${escapeHTML(x)}</li>`).join("")}</ul>
        <h3>Requirements</h3><ul>${job.requirements.map(x=>`<li>${escapeHTML(x)}</li>`).join("")}</ul>
        <h3>Benefits</h3><ul>${job.benefits.map(x=>`<li>${escapeHTML(x)}</li>`).join("")}</ul>
      </div>
      <aside class="detail-side">
        <div class="side-box"><strong>Additional Details</strong><div>Education: ${escapeHTML(job.education)}</div><div>Experience: ${escapeHTML(job.experience)}</div><div>Work Mode: ${escapeHTML(job.workMode)}</div><div>Job Type: ${escapeHTML(job.jobType)}</div><div>Job ID: ${escapeHTML(job.id)}</div></div>
        <div class="side-box"><strong>Benefits & Support</strong><div>Accommodation: ${job.accommodation?"Yes":"No"}</div><div>Food Provided: ${job.foodProvided?"Yes":"No"}</div><div>Visa Sponsorship: ${job.visaSponsorship?"Yes":"No"}</div><div>Relocation: ${job.relocation?"Yes":"No"}</div></div>
      </aside>
    </div>
    <div class="detail-bottom"><small>Posted ${escapeHTML(dateText(job.postedDate))} · Job information may be subject to verification.</small><button id="applyNowBtn" class="primary-btn" type="button">➤ Apply Now</button></div>
  </article>`;
  showScreen("details");
}
function renderApply(){
  const job=currentJob();
  if(!job){toast("Please select a job first.");showScreen("home");return;}
  $("applyJobSummary").innerHTML=`<div class="company-logo">${escapeHTML(job.logo||job.company[0])}</div><h2>${escapeHTML(job.title)}</h2><p>${escapeHTML(job.company)}</p><p>📍 ${escapeHTML(job.city)}, ${escapeHTML(job.state)}, ${escapeHTML(job.country)}</p><div class="summary-salary">${escapeHTML(money(job))}</div><p>${escapeHTML(job.jobType)} · ${escapeHTML(job.experience)}</p><p>Job ID: ${escapeHTML(job.id)}</p>`;
  $("appJobId").value=job.id; $("appDate").value=new Date().toISOString().slice(0,10);
  $("applicationForm").reset(); $("appJobId").value=job.id; $("appDate").value=new Date().toISOString().slice(0,10);
  $("resumeMeta").classList.add("hidden"); $("formError").textContent=""; APP_STATE.resume=null;
  $("appEducation").innerHTML='<option value="">Select education</option>'+["10th Pass","12th Pass","Diploma","Graduate"].map(x=>`<option>${x}</option>`).join("");
  populateSelect($("appCountry"),allCountries(),"Select country"); populateSelect($("appState"),[],"Select state / province"); populateSelect($("appCity"),[],"Select city");
  showScreen("apply");
}
function validateApplication(){
  const form=$("applicationForm"), fields=[["appName","Name is required."],["appEmail","Valid email is required."],["appMobile","Valid mobile number is required."],["appEducation","Education is required."],["appCountry","Country is required."],["appState","State / province is required."],["appCity","City is required."]];
  qsa(".field-error-msg",form).forEach(x=>x.remove()); qsa(".field-error",form).forEach(x=>x.classList.remove("field-error"));
  let ok=true;
  for(const [id,msg] of fields){
    const el=$(id), valid=el.value.trim() && (id!=="appEmail"||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value)) && (id!=="appMobile"||/^[0-9+\-\s()]{10,16}$/.test(el.value));
    if(!valid){ok=false;el.classList.add("field-error");const e=document.createElement("div");e.className="field-error-msg";e.textContent=msg;el.parentElement.appendChild(e);}
  }
  const validLocation=locationData[$("appCountry").value]?.[$("appState").value]?.includes($("appCity").value);
  if(!validLocation){ok=false;["appState","appCity"].forEach(id=>$(id).classList.add("field-error"));}
  if(!APP_STATE.resume){ok=false;toast("Please upload a PDF, DOC or DOCX resume.");}
  return ok;
}
function handleResume(file){
  if(!file){APP_STATE.resume=null;$("resumeMeta").classList.add("hidden");return;}
  const allowed=["application/pdf","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
  const ext=file.name.toLowerCase().split(".").pop();
  if(!["pdf","doc","docx"].includes(ext) || (file.type && !allowed.includes(file.type)) || file.size>5*1024*1024){
    $("resumeInput").value=""; APP_STATE.resume=null; $("resumeMeta").classList.add("hidden"); toast("Resume must be PDF/DOC/DOCX and 5MB or smaller."); return;
  }
  APP_STATE.resume={name:file.name,type:file.type||ext,size:file.size};
  $("resumeMeta").classList.remove("hidden");
  $("resumeMeta").innerHTML=`✓ ${escapeHTML(file.name)} · ${escapeHTML(ext.toUpperCase())} · ${(file.size/1024/1024).toFixed(2)} MB <button type="button" id="removeResume" class="text-btn">Remove</button>`;
}
function submitApplication(){
  if(APP_STATE.submitting || !validateApplication()) return;
  const job=currentJob(); if(!job){toast("Selected job is missing.");return;}
  APP_STATE.submitting=true;
  const btn=$("submitApplicationBtn"); btn.disabled=true; btn.innerHTML='<span class="spinner" style="display:inline-block;width:15px;height:15px;border-width:2px;vertical-align:middle"></span> Submitting Application...';
  setTimeout(()=>{
    const app={id:"application-"+Date.now(),jobId:job.id,jobTitle:job.title,company:job.company,location:`${job.city}, ${job.state}, ${job.country}`,applicantName:$("appName").value.trim(),email:$("appEmail").value.trim(),mobile:$("appMobile").value.trim(),education:$("appEducation").value,country:$("appCountry").value,state:$("appState").value,city:$("appCity").value,coverLetter:$("appCover").value.trim(),resumeName:APP_STATE.resume.name,submittedAt:new Date().toISOString(),status:"Submitted"};
    APP_STATE.applications.unshift(app); safeWrite(KEYS.apps,APP_STATE.applications);
    APP_STATE.submitting=false; btn.disabled=false; btn.textContent="➤ Submit Application";
    showScreen("success");
  },1400);
}
function renderSaved(){
  const saved=APP_STATE.savedJobs.map(id=>jobData.find(j=>j.id===id)).filter(Boolean);
  $("savedList").innerHTML=saved.map(j=>jobCardHTML(j)).join("");
  $("savedEmpty").classList.toggle("hidden",saved.length>0);
}
function renderApplications(){
  const list=$("applicationsList"), apps=APP_STATE.applications;
  list.innerHTML=apps.map(a=>`<article class="application-card"><div><h3>${escapeHTML(a.jobTitle)}</h3><p>${escapeHTML(a.company)} · ${escapeHTML(a.location)}</p><p>Applied ${escapeHTML(new Date(a.submittedAt).toLocaleString("en-IN"))}</p></div><span class="status-pill">${escapeHTML(a.status)}</span></article>`).join("");
  $("applicationsEmpty").classList.toggle("hidden",apps.length>0);
}
function renderCompanies(){
  const counts={}; jobData.forEach(j=>counts[j.company]=(counts[j.company]||0)+1);
  $("companyList").innerHTML=Object.entries(counts).slice(0,24).map(([c,n])=>`<article class="company-card"><strong>${escapeHTML(c)}</strong><p>${n} local dataset listing${n>1?"s":""}</p></article>`).join("");
}
function showScreen(name){
  const valid=["home","categories","details","apply","success","saved","applications","companies"];
  if(!valid.includes(name)) name="home";
  APP_STATE.screen=name;
  qsa(".screen").forEach(s=>s.classList.remove("active"));
  $("screen-"+name).classList.add("active");
  qsa("[data-nav]").forEach(b=>b.classList.toggle("active",b.dataset.nav===name||(name==="details"&&b.dataset.nav==="home")));
  qsa(".mobile-bottom-nav button").forEach(b=>b.classList.toggle("active",b.dataset.nav===name));
  window.scrollTo({top:0,behavior:"smooth"});
  if(name==="saved")renderSaved();
  if(name==="applications")renderApplications();
  if(name==="companies")renderCompanies();
  if(name==="categories")renderCategories();
  $("mobileMenu").classList.remove("open"); $("mobileMenu").setAttribute("aria-hidden","true");
}
function clearFilters(){
  APP_STATE.searchQuery=""; APP_STATE.locationQuery="";
  $("searchInput").value=""; $("locationInput").value="";
  APP_STATE.filters={country:"",state:"",city:"",category:"",jobType:"",experience:"",education:"",workMode:"",salaryMin:"",salaryMax:"",special:[]};
  ["filterCountry","filterState","filterCity","filterCategory","filterJobType","filterExperience","filterEducation","filterWorkMode"].forEach(id=>$(id).value="");
  $("salaryMin").value="";$("salaryMax").value="";qsa("[data-special]").forEach(x=>x.classList.remove("active"));
  refreshResults();
}
function bindEvents(){
  $("searchForm").addEventListener("submit",e=>{e.preventDefault();runSearch()});
  $("applyFiltersBtn").addEventListener("click",()=>{readFiltersFromUI();refreshResults()});
  $("clearFiltersBtn").addEventListener("click",clearFilters);$("noResultsClear").addEventListener("click",clearFilters);
  $("sortSelect").addEventListener("change",()=>{APP_STATE.sort=$("sortSelect").value;APP_STATE.page=1;renderJobs(applyPipeline())});
  $("jobList").addEventListener("click",e=>{
    const save=e.target.closest("[data-save]"), detail=e.target.closest("[data-details]"), card=e.target.closest(".job-card");
    if(save){e.stopPropagation();toggleSave(save.dataset.save);return}
    if(detail){e.stopPropagation();openJobDetails(detail.dataset.details);return}
    if(card)openJobDetails(card.dataset.jobId);
  });
  $("jobList").addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.closest(".job-card"))openJobDetails(e.target.closest(".job-card").dataset.jobId)});
  $("savedList").addEventListener("click",e=>{
    const save=e.target.closest("[data-save]"), detail=e.target.closest("[data-details]"), card=e.target.closest(".job-card");
    if(save){e.stopPropagation();toggleSave(save.dataset.save);renderSaved();return}
    if(detail){e.stopPropagation();openJobDetails(detail.dataset.details);return}
    if(card)openJobDetails(card.dataset.jobId);
  });
  $("pagination").addEventListener("click",e=>{const b=e.target.closest("[data-page]");if(b){APP_STATE.page=Number(b.dataset.page);renderJobs(applyPipeline());window.scrollTo({top:400,behavior:"smooth"})}});
  $("jobDetails").addEventListener("click",e=>{if(e.target.id==="applyNowBtn")renderApply();const save=e.target.closest("[data-save]");if(save)toggleSave(save.dataset.save,true)});
  $("resumeInput").addEventListener("change",e=>handleResume(e.target.files[0]));
  $("resumeMeta").addEventListener("click",e=>{if(e.target.id==="removeResume"){APP_STATE.resume=null;$("resumeInput").value="";$("resumeMeta").classList.add("hidden")}});
  $("applicationForm").addEventListener("submit",e=>{e.preventDefault();submitApplication()});
  qsa("[data-back]").forEach(b=>b.addEventListener("click",()=>showScreen(b.dataset.back==="details"?"details":"home")));
  qsa("[data-nav]").forEach(b=>b.addEventListener("click",()=>showScreen(b.dataset.nav)));
  $("viewApplicationsFromSuccess").addEventListener("click",()=>showScreen("applications"));
  $("menuApplications").addEventListener("click",()=>showScreen("applications"));
  $("menuBtn").addEventListener("click",()=>{$("mobileMenu").classList.add("open");$("mobileMenu").setAttribute("aria-hidden","false")});
  $("closeMenuBtn").addEventListener("click",()=>{$("mobileMenu").classList.remove("open");$("mobileMenu").setAttribute("aria-hidden","true")});
  $("mobileProfileBtn").addEventListener("click",()=>showModal("Profile","This frontend demo does not require login. Saved jobs and applications are stored locally on this device."));
  $("loginBtn").addEventListener("click",()=>showModal("Login","Login is reserved for a future backend integration. You can browse, save jobs and record applications without an account."));
  $("languageBtn").addEventListener("click",()=>showModal("Language","English is the reference UI language. A future backend can add full localization."));
  $("modalClose").addEventListener("click",closeModal);$("modalBackdrop").addEventListener("click",e=>{if(e.target.id==="modalBackdrop")closeModal()});
  $("filterPanel").addEventListener("change",e=>{if(e.target.matches("select,input"))readFiltersFromUI()});
  $("appCountry").addEventListener("change",()=>{populateSelect($("appState"),statesFor($("appCountry").value),"Select state / province");populateSelect($("appCity"),[],"Select city")});
  $("appState").addEventListener("change",()=>populateSelect($("appCity"),citiesFor($("appCountry").value,$("appState").value),"Select city"));
}
function toggleSave(jobId,stayDetails=false){
  const idx=APP_STATE.savedJobs.indexOf(jobId);
  if(idx>=0){APP_STATE.savedJobs.splice(idx,1);toast("Job removed from Saved Jobs");}
  else{APP_STATE.savedJobs.unshift(jobId);toast("Job saved");}
  safeWrite(KEYS.saved,APP_STATE.savedJobs);
  if(stayDetails)openJobDetails(jobId);else renderJobs(applyPipeline());
}
function showModal(title,body){
  $("modalTitle").textContent=title;$("modalBody").innerHTML=`<p>${escapeHTML(body)}</p>`;$("modalBackdrop").classList.remove("hidden");
}
function closeModal(){$("modalBackdrop").classList.add("hidden")}

function init(){
  APP_STATE.savedJobs=safeRead(KEYS.saved,[]).filter(id=>jobData.some(j=>j.id===id));
  APP_STATE.applications=safeRead(KEYS.apps,[]);
  setupFilters();setupLocationSelects("app");renderCategories();bindEvents();renderCompanies();refreshResults();
}
document.addEventListener("DOMContentLoaded",init);
})();