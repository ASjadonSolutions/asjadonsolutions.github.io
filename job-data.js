/* AjobWorlds local data source. Static demo data; not a live vacancy feed. */
const locationData = {
  "India": {
    "Rajasthan": [
      "Jaipur",
      "Jodhpur",
      "Udaipur",
      "Kota",
      "Ajmer",
      "Bikaner",
      "Alwar"
    ],
    "Maharashtra": [
      "Mumbai",
      "Pune",
      "Nagpur",
      "Nashik"
    ],
    "Karnataka": [
      "Bengaluru",
      "Mysuru",
      "Mangaluru"
    ],
    "Gujarat": [
      "Ahmedabad",
      "Surat",
      "Vadodara",
      "Rajkot"
    ],
    "Tamil Nadu": [
      "Chennai",
      "Coimbatore",
      "Madurai"
    ],
    "Telangana": [
      "Hyderabad"
    ],
    "Delhi": [
      "New Delhi"
    ],
    "Uttar Pradesh": [
      "Lucknow",
      "Noida",
      "Ghaziabad",
      "Kanpur",
      "Agra",
      "Varanasi"
    ],
    "West Bengal": [
      "Kolkata"
    ],
    "Haryana": [
      "Gurugram",
      "Faridabad"
    ],
    "Kerala": [
      "Kochi",
      "Thiruvananthapuram"
    ],
    "Punjab": [
      "Ludhiana",
      "Amritsar"
    ],
    "Madhya Pradesh": [
      "Indore",
      "Bhopal"
    ],
    "Bihar": [
      "Patna"
    ]
  },
  "USA": {
    "California": [
      "Los Angeles",
      "San Francisco",
      "San Diego"
    ],
    "Texas": [
      "Houston",
      "Dallas",
      "Austin"
    ],
    "New York": [
      "New York City",
      "Buffalo"
    ],
    "Florida": [
      "Miami",
      "Orlando"
    ],
    "Illinois": [
      "Chicago"
    ]
  },
  "Canada": {
    "Ontario": [
      "Toronto",
      "Ottawa"
    ],
    "British Columbia": [
      "Vancouver",
      "Victoria"
    ],
    "Quebec": [
      "Montreal",
      "Quebec City"
    ],
    "Alberta": [
      "Calgary",
      "Edmonton"
    ]
  },
  "UK": {
    "England": [
      "London",
      "Manchester",
      "Birmingham",
      "Liverpool"
    ],
    "Scotland": [
      "Edinburgh",
      "Glasgow"
    ],
    "Wales": [
      "Cardiff"
    ]
  },
  "Australia": {
    "New South Wales": [
      "Sydney",
      "Newcastle"
    ],
    "Victoria": [
      "Melbourne",
      "Geelong"
    ],
    "Queensland": [
      "Brisbane",
      "Gold Coast"
    ],
    "Western Australia": [
      "Perth"
    ]
  },
  "Germany": {
    "Bavaria": [
      "Munich",
      "Nuremberg"
    ],
    "Berlin": [
      "Berlin"
    ],
    "Hesse": [
      "Frankfurt"
    ]
  },
  "France": {
    "Île-de-France": [
      "Paris"
    ],
    "Auvergne-Rhône-Alpes": [
      "Lyon"
    ],
    "Provence-Alpes-Côte d'Azur": [
      "Marseille"
    ]
  },
  "Italy": {
    "Lazio": [
      "Rome"
    ],
    "Lombardy": [
      "Milan"
    ],
    "Tuscany": [
      "Florence"
    ]
  },
  "Spain": {
    "Madrid": [
      "Madrid"
    ],
    "Catalonia": [
      "Barcelona"
    ],
    "Valencian Community": [
      "Valencia"
    ]
  },
  "Netherlands": {
    "North Holland": [
      "Amsterdam"
    ],
    "South Holland": [
      "Rotterdam",
      "The Hague"
    ]
  },
  "Switzerland": {
    "Zürich": [
      "Zürich"
    ],
    "Geneva": [
      "Geneva"
    ],
    "Vaud": [
      "Lausanne"
    ]
  },
  "Ireland": {
    "Leinster": [
      "Dublin"
    ],
    "Munster": [
      "Cork"
    ]
  },
  "New Zealand": {
    "Auckland": [
      "Auckland"
    ],
    "Wellington": [
      "Wellington"
    ],
    "Canterbury": [
      "Christchurch"
    ]
  },
  "Japan": {
    "Tokyo": [
      "Tokyo"
    ],
    "Osaka": [
      "Osaka"
    ],
    "Aichi": [
      "Nagoya"
    ]
  },
  "China": {
    "Beijing": [
      "Beijing"
    ],
    "Shanghai": [
      "Shanghai"
    ],
    "Guangdong": [
      "Shenzhen",
      "Guangzhou"
    ]
  },
  "South Korea": {
    "Seoul": [
      "Seoul"
    ],
    "Busan": [
      "Busan"
    ],
    "Gyeonggi": [
      "Suwon"
    ]
  },
  "Singapore": {
    "Singapore": [
      "Singapore"
    ]
  },
  "Malaysia": {
    "Selangor": [
      "Kuala Lumpur",
      "Petaling Jaya"
    ],
    "Penang": [
      "George Town"
    ]
  },
  "Thailand": {
    "Bangkok": [
      "Bangkok"
    ],
    "Chon Buri": [
      "Pattaya"
    ]
  },
  "UAE": {
    "Dubai": [
      "Dubai"
    ],
    "Abu Dhabi": [
      "Abu Dhabi"
    ],
    "Sharjah": [
      "Sharjah"
    ]
  },
  "Saudi Arabia": {
    "Riyadh": [
      "Riyadh"
    ],
    "Makkah": [
      "Jeddah"
    ],
    "Eastern Province": [
      "Dammam"
    ]
  },
  "Qatar": {
    "Doha": [
      "Doha"
    ]
  },
  "Kuwait": {
    "Kuwait": [
      "Kuwait City"
    ]
  },
  "Oman": {
    "Muscat": [
      "Muscat"
    ]
  },
  "Bahrain": {
    "Bahrain": [
      "Manama"
    ]
  },
  "South Africa": {
    "Gauteng": [
      "Johannesburg",
      "Pretoria"
    ],
    "Western Cape": [
      "Cape Town"
    ]
  },
  "Brazil": {
    "São Paulo": [
      "São Paulo"
    ],
    "Rio de Janeiro": [
      "Rio de Janeiro"
    ]
  },
  "Mexico": {
    "Mexico City": [
      "Mexico City"
    ],
    "Jalisco": [
      "Guadalajara"
    ]
  }
};

const jobCategories = ["Driver", "Home Job", "Remote", "Factory", "Office", "Security", "Hotel", "Chef", "Hospital", "IT", "Warehouse", "Delivery", "Mechanic", "Electrician", "Teacher", "Bank", "Retail", "Cleaner", "Gardener"];

const jobData = [
  {
    "id": "IN-JP-WEB-001",
    "title": "Senior Web Developer",
    "company": "TechSolutions Pvt. Ltd.",
    "country": "India",
    "state": "Rajasthan",
    "city": "Jaipur",
    "category": "IT",
    "salaryMin": 25000,
    "salaryMax": 40000,
    "currency": "INR",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "1-3 Years",
    "education": "Graduate",
    "workMode": "On-site",
    "accommodation": true,
    "foodProvided": true,
    "visaSponsorship": false,
    "relocation": false,
    "description": "We are looking for a skilled and motivated Senior Web Developer to join our dynamic team. You will support day-to-day operations and deliver high-quality work.",
    "responsibilities": [
      "Perform core senior web developer responsibilities",
      "Work with team members and follow workplace standards",
      "Maintain quality, safety and timely delivery"
    ],
    "requirements": [
      "Graduate",
      "Good communication and practical skills",
      "1-3 Years experience preferred"
    ],
    "benefits": [
      "Professional growth",
      "Supportive workplace"
    ],
    "postedDate": "2026-09-15",
    "logo": "T",
    "verified": false
  },
  {
    "id": "IN-JP-DRIVER-001",
    "title": "Personal Driver",
    "company": "Skyline Travels",
    "country": "India",
    "state": "Rajasthan",
    "city": "Jaipur",
    "category": "Driver",
    "salaryMin": 18000,
    "salaryMax": 28000,
    "currency": "INR",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "Fresher",
    "education": "10th Pass",
    "workMode": "On-site",
    "accommodation": true,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": false,
    "description": "We are looking for a skilled and motivated Personal Driver to join our dynamic team. You will support day-to-day operations and deliver high-quality work.",
    "responsibilities": [
      "Perform core personal driver responsibilities",
      "Work with team members and follow workplace standards",
      "Maintain quality, safety and timely delivery"
    ],
    "requirements": [
      "10th Pass",
      "Good communication and practical skills",
      "Freshers can apply"
    ],
    "benefits": [
      "Professional growth",
      "Supportive workplace"
    ],
    "postedDate": "2026-09-15",
    "logo": "S",
    "verified": false
  },
  {
    "id": "IN-JP-IT-002",
    "title": "IT Support Executive",
    "company": "GlobalTech Solutions",
    "country": "India",
    "state": "Rajasthan",
    "city": "Jaipur",
    "category": "IT",
    "salaryMin": 20000,
    "salaryMax": 35000,
    "currency": "INR",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "1-3 Years",
    "education": "Graduate",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": true,
    "visaSponsorship": false,
    "relocation": false,
    "description": "We are looking for a skilled and motivated IT Support Executive to join our dynamic team. You will support day-to-day operations and deliver high-quality work.",
    "responsibilities": [
      "Perform core it support executive responsibilities",
      "Work with team members and follow workplace standards",
      "Maintain quality, safety and timely delivery"
    ],
    "requirements": [
      "Graduate",
      "Good communication and practical skills",
      "1-3 Years experience preferred"
    ],
    "benefits": [
      "Professional growth",
      "Supportive workplace"
    ],
    "postedDate": "2026-09-15",
    "logo": "G",
    "verified": false
  },
  {
    "id": "IN-JP-CHEF-003",
    "title": "Restaurant Chef",
    "company": "Royal Dining",
    "country": "India",
    "state": "Rajasthan",
    "city": "Jaipur",
    "category": "Chef",
    "salaryMin": 18000,
    "salaryMax": 25000,
    "currency": "INR",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "2-5 Years",
    "education": "12th Pass",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": true,
    "visaSponsorship": false,
    "relocation": false,
    "description": "We are looking for a skilled and motivated Restaurant Chef to join our dynamic team. You will support day-to-day operations and deliver high-quality work.",
    "responsibilities": [
      "Perform core restaurant chef responsibilities",
      "Work with team members and follow workplace standards",
      "Maintain quality, safety and timely delivery"
    ],
    "requirements": [
      "12th Pass",
      "Good communication and practical skills",
      "2-5 Years experience preferred"
    ],
    "benefits": [
      "Professional growth",
      "Supportive workplace"
    ],
    "postedDate": "2026-09-15",
    "logo": "R",
    "verified": false
  },
  {
    "id": "IN-JAIP-DRIV-010",
    "title": "Personal Driver",
    "company": "TechSolutions Pvt. Ltd.",
    "country": "India",
    "state": "Rajasthan",
    "city": "Jaipur",
    "category": "Driver",
    "salaryMin": 18000,
    "salaryMax": 28000,
    "currency": "INR",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "Fresher",
    "education": "Graduate",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": true,
    "visaSponsorship": false,
    "relocation": false,
    "description": "Join TechSolutions Pvt. Ltd. as a Personal Driver. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete personal driver tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Graduate",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-11",
    "logo": "T",
    "verified": false
  },
  {
    "id": "US-SANF-HOME-011",
    "title": "Work From Home Customer Support",
    "company": "Skyline Travels",
    "country": "USA",
    "state": "California",
    "city": "San Francisco",
    "category": "Home Job",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Internship",
    "experience": "2-5 Years",
    "education": "10th Pass",
    "workMode": "On-site",
    "accommodation": true,
    "foodProvided": true,
    "visaSponsorship": true,
    "relocation": true,
    "description": "Join Skyline Travels as a Work From Home Customer Support. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete work from home customer support tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "10th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-04",
    "logo": "S",
    "verified": false
  },
  {
    "id": "CA-TORO-REMO-012",
    "title": "Remote Digital Marketing Executive",
    "company": "GlobalTech Solutions",
    "country": "Canada",
    "state": "Ontario",
    "city": "Toronto",
    "category": "Remote",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Part Time",
    "experience": "2-5 Years",
    "education": "12th Pass",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": true,
    "visaSponsorship": true,
    "relocation": false,
    "description": "Join GlobalTech Solutions as a Remote Digital Marketing Executive. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete remote digital marketing executive tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-05",
    "logo": "G",
    "verified": false
  },
  {
    "id": "UK-LIVE-FACT-013",
    "title": "Factory Helper",
    "company": "Royal Dining",
    "country": "UK",
    "state": "England",
    "city": "Liverpool",
    "category": "Factory",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Part Time",
    "experience": "0-1 Years",
    "education": "Graduate",
    "workMode": "On-site",
    "accommodation": true,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": false,
    "description": "Join Royal Dining as a Factory Helper. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete factory helper tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Graduate",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-10",
    "logo": "R",
    "verified": false
  },
  {
    "id": "AU-SYDN-OFFI-014",
    "title": "Receptionist",
    "company": "Bright Future Academy",
    "country": "Australia",
    "state": "New South Wales",
    "city": "Sydney",
    "category": "Office",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Internship",
    "experience": "Fresher",
    "education": "Diploma",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": true,
    "visaSponsorship": false,
    "relocation": false,
    "description": "Join Bright Future Academy as a Receptionist. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete receptionist tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Diploma",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-04",
    "logo": "B",
    "verified": false
  },
  {
    "id": "GE-NURE-SECU-015",
    "title": "Security Guard",
    "company": "Apex Manufacturing",
    "country": "Germany",
    "state": "Bavaria",
    "city": "Nuremberg",
    "category": "Security",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Part Time",
    "experience": "Fresher",
    "education": "12th Pass",
    "workMode": "Hybrid",
    "accommodation": true,
    "foodProvided": true,
    "visaSponsorship": true,
    "relocation": false,
    "description": "Join Apex Manufacturing as a Security Guard. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete security guard tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-08",
    "logo": "A",
    "verified": false
  },
  {
    "id": "FR-PARI-HOTE-016",
    "title": "Housekeeping Associate",
    "company": "PrimeCare Hospital",
    "country": "France",
    "state": "Île-de-France",
    "city": "Paris",
    "category": "Hotel",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Internship",
    "experience": "0-1 Years",
    "education": "Graduate",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": true,
    "description": "Join PrimeCare Hospital as a Housekeeping Associate. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete housekeeping associate tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Graduate",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-11",
    "logo": "P",
    "verified": false
  },
  {
    "id": "IT-ROME-CHEF-017",
    "title": "Restaurant Chef",
    "company": "Urban Retail Group",
    "country": "Italy",
    "state": "Lazio",
    "city": "Rome",
    "category": "Chef",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "0-1 Years",
    "education": "12th Pass",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": false,
    "description": "Join Urban Retail Group as a Restaurant Chef. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete restaurant chef tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-04",
    "logo": "U",
    "verified": false
  },
  {
    "id": "SP-MADR-HOSP-018",
    "title": "Hospital Nurse",
    "company": "BlueWave Logistics",
    "country": "Spain",
    "state": "Madrid",
    "city": "Madrid",
    "category": "Hospital",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Contract",
    "experience": "1-3 Years",
    "education": "Diploma",
    "workMode": "Hybrid",
    "accommodation": true,
    "foodProvided": true,
    "visaSponsorship": false,
    "relocation": true,
    "description": "Join BlueWave Logistics as a Hospital Nurse. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete hospital nurse tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Diploma",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-07",
    "logo": "B",
    "verified": false
  },
  {
    "id": "NE-AMST-IT-019",
    "title": "Web Developer",
    "company": "SecureFirst Services",
    "country": "Netherlands",
    "state": "North Holland",
    "city": "Amsterdam",
    "category": "IT",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Internship",
    "experience": "2-5 Years",
    "education": "12th Pass",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": true,
    "visaSponsorship": false,
    "relocation": false,
    "description": "Join SecureFirst Services as a Web Developer. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete web developer tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-07",
    "logo": "S",
    "verified": false
  },
  {
    "id": "SW-ZRIC-WARE-020",
    "title": "Picker Packer",
    "company": "NextGen Digital",
    "country": "Switzerland",
    "state": "Zürich",
    "city": "Zürich",
    "category": "Warehouse",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "0-1 Years",
    "education": "12th Pass",
    "workMode": "Hybrid",
    "accommodation": true,
    "foodProvided": true,
    "visaSponsorship": true,
    "relocation": true,
    "description": "Join NextGen Digital as a Picker Packer. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete picker packer tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-13",
    "logo": "N",
    "verified": false
  },
  {
    "id": "IR-DUBL-DELI-021",
    "title": "Warehouse Delivery Coordinator",
    "company": "Metro Facilities",
    "country": "Ireland",
    "state": "Leinster",
    "city": "Dublin",
    "category": "Delivery",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "Fresher",
    "education": "Diploma",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": true,
    "description": "Join Metro Facilities as a Warehouse Delivery Coordinator. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete warehouse delivery coordinator tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Diploma",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-11",
    "logo": "M",
    "verified": false
  },
  {
    "id": "NE-AUCK-MECH-022",
    "title": "Service Technician",
    "company": "Sunrise Hotels",
    "country": "New Zealand",
    "state": "Auckland",
    "city": "Auckland",
    "category": "Mechanic",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Part Time",
    "experience": "1-3 Years",
    "education": "10th Pass",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": true,
    "visaSponsorship": false,
    "relocation": true,
    "description": "Join Sunrise Hotels as a Service Technician. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete service technician tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "10th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-09",
    "logo": "S",
    "verified": false
  },
  {
    "id": "JA-TOKY-ELEC-023",
    "title": "Electrician",
    "company": "Vertex Engineering",
    "country": "Japan",
    "state": "Tokyo",
    "city": "Tokyo",
    "category": "Electrician",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Internship",
    "experience": "Fresher",
    "education": "Graduate",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": true,
    "description": "Join Vertex Engineering as a Electrician. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete electrician tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Graduate",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-06",
    "logo": "V",
    "verified": false
  },
  {
    "id": "CH-BEIJ-TEAC-024",
    "title": "Tutor",
    "company": "GreenLeaf Services",
    "country": "China",
    "state": "Beijing",
    "city": "Beijing",
    "category": "Teacher",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Internship",
    "experience": "Fresher",
    "education": "10th Pass",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": true,
    "visaSponsorship": true,
    "relocation": true,
    "description": "Join GreenLeaf Services as a Tutor. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete tutor tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "10th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-02",
    "logo": "G",
    "verified": false
  },
  {
    "id": "SO-SEOU-BANK-025",
    "title": "Bank Customer Service Executive",
    "company": "TechSolutions Pvt. Ltd.",
    "country": "South Korea",
    "state": "Seoul",
    "city": "Seoul",
    "category": "Bank",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Part Time",
    "experience": "2-5 Years",
    "education": "10th Pass",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": true,
    "description": "Join TechSolutions Pvt. Ltd. as a Bank Customer Service Executive. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete bank customer service executive tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "10th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-09",
    "logo": "T",
    "verified": false
  },
  {
    "id": "SI-SING-RETA-026",
    "title": "Store Executive",
    "company": "Skyline Travels",
    "country": "Singapore",
    "state": "Singapore",
    "city": "Singapore",
    "category": "Retail",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Internship",
    "experience": "0-1 Years",
    "education": "12th Pass",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": false,
    "description": "Join Skyline Travels as a Store Executive. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete store executive tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-08",
    "logo": "S",
    "verified": false
  },
  {
    "id": "MA-PETA-CLEA-027",
    "title": "Cleaner",
    "company": "GlobalTech Solutions",
    "country": "Malaysia",
    "state": "Selangor",
    "city": "Petaling Jaya",
    "category": "Cleaner",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "0-1 Years",
    "education": "12th Pass",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": true,
    "visaSponsorship": true,
    "relocation": true,
    "description": "Join GlobalTech Solutions as a Cleaner. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete cleaner tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-02",
    "logo": "G",
    "verified": false
  },
  {
    "id": "TH-BANG-GARD-028",
    "title": "Gardener",
    "company": "Royal Dining",
    "country": "Thailand",
    "state": "Bangkok",
    "city": "Bangkok",
    "category": "Gardener",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Contract",
    "experience": "0-1 Years",
    "education": "10th Pass",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": true,
    "visaSponsorship": true,
    "relocation": false,
    "description": "Join Royal Dining as a Gardener. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete gardener tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "10th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-04",
    "logo": "R",
    "verified": false
  },
  {
    "id": "UA-DUBA-DRIV-029",
    "title": "Company Driver",
    "company": "Bright Future Academy",
    "country": "UAE",
    "state": "Dubai",
    "city": "Dubai",
    "category": "Driver",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Contract",
    "experience": "2-5 Years",
    "education": "12th Pass",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": true,
    "visaSponsorship": true,
    "relocation": true,
    "description": "Join Bright Future Academy as a Company Driver. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete company driver tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-06",
    "logo": "B",
    "verified": false
  },
  {
    "id": "SA-RIYA-HOME-030",
    "title": "Remote Data Entry Assistant",
    "company": "Apex Manufacturing",
    "country": "Saudi Arabia",
    "state": "Riyadh",
    "city": "Riyadh",
    "category": "Home Job",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Contract",
    "experience": "2-5 Years",
    "education": "Diploma",
    "workMode": "Remote",
    "accommodation": true,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": true,
    "description": "Join Apex Manufacturing as a Remote Data Entry Assistant. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete remote data entry assistant tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Diploma",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-12",
    "logo": "A",
    "verified": false
  },
  {
    "id": "QA-DOHA-REMO-031",
    "title": "Remote Video Editor",
    "company": "PrimeCare Hospital",
    "country": "Qatar",
    "state": "Doha",
    "city": "Doha",
    "category": "Remote",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Contract",
    "experience": "Fresher",
    "education": "12th Pass",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": true,
    "description": "Join PrimeCare Hospital as a Remote Video Editor. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete remote video editor tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-03",
    "logo": "P",
    "verified": false
  },
  {
    "id": "KU-KUWA-FACT-032",
    "title": "Machine Operator",
    "company": "Urban Retail Group",
    "country": "Kuwait",
    "state": "Kuwait",
    "city": "Kuwait City",
    "category": "Factory",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Internship",
    "experience": "2-5 Years",
    "education": "12th Pass",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": true,
    "description": "Join Urban Retail Group as a Machine Operator. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete machine operator tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-14",
    "logo": "U",
    "verified": false
  },
  {
    "id": "OM-MUSC-OFFI-033",
    "title": "Office Assistant",
    "company": "BlueWave Logistics",
    "country": "Oman",
    "state": "Muscat",
    "city": "Muscat",
    "category": "Office",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Contract",
    "experience": "Fresher",
    "education": "12th Pass",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": true,
    "description": "Join BlueWave Logistics as a Office Assistant. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete office assistant tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-15",
    "logo": "B",
    "verified": false
  },
  {
    "id": "BA-MANA-SECU-034",
    "title": "Security Guard",
    "company": "SecureFirst Services",
    "country": "Bahrain",
    "state": "Bahrain",
    "city": "Manama",
    "category": "Security",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Contract",
    "experience": "0-1 Years",
    "education": "Diploma",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": false,
    "description": "Join SecureFirst Services as a Security Guard. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete security guard tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Diploma",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-12",
    "logo": "S",
    "verified": false
  },
  {
    "id": "SO-PRET-HOTE-035",
    "title": "Housekeeping Associate",
    "company": "NextGen Digital",
    "country": "South Africa",
    "state": "Gauteng",
    "city": "Pretoria",
    "category": "Hotel",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "0-1 Years",
    "education": "12th Pass",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": true,
    "visaSponsorship": true,
    "relocation": false,
    "description": "Join NextGen Digital as a Housekeeping Associate. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete housekeeping associate tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-01",
    "logo": "N",
    "verified": false
  },
  {
    "id": "BR-SOPA-CHEF-036",
    "title": "Waiter",
    "company": "Metro Facilities",
    "country": "Brazil",
    "state": "São Paulo",
    "city": "São Paulo",
    "category": "Chef",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "2-5 Years",
    "education": "12th Pass",
    "workMode": "On-site",
    "accommodation": true,
    "foodProvided": true,
    "visaSponsorship": true,
    "relocation": true,
    "description": "Join Metro Facilities as a Waiter. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete waiter tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-07",
    "logo": "M",
    "verified": false
  },
  {
    "id": "ME-MEXI-HOSP-037",
    "title": "Hospital Nurse",
    "company": "Sunrise Hotels",
    "country": "Mexico",
    "state": "Mexico City",
    "city": "Mexico City",
    "category": "Hospital",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "0-1 Years",
    "education": "10th Pass",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": false,
    "description": "Join Sunrise Hotels as a Hospital Nurse. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete hospital nurse tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "10th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-11",
    "logo": "S",
    "verified": false
  },
  {
    "id": "IN-MUMB-IT-038",
    "title": "Web Developer",
    "company": "Vertex Engineering",
    "country": "India",
    "state": "Maharashtra",
    "city": "Mumbai",
    "category": "IT",
    "salaryMin": 30000,
    "salaryMax": 65000,
    "currency": "INR",
    "salaryPeriod": "month",
    "jobType": "Part Time",
    "experience": "1-3 Years",
    "education": "12th Pass",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": true,
    "visaSponsorship": false,
    "relocation": false,
    "description": "Join Vertex Engineering as a Web Developer. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete web developer tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-08",
    "logo": "V",
    "verified": false
  },
  {
    "id": "US-AUST-WARE-039",
    "title": "Picker Packer",
    "company": "GreenLeaf Services",
    "country": "USA",
    "state": "Texas",
    "city": "Austin",
    "category": "Warehouse",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "Fresher",
    "education": "10th Pass",
    "workMode": "Hybrid",
    "accommodation": true,
    "foodProvided": true,
    "visaSponsorship": true,
    "relocation": false,
    "description": "Join GreenLeaf Services as a Picker Packer. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete picker packer tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "10th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-15",
    "logo": "G",
    "verified": false
  },
  {
    "id": "CA-VANC-DELI-040",
    "title": "Warehouse Delivery Coordinator",
    "company": "TechSolutions Pvt. Ltd.",
    "country": "Canada",
    "state": "British Columbia",
    "city": "Vancouver",
    "category": "Delivery",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Internship",
    "experience": "Fresher",
    "education": "12th Pass",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": true,
    "visaSponsorship": false,
    "relocation": false,
    "description": "Join TechSolutions Pvt. Ltd. as a Warehouse Delivery Coordinator. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete warehouse delivery coordinator tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-13",
    "logo": "T",
    "verified": false
  },
  {
    "id": "UK-GLAS-MECH-041",
    "title": "Automobile Mechanic",
    "company": "Skyline Travels",
    "country": "UK",
    "state": "Scotland",
    "city": "Glasgow",
    "category": "Mechanic",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Part Time",
    "experience": "1-3 Years",
    "education": "10th Pass",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": true,
    "visaSponsorship": true,
    "relocation": true,
    "description": "Join Skyline Travels as a Automobile Mechanic. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete automobile mechanic tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "10th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-05",
    "logo": "S",
    "verified": false
  },
  {
    "id": "AU-MELB-ELEC-042",
    "title": "Electrician",
    "company": "GlobalTech Solutions",
    "country": "Australia",
    "state": "Victoria",
    "city": "Melbourne",
    "category": "Electrician",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Contract",
    "experience": "1-3 Years",
    "education": "12th Pass",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": true,
    "description": "Join GlobalTech Solutions as a Electrician. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete electrician tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-14",
    "logo": "G",
    "verified": false
  },
  {
    "id": "GE-BERL-TEAC-043",
    "title": "Tutor",
    "company": "Royal Dining",
    "country": "Germany",
    "state": "Berlin",
    "city": "Berlin",
    "category": "Teacher",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Contract",
    "experience": "Fresher",
    "education": "10th Pass",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": true,
    "description": "Join Royal Dining as a Tutor. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete tutor tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "10th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-09",
    "logo": "R",
    "verified": false
  },
  {
    "id": "FR-LYON-BANK-044",
    "title": "Accounts Assistant",
    "company": "Bright Future Academy",
    "country": "France",
    "state": "Auvergne-Rhône-Alpes",
    "city": "Lyon",
    "category": "Bank",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Internship",
    "experience": "Fresher",
    "education": "10th Pass",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": false,
    "description": "Join Bright Future Academy as a Accounts Assistant. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete accounts assistant tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "10th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-09",
    "logo": "B",
    "verified": false
  },
  {
    "id": "IT-MILA-RETA-045",
    "title": "Retail Cashier",
    "company": "Apex Manufacturing",
    "country": "Italy",
    "state": "Lombardy",
    "city": "Milan",
    "category": "Retail",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "2-5 Years",
    "education": "12th Pass",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": false,
    "description": "Join Apex Manufacturing as a Retail Cashier. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete retail cashier tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-11",
    "logo": "A",
    "verified": false
  },
  {
    "id": "SP-BARC-CLEA-046",
    "title": "Cleaner",
    "company": "PrimeCare Hospital",
    "country": "Spain",
    "state": "Catalonia",
    "city": "Barcelona",
    "category": "Cleaner",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Contract",
    "experience": "Fresher",
    "education": "Graduate",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": true,
    "visaSponsorship": true,
    "relocation": true,
    "description": "Join PrimeCare Hospital as a Cleaner. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete cleaner tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Graduate",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-01",
    "logo": "P",
    "verified": false
  },
  {
    "id": "NE-THEH-GARD-047",
    "title": "Gardener",
    "company": "Urban Retail Group",
    "country": "Netherlands",
    "state": "South Holland",
    "city": "The Hague",
    "category": "Gardener",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "1-3 Years",
    "education": "Diploma",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": true,
    "visaSponsorship": true,
    "relocation": false,
    "description": "Join Urban Retail Group as a Gardener. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete gardener tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Diploma",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-14",
    "logo": "U",
    "verified": false
  },
  {
    "id": "SW-GENE-DRIV-048",
    "title": "Delivery Driver",
    "company": "BlueWave Logistics",
    "country": "Switzerland",
    "state": "Geneva",
    "city": "Geneva",
    "category": "Driver",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "0-1 Years",
    "education": "12th Pass",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": true,
    "description": "Join BlueWave Logistics as a Delivery Driver. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete delivery driver tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-11",
    "logo": "B",
    "verified": false
  },
  {
    "id": "IR-CORK-HOME-049",
    "title": "Work From Home Customer Support",
    "company": "SecureFirst Services",
    "country": "Ireland",
    "state": "Munster",
    "city": "Cork",
    "category": "Home Job",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Internship",
    "experience": "2-5 Years",
    "education": "Graduate",
    "workMode": "Hybrid",
    "accommodation": true,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": false,
    "description": "Join SecureFirst Services as a Work From Home Customer Support. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete work from home customer support tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Graduate",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-06",
    "logo": "S",
    "verified": false
  },
  {
    "id": "NE-WELL-REMO-050",
    "title": "Remote Software Developer",
    "company": "NextGen Digital",
    "country": "New Zealand",
    "state": "Wellington",
    "city": "Wellington",
    "category": "Remote",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Part Time",
    "experience": "Fresher",
    "education": "Graduate",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": true,
    "visaSponsorship": true,
    "relocation": false,
    "description": "Join NextGen Digital as a Remote Software Developer. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete remote software developer tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Graduate",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-12",
    "logo": "N",
    "verified": false
  },
  {
    "id": "JA-OSAK-FACT-051",
    "title": "Machine Operator",
    "company": "Metro Facilities",
    "country": "Japan",
    "state": "Osaka",
    "city": "Osaka",
    "category": "Factory",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "2-5 Years",
    "education": "10th Pass",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": false,
    "description": "Join Metro Facilities as a Machine Operator. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete machine operator tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "10th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-09",
    "logo": "M",
    "verified": false
  },
  {
    "id": "CH-SHAN-OFFI-052",
    "title": "HR Assistant",
    "company": "Sunrise Hotels",
    "country": "China",
    "state": "Shanghai",
    "city": "Shanghai",
    "category": "Office",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "0-1 Years",
    "education": "Graduate",
    "workMode": "Hybrid",
    "accommodation": true,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": false,
    "description": "Join Sunrise Hotels as a HR Assistant. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete hr assistant tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Graduate",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-12",
    "logo": "S",
    "verified": false
  },
  {
    "id": "SO-BUSA-SECU-053",
    "title": "Security Supervisor",
    "company": "Vertex Engineering",
    "country": "South Korea",
    "state": "Busan",
    "city": "Busan",
    "category": "Security",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "1-3 Years",
    "education": "Diploma",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": true,
    "description": "Join Vertex Engineering as a Security Supervisor. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete security supervisor tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Diploma",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-07",
    "logo": "V",
    "verified": false
  },
  {
    "id": "SI-SING-HOTE-054",
    "title": "Housekeeping Associate",
    "company": "GreenLeaf Services",
    "country": "Singapore",
    "state": "Singapore",
    "city": "Singapore",
    "category": "Hotel",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Contract",
    "experience": "0-1 Years",
    "education": "Graduate",
    "workMode": "Hybrid",
    "accommodation": true,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": true,
    "description": "Join GreenLeaf Services as a Housekeeping Associate. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete housekeeping associate tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Graduate",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-13",
    "logo": "G",
    "verified": false
  },
  {
    "id": "MA-GEOR-CHEF-055",
    "title": "Waiter",
    "company": "TechSolutions Pvt. Ltd.",
    "country": "Malaysia",
    "state": "Penang",
    "city": "George Town",
    "category": "Chef",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "1-3 Years",
    "education": "Diploma",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": false,
    "description": "Join TechSolutions Pvt. Ltd. as a Waiter. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete waiter tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Diploma",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-11",
    "logo": "T",
    "verified": false
  },
  {
    "id": "TH-PATT-HOSP-056",
    "title": "Hospital Nurse",
    "company": "Skyline Travels",
    "country": "Thailand",
    "state": "Chon Buri",
    "city": "Pattaya",
    "category": "Hospital",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "1-3 Years",
    "education": "Graduate",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": true,
    "description": "Join Skyline Travels as a Hospital Nurse. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete hospital nurse tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Graduate",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-03",
    "logo": "S",
    "verified": false
  },
  {
    "id": "UA-ABUD-IT-057",
    "title": "IT Support Executive",
    "company": "GlobalTech Solutions",
    "country": "UAE",
    "state": "Abu Dhabi",
    "city": "Abu Dhabi",
    "category": "IT",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Contract",
    "experience": "Fresher",
    "education": "12th Pass",
    "workMode": "Hybrid",
    "accommodation": true,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": true,
    "description": "Join GlobalTech Solutions as a IT Support Executive. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete it support executive tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-08",
    "logo": "G",
    "verified": false
  },
  {
    "id": "SA-JEDD-WARE-058",
    "title": "Picker Packer",
    "company": "Royal Dining",
    "country": "Saudi Arabia",
    "state": "Makkah",
    "city": "Jeddah",
    "category": "Warehouse",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Internship",
    "experience": "0-1 Years",
    "education": "12th Pass",
    "workMode": "On-site",
    "accommodation": true,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": true,
    "description": "Join Royal Dining as a Picker Packer. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete picker packer tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-08",
    "logo": "R",
    "verified": false
  },
  {
    "id": "QA-DOHA-DELI-059",
    "title": "Delivery Executive",
    "company": "Bright Future Academy",
    "country": "Qatar",
    "state": "Doha",
    "city": "Doha",
    "category": "Delivery",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Internship",
    "experience": "0-1 Years",
    "education": "10th Pass",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": false,
    "description": "Join Bright Future Academy as a Delivery Executive. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete delivery executive tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "10th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-14",
    "logo": "B",
    "verified": false
  },
  {
    "id": "KU-KUWA-MECH-060",
    "title": "Service Technician",
    "company": "Apex Manufacturing",
    "country": "Kuwait",
    "state": "Kuwait",
    "city": "Kuwait City",
    "category": "Mechanic",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Internship",
    "experience": "2-5 Years",
    "education": "12th Pass",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": false,
    "description": "Join Apex Manufacturing as a Service Technician. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete service technician tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-08",
    "logo": "A",
    "verified": false
  },
  {
    "id": "OM-MUSC-ELEC-061",
    "title": "Electrician",
    "company": "PrimeCare Hospital",
    "country": "Oman",
    "state": "Muscat",
    "city": "Muscat",
    "category": "Electrician",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Part Time",
    "experience": "1-3 Years",
    "education": "Diploma",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": true,
    "visaSponsorship": false,
    "relocation": false,
    "description": "Join PrimeCare Hospital as a Electrician. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete electrician tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Diploma",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-15",
    "logo": "P",
    "verified": false
  },
  {
    "id": "BA-MANA-TEAC-062",
    "title": "School Teacher",
    "company": "Urban Retail Group",
    "country": "Bahrain",
    "state": "Bahrain",
    "city": "Manama",
    "category": "Teacher",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "0-1 Years",
    "education": "12th Pass",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": true,
    "description": "Join Urban Retail Group as a School Teacher. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete school teacher tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-07",
    "logo": "U",
    "verified": false
  },
  {
    "id": "SO-CAPE-BANK-063",
    "title": "Accounts Assistant",
    "company": "BlueWave Logistics",
    "country": "South Africa",
    "state": "Western Cape",
    "city": "Cape Town",
    "category": "Bank",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Internship",
    "experience": "1-3 Years",
    "education": "Diploma",
    "workMode": "Hybrid",
    "accommodation": true,
    "foodProvided": true,
    "visaSponsorship": false,
    "relocation": false,
    "description": "Join BlueWave Logistics as a Accounts Assistant. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete accounts assistant tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Diploma",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-12",
    "logo": "B",
    "verified": false
  },
  {
    "id": "BR-RIOD-RETA-064",
    "title": "Retail Cashier",
    "company": "SecureFirst Services",
    "country": "Brazil",
    "state": "Rio de Janeiro",
    "city": "Rio de Janeiro",
    "category": "Retail",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Internship",
    "experience": "2-5 Years",
    "education": "Diploma",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": false,
    "description": "Join SecureFirst Services as a Retail Cashier. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete retail cashier tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Diploma",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-12",
    "logo": "S",
    "verified": false
  },
  {
    "id": "ME-GUAD-CLEA-065",
    "title": "Cleaner",
    "company": "NextGen Digital",
    "country": "Mexico",
    "state": "Jalisco",
    "city": "Guadalajara",
    "category": "Cleaner",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Part Time",
    "experience": "2-5 Years",
    "education": "12th Pass",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": false,
    "description": "Join NextGen Digital as a Cleaner. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete cleaner tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-11",
    "logo": "N",
    "verified": false
  },
  {
    "id": "IN-MANG-GARD-066",
    "title": "Gardener",
    "company": "Metro Facilities",
    "country": "India",
    "state": "Karnataka",
    "city": "Mangaluru",
    "category": "Gardener",
    "salaryMin": 15000,
    "salaryMax": 24000,
    "currency": "INR",
    "salaryPeriod": "month",
    "jobType": "Internship",
    "experience": "0-1 Years",
    "education": "Diploma",
    "workMode": "On-site",
    "accommodation": true,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": false,
    "description": "Join Metro Facilities as a Gardener. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete gardener tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Diploma",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-10",
    "logo": "M",
    "verified": false
  },
  {
    "id": "US-BUFF-DRIV-067",
    "title": "Personal Driver",
    "company": "Sunrise Hotels",
    "country": "USA",
    "state": "New York",
    "city": "Buffalo",
    "category": "Driver",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Contract",
    "experience": "Fresher",
    "education": "Diploma",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": true,
    "visaSponsorship": true,
    "relocation": false,
    "description": "Join Sunrise Hotels as a Personal Driver. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete personal driver tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Diploma",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-06",
    "logo": "S",
    "verified": false
  },
  {
    "id": "CA-MONT-HOME-068",
    "title": "Work From Home Customer Support",
    "company": "Vertex Engineering",
    "country": "Canada",
    "state": "Quebec",
    "city": "Montreal",
    "category": "Home Job",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "2-5 Years",
    "education": "Graduate",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": false,
    "description": "Join Vertex Engineering as a Work From Home Customer Support. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete work from home customer support tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Graduate",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-08",
    "logo": "V",
    "verified": false
  },
  {
    "id": "UK-CARD-REMO-069",
    "title": "Remote Software Developer",
    "company": "GreenLeaf Services",
    "country": "UK",
    "state": "Wales",
    "city": "Cardiff",
    "category": "Remote",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "Fresher",
    "education": "Graduate",
    "workMode": "On-site",
    "accommodation": true,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": true,
    "description": "Join GreenLeaf Services as a Remote Software Developer. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete remote software developer tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Graduate",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-04",
    "logo": "G",
    "verified": false
  },
  {
    "id": "AU-BRIS-FACT-070",
    "title": "Factory Helper",
    "company": "TechSolutions Pvt. Ltd.",
    "country": "Australia",
    "state": "Queensland",
    "city": "Brisbane",
    "category": "Factory",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Contract",
    "experience": "0-1 Years",
    "education": "12th Pass",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": true,
    "description": "Join TechSolutions Pvt. Ltd. as a Factory Helper. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete factory helper tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-12",
    "logo": "T",
    "verified": false
  },
  {
    "id": "GE-FRAN-OFFI-071",
    "title": "Receptionist",
    "company": "Skyline Travels",
    "country": "Germany",
    "state": "Hesse",
    "city": "Frankfurt",
    "category": "Office",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Part Time",
    "experience": "1-3 Years",
    "education": "12th Pass",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": true,
    "description": "Join Skyline Travels as a Receptionist. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete receptionist tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-10",
    "logo": "S",
    "verified": false
  },
  {
    "id": "FR-MARS-SECU-072",
    "title": "Security Supervisor",
    "company": "GlobalTech Solutions",
    "country": "France",
    "state": "Provence-Alpes-Côte d'Azur",
    "city": "Marseille",
    "category": "Security",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Internship",
    "experience": "2-5 Years",
    "education": "12th Pass",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": true,
    "visaSponsorship": false,
    "relocation": true,
    "description": "Join GlobalTech Solutions as a Security Supervisor. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete security supervisor tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-13",
    "logo": "G",
    "verified": false
  },
  {
    "id": "IT-FLOR-HOTE-073",
    "title": "Hotel Front Desk Executive",
    "company": "Royal Dining",
    "country": "Italy",
    "state": "Tuscany",
    "city": "Florence",
    "category": "Hotel",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Contract",
    "experience": "1-3 Years",
    "education": "Diploma",
    "workMode": "Hybrid",
    "accommodation": true,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": true,
    "description": "Join Royal Dining as a Hotel Front Desk Executive. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete hotel front desk executive tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Diploma",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-14",
    "logo": "R",
    "verified": false
  },
  {
    "id": "SP-VALE-CHEF-074",
    "title": "Cook",
    "company": "Bright Future Academy",
    "country": "Spain",
    "state": "Valencian Community",
    "city": "Valencia",
    "category": "Chef",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "Fresher",
    "education": "Diploma",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": false,
    "description": "Join Bright Future Academy as a Cook. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete cook tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Diploma",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-12",
    "logo": "B",
    "verified": false
  },
  {
    "id": "NE-AMST-HOSP-075",
    "title": "Pharmacy Assistant",
    "company": "Apex Manufacturing",
    "country": "Netherlands",
    "state": "North Holland",
    "city": "Amsterdam",
    "category": "Hospital",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Part Time",
    "experience": "2-5 Years",
    "education": "Diploma",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": true,
    "description": "Join Apex Manufacturing as a Pharmacy Assistant. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete pharmacy assistant tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Diploma",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-15",
    "logo": "A",
    "verified": false
  },
  {
    "id": "SW-LAUS-IT-076",
    "title": "Software Developer",
    "company": "PrimeCare Hospital",
    "country": "Switzerland",
    "state": "Vaud",
    "city": "Lausanne",
    "category": "IT",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "0-1 Years",
    "education": "Diploma",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": true,
    "visaSponsorship": false,
    "relocation": false,
    "description": "Join PrimeCare Hospital as a Software Developer. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete software developer tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Diploma",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-08",
    "logo": "P",
    "verified": false
  },
  {
    "id": "IR-DUBL-WARE-077",
    "title": "Warehouse Worker",
    "company": "Urban Retail Group",
    "country": "Ireland",
    "state": "Leinster",
    "city": "Dublin",
    "category": "Warehouse",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Internship",
    "experience": "1-3 Years",
    "education": "Graduate",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": true,
    "description": "Join Urban Retail Group as a Warehouse Worker. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete warehouse worker tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Graduate",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-04",
    "logo": "U",
    "verified": false
  },
  {
    "id": "NE-CHRI-DELI-078",
    "title": "Delivery Executive",
    "company": "BlueWave Logistics",
    "country": "New Zealand",
    "state": "Canterbury",
    "city": "Christchurch",
    "category": "Delivery",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Contract",
    "experience": "0-1 Years",
    "education": "Diploma",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": false,
    "description": "Join BlueWave Logistics as a Delivery Executive. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete delivery executive tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Diploma",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-13",
    "logo": "B",
    "verified": false
  },
  {
    "id": "JA-NAGO-MECH-079",
    "title": "Automobile Mechanic",
    "company": "SecureFirst Services",
    "country": "Japan",
    "state": "Aichi",
    "city": "Nagoya",
    "category": "Mechanic",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Internship",
    "experience": "Fresher",
    "education": "Graduate",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": false,
    "description": "Join SecureFirst Services as a Automobile Mechanic. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete automobile mechanic tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Graduate",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-06",
    "logo": "S",
    "verified": false
  },
  {
    "id": "CH-SHEN-ELEC-080",
    "title": "Maintenance Electrician",
    "company": "NextGen Digital",
    "country": "China",
    "state": "Guangdong",
    "city": "Shenzhen",
    "category": "Electrician",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Part Time",
    "experience": "1-3 Years",
    "education": "Diploma",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": false,
    "description": "Join NextGen Digital as a Maintenance Electrician. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete maintenance electrician tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Diploma",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-05",
    "logo": "N",
    "verified": false
  },
  {
    "id": "SO-SUWO-TEAC-081",
    "title": "School Teacher",
    "company": "Metro Facilities",
    "country": "South Korea",
    "state": "Gyeonggi",
    "city": "Suwon",
    "category": "Teacher",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "Fresher",
    "education": "12th Pass",
    "workMode": "Hybrid",
    "accommodation": true,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": true,
    "description": "Join Metro Facilities as a School Teacher. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete school teacher tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-12",
    "logo": "M",
    "verified": false
  },
  {
    "id": "SI-SING-BANK-082",
    "title": "Accounts Assistant",
    "company": "Sunrise Hotels",
    "country": "Singapore",
    "state": "Singapore",
    "city": "Singapore",
    "category": "Bank",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "1-3 Years",
    "education": "Graduate",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": false,
    "description": "Join Sunrise Hotels as a Accounts Assistant. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete accounts assistant tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Graduate",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-05",
    "logo": "S",
    "verified": false
  },
  {
    "id": "MA-PETA-RETA-083",
    "title": "Retail Cashier",
    "company": "Vertex Engineering",
    "country": "Malaysia",
    "state": "Selangor",
    "city": "Petaling Jaya",
    "category": "Retail",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Contract",
    "experience": "0-1 Years",
    "education": "Graduate",
    "workMode": "On-site",
    "accommodation": true,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": true,
    "description": "Join Vertex Engineering as a Retail Cashier. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete retail cashier tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Graduate",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-02",
    "logo": "V",
    "verified": false
  },
  {
    "id": "TH-BANG-CLEA-084",
    "title": "Cleaner",
    "company": "GreenLeaf Services",
    "country": "Thailand",
    "state": "Bangkok",
    "city": "Bangkok",
    "category": "Cleaner",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Part Time",
    "experience": "1-3 Years",
    "education": "Diploma",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": true,
    "description": "Join GreenLeaf Services as a Cleaner. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete cleaner tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Diploma",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-14",
    "logo": "G",
    "verified": false
  },
  {
    "id": "UA-SHAR-GARD-085",
    "title": "Gardener",
    "company": "TechSolutions Pvt. Ltd.",
    "country": "UAE",
    "state": "Sharjah",
    "city": "Sharjah",
    "category": "Gardener",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "Fresher",
    "education": "10th Pass",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": true,
    "visaSponsorship": true,
    "relocation": true,
    "description": "Join TechSolutions Pvt. Ltd. as a Gardener. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete gardener tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "10th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-13",
    "logo": "T",
    "verified": false
  },
  {
    "id": "SA-DAMM-DRIV-086",
    "title": "Taxi Driver",
    "company": "Skyline Travels",
    "country": "Saudi Arabia",
    "state": "Eastern Province",
    "city": "Dammam",
    "category": "Driver",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Contract",
    "experience": "Fresher",
    "education": "12th Pass",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": false,
    "description": "Join Skyline Travels as a Taxi Driver. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete taxi driver tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-15",
    "logo": "S",
    "verified": false
  },
  {
    "id": "QA-DOHA-HOME-087",
    "title": "Remote Data Entry Assistant",
    "company": "GlobalTech Solutions",
    "country": "Qatar",
    "state": "Doha",
    "city": "Doha",
    "category": "Home Job",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "1-3 Years",
    "education": "Diploma",
    "workMode": "Hybrid",
    "accommodation": true,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": true,
    "description": "Join GlobalTech Solutions as a Remote Data Entry Assistant. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete remote data entry assistant tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Diploma",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-05",
    "logo": "G",
    "verified": false
  },
  {
    "id": "KU-KUWA-REMO-088",
    "title": "Remote Digital Marketing Executive",
    "company": "Royal Dining",
    "country": "Kuwait",
    "state": "Kuwait",
    "city": "Kuwait City",
    "category": "Remote",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "Fresher",
    "education": "12th Pass",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": true,
    "description": "Join Royal Dining as a Remote Digital Marketing Executive. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete remote digital marketing executive tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-07",
    "logo": "R",
    "verified": false
  },
  {
    "id": "OM-MUSC-FACT-089",
    "title": "Machine Operator",
    "company": "Bright Future Academy",
    "country": "Oman",
    "state": "Muscat",
    "city": "Muscat",
    "category": "Factory",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "2-5 Years",
    "education": "Graduate",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": false,
    "description": "Join Bright Future Academy as a Machine Operator. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete machine operator tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Graduate",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-11",
    "logo": "B",
    "verified": false
  },
  {
    "id": "BA-MANA-OFFI-090",
    "title": "Office Assistant",
    "company": "Apex Manufacturing",
    "country": "Bahrain",
    "state": "Bahrain",
    "city": "Manama",
    "category": "Office",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Part Time",
    "experience": "1-3 Years",
    "education": "12th Pass",
    "workMode": "Hybrid",
    "accommodation": true,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": true,
    "description": "Join Apex Manufacturing as a Office Assistant. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete office assistant tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-14",
    "logo": "A",
    "verified": false
  },
  {
    "id": "SO-PRET-SECU-091",
    "title": "Security Guard",
    "company": "PrimeCare Hospital",
    "country": "South Africa",
    "state": "Gauteng",
    "city": "Pretoria",
    "category": "Security",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "Fresher",
    "education": "10th Pass",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": false,
    "description": "Join PrimeCare Hospital as a Security Guard. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete security guard tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "10th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-08",
    "logo": "P",
    "verified": false
  },
  {
    "id": "BR-SOPA-HOTE-092",
    "title": "Housekeeping Associate",
    "company": "Urban Retail Group",
    "country": "Brazil",
    "state": "São Paulo",
    "city": "São Paulo",
    "category": "Hotel",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Part Time",
    "experience": "2-5 Years",
    "education": "Graduate",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": true,
    "visaSponsorship": true,
    "relocation": false,
    "description": "Join Urban Retail Group as a Housekeeping Associate. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete housekeeping associate tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Graduate",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-10",
    "logo": "U",
    "verified": false
  },
  {
    "id": "ME-MEXI-CHEF-093",
    "title": "Cook",
    "company": "BlueWave Logistics",
    "country": "Mexico",
    "state": "Mexico City",
    "city": "Mexico City",
    "category": "Chef",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "Fresher",
    "education": "10th Pass",
    "workMode": "On-site",
    "accommodation": true,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": true,
    "description": "Join BlueWave Logistics as a Cook. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete cook tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "10th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-08",
    "logo": "B",
    "verified": false
  },
  {
    "id": "IN-AHME-HOSP-094",
    "title": "Pharmacy Assistant",
    "company": "SecureFirst Services",
    "country": "India",
    "state": "Gujarat",
    "city": "Ahmedabad",
    "category": "Hospital",
    "salaryMin": 18000,
    "salaryMax": 28000,
    "currency": "INR",
    "salaryPeriod": "month",
    "jobType": "Contract",
    "experience": "1-3 Years",
    "education": "12th Pass",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": true,
    "visaSponsorship": false,
    "relocation": false,
    "description": "Join SecureFirst Services as a Pharmacy Assistant. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete pharmacy assistant tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-06",
    "logo": "S",
    "verified": false
  },
  {
    "id": "US-ORLA-IT-095",
    "title": "Software Developer",
    "company": "NextGen Digital",
    "country": "USA",
    "state": "Florida",
    "city": "Orlando",
    "category": "IT",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Part Time",
    "experience": "1-3 Years",
    "education": "Graduate",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": false,
    "description": "Join NextGen Digital as a Software Developer. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete software developer tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Graduate",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-11",
    "logo": "N",
    "verified": false
  },
  {
    "id": "CA-CALG-WARE-096",
    "title": "Picker Packer",
    "company": "Metro Facilities",
    "country": "Canada",
    "state": "Alberta",
    "city": "Calgary",
    "category": "Warehouse",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Contract",
    "experience": "Fresher",
    "education": "Diploma",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": true,
    "description": "Join Metro Facilities as a Picker Packer. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete picker packer tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Diploma",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-14",
    "logo": "M",
    "verified": false
  },
  {
    "id": "UK-LIVE-DELI-097",
    "title": "Delivery Executive",
    "company": "Sunrise Hotels",
    "country": "UK",
    "state": "England",
    "city": "Liverpool",
    "category": "Delivery",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Contract",
    "experience": "2-5 Years",
    "education": "Diploma",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": false,
    "description": "Join Sunrise Hotels as a Delivery Executive. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete delivery executive tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Diploma",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-13",
    "logo": "S",
    "verified": false
  },
  {
    "id": "AU-PERT-MECH-098",
    "title": "Automobile Mechanic",
    "company": "Vertex Engineering",
    "country": "Australia",
    "state": "Western Australia",
    "city": "Perth",
    "category": "Mechanic",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "0-1 Years",
    "education": "Graduate",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": true,
    "description": "Join Vertex Engineering as a Automobile Mechanic. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete automobile mechanic tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Graduate",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-11",
    "logo": "V",
    "verified": false
  },
  {
    "id": "GE-NURE-ELEC-099",
    "title": "Electrician",
    "company": "GreenLeaf Services",
    "country": "Germany",
    "state": "Bavaria",
    "city": "Nuremberg",
    "category": "Electrician",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Contract",
    "experience": "0-1 Years",
    "education": "Graduate",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": true,
    "visaSponsorship": true,
    "relocation": true,
    "description": "Join GreenLeaf Services as a Electrician. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete electrician tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Graduate",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-02",
    "logo": "G",
    "verified": false
  },
  {
    "id": "FR-PARI-TEAC-100",
    "title": "School Teacher",
    "company": "TechSolutions Pvt. Ltd.",
    "country": "France",
    "state": "Île-de-France",
    "city": "Paris",
    "category": "Teacher",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Contract",
    "experience": "2-5 Years",
    "education": "Graduate",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": true,
    "description": "Join TechSolutions Pvt. Ltd. as a School Teacher. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete school teacher tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Graduate",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-09",
    "logo": "T",
    "verified": false
  },
  {
    "id": "IT-ROME-BANK-101",
    "title": "Bank Customer Service Executive",
    "company": "Skyline Travels",
    "country": "Italy",
    "state": "Lazio",
    "city": "Rome",
    "category": "Bank",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Internship",
    "experience": "2-5 Years",
    "education": "12th Pass",
    "workMode": "On-site",
    "accommodation": true,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": false,
    "description": "Join Skyline Travels as a Bank Customer Service Executive. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete bank customer service executive tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "12th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-05",
    "logo": "S",
    "verified": false
  },
  {
    "id": "SP-MADR-RETA-102",
    "title": "Retail Cashier",
    "company": "GlobalTech Solutions",
    "country": "Spain",
    "state": "Madrid",
    "city": "Madrid",
    "category": "Retail",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Part Time",
    "experience": "1-3 Years",
    "education": "Graduate",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": false,
    "description": "Join GlobalTech Solutions as a Retail Cashier. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete retail cashier tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Graduate",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-09",
    "logo": "G",
    "verified": false
  },
  {
    "id": "NE-THEH-CLEA-103",
    "title": "Cleaner",
    "company": "Royal Dining",
    "country": "Netherlands",
    "state": "South Holland",
    "city": "The Hague",
    "category": "Cleaner",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Contract",
    "experience": "2-5 Years",
    "education": "Graduate",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": true,
    "description": "Join Royal Dining as a Cleaner. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete cleaner tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Graduate",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-01",
    "logo": "R",
    "verified": false
  },
  {
    "id": "SW-ZRIC-GARD-104",
    "title": "Gardener",
    "company": "Bright Future Academy",
    "country": "Switzerland",
    "state": "Zürich",
    "city": "Zürich",
    "category": "Gardener",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Internship",
    "experience": "2-5 Years",
    "education": "Diploma",
    "workMode": "Hybrid",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": true,
    "description": "Join Bright Future Academy as a Gardener. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete gardener tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Diploma",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-10",
    "logo": "B",
    "verified": false
  },
  {
    "id": "IR-CORK-DRIV-105",
    "title": "Taxi Driver",
    "company": "Apex Manufacturing",
    "country": "Ireland",
    "state": "Munster",
    "city": "Cork",
    "category": "Driver",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "Fresher",
    "education": "Diploma",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": true,
    "visaSponsorship": true,
    "relocation": false,
    "description": "Join Apex Manufacturing as a Taxi Driver. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete taxi driver tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Diploma",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-02",
    "logo": "A",
    "verified": false
  },
  {
    "id": "NE-AUCK-HOME-106",
    "title": "Remote Data Entry Assistant",
    "company": "PrimeCare Hospital",
    "country": "New Zealand",
    "state": "Auckland",
    "city": "Auckland",
    "category": "Home Job",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Internship",
    "experience": "1-3 Years",
    "education": "Graduate",
    "workMode": "Remote",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": true,
    "relocation": false,
    "description": "Join PrimeCare Hospital as a Remote Data Entry Assistant. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete remote data entry assistant tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Graduate",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-07",
    "logo": "P",
    "verified": false
  },
  {
    "id": "JA-TOKY-REMO-107",
    "title": "Remote Video Editor",
    "company": "Urban Retail Group",
    "country": "Japan",
    "state": "Tokyo",
    "city": "Tokyo",
    "category": "Remote",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "2-5 Years",
    "education": "10th Pass",
    "workMode": "Remote",
    "accommodation": true,
    "foodProvided": true,
    "visaSponsorship": false,
    "relocation": true,
    "description": "Join Urban Retail Group as a Remote Video Editor. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete remote video editor tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "10th Pass",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-07",
    "logo": "U",
    "verified": false
  },
  {
    "id": "CH-BEIJ-FACT-108",
    "title": "Factory Helper",
    "company": "BlueWave Logistics",
    "country": "China",
    "state": "Beijing",
    "city": "Beijing",
    "category": "Factory",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "Fresher",
    "education": "Diploma",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": true,
    "visaSponsorship": true,
    "relocation": false,
    "description": "Join BlueWave Logistics as a Factory Helper. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete factory helper tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Diploma",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-05",
    "logo": "B",
    "verified": false
  },
  {
    "id": "SO-SEOU-OFFI-109",
    "title": "Receptionist",
    "company": "SecureFirst Services",
    "country": "South Korea",
    "state": "Seoul",
    "city": "Seoul",
    "category": "Office",
    "salaryMin": 1800,
    "salaryMax": 2100,
    "currency": "USD",
    "salaryPeriod": "month",
    "jobType": "Full Time",
    "experience": "1-3 Years",
    "education": "Diploma",
    "workMode": "On-site",
    "accommodation": false,
    "foodProvided": false,
    "visaSponsorship": false,
    "relocation": true,
    "description": "Join SecureFirst Services as a Receptionist. This local/static listing demonstrates the AjobWorlds job discovery and application flow.",
    "responsibilities": [
      "Complete receptionist tasks safely and on time",
      "Collaborate with the team",
      "Follow company procedures"
    ],
    "requirements": [
      "Diploma",
      "Clear communication",
      "Relevant skills or willingness to learn"
    ],
    "benefits": [
      "Growth opportunities",
      "Team support"
    ],
    "postedDate": "2026-09-03",
    "logo": "S",
    "verified": false
  }
];
