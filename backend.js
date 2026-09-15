/* AjobWorlds future backend integration placeholder.
   The current website intentionally works 100% from job-data.js + localStorage.
   No server, Node.js, PHP, Python API or database is required. */

const API_CONFIG = {
  baseURL: "",
  enabled: false,
  timeoutMs: 8000
};

async function submitApplicationToBackend(application) {
  if (!API_CONFIG.enabled || !API_CONFIG.baseURL) {
    return { enabled: false, recordedLocally: true };
  }

  // Future flow:
  // Frontend -> backend.js -> API -> server -> database.
  // Keep this function disabled until a real HTTPS API is available.
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), API_CONFIG.timeoutMs);
  try {
    const response = await fetch(`${API_CONFIG.baseURL}/applications`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(application),
      signal: controller.signal
    });
    if (!response.ok) throw new Error(`API error ${response.status}`);
    return await response.json();
  } finally {
    clearTimeout(timeout);
  }
}
