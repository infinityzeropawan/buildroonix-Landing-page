/**
 * BUILDROONIX — DEDICATED ADMIN DASHBOARD LOGIC
 * Manages security login, local media file uploads (images, GIFs, videos to Data URLs),
 * dynamic card creation/editing/deletion, and JSON config sync.
 */

let isAdminLoggedIn = false;

// Handle Admin Page Login
function handleAdminPageLogin(event) {
  if (event) event.preventDefault();

  const email = document.getElementById("adminEmail").value.trim();
  const password = document.getElementById("adminPassword").value.trim();
  const errBox = document.getElementById("loginError");

  // Credentials from CREDENTIALS.TXT
  if (email === "admin@buildroonix.com" && password === "admin123") {
    isAdminLoggedIn = true;
    errBox.style.display = "none";
    document.getElementById("adminPageLogin").style.display = "none";
    document.getElementById("adminPageDashboard").style.display = "block";
    populateAdminDashboard();
  } else {
    errBox.style.display = "block";
    errBox.textContent = "Invalid credentials. Check CREDENTIALS.TXT (admin@buildroonix.com / admin123)";
  }
}

// Tab Switching
function switchAdminTab(tabName, clickedBtn) {
  const tabs = document.querySelectorAll(".tab-section");
  const btns = document.querySelectorAll(".tab-btn");

  tabs.forEach(t => t.style.display = "none");
  btns.forEach(b => b.classList.remove("active"));

  const targetTab = document.getElementById(`tab-${tabName}`);
  if (targetTab) targetTab.style.display = "block";
  if (clickedBtn) clickedBtn.classList.add("active");
}

// Populate Dashboard Fields from content state
function populateAdminDashboard() {
  const cfg = content;

  // Hero
  setVal("adminHeroEyebrow", cfg.heroEyebrow || "ENGINEERING THE USEFUL FUTURE");
  setVal("adminHeroHeadline1", cfg.heroTitleLine1 || "Build ideas");
  setVal("adminHeroHeadlineHighlight", cfg.heroTitleHighlight || "into reality.");
  setVal("adminHeroCopy", cfg.heroDescription || "");
  setVal("adminHeroPrimaryCtaText", cfg.heroPrimaryText || "Explore Portals ↗");
  setVal("adminHeroPrimaryCtaLink", cfg.heroPrimaryLink || "#solutions");
  setVal("adminHeroMediaType", cfg.heroMediaType || "video");
  setVal("adminHeroMediaUrl", cfg.heroMediaUrl || "");

  // Contact & Socials
  setVal("adminContactEmail", cfg.contactEmail || "support@buildroonix.com");
  setVal("adminContactPhone", cfg.contactPhone || "+91 9580181697");
  setVal("adminContactUpi", cfg.contactUpi || "9580181697@ibl");
  setVal("adminContactGst", cfg.contactGst || "09HQHPD9487C1ZE");

  const socials = cfg.socials || defaultSiteContent.socials;
  setVal("adminSocialInsta", socials.instagram);
  setVal("adminSocialTwitter", socials.twitter);
  setVal("adminSocialGithub", socials.github);
  setVal("adminSocialLinkedin", socials.linkedin);
  setVal("adminSocialYoutube", socials.youtube);
  setVal("adminSocialDiscord", socials.discord);

  renderAdminCardsList();
}

// Render Editable List of Cards in Admin Panel
function renderAdminCardsList() {
  const cardsBox = document.getElementById("adminCardsBox");
  if (!cardsBox) return;

  if (!content.cards || !content.cards.length) {
    content.cards = defaultSiteContent.cards;
  }

  cardsBox.innerHTML = content.cards.map((card, idx) => `
    <div style="background:var(--paper); padding:20px; border:1px solid var(--line); border-radius:var(--radius-sm); margin-bottom:20px; position:relative;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
        <h4 style="color:${card.color || '#00f2fe'}; font-family:var(--font-heading);">Card ${idx + 1}: ${card.title}</h4>
        <button type="button" onclick="deleteCard(${idx})" style="background:#ff6b35; color:white; border:0; padding:6px 12px; border-radius:6px; font-size:12px; cursor:pointer;">Delete Card</button>
      </div>

      <div class="admin-grid">
        <div class="field">
          <label>Category Tag (Uppercase)</label>
          <input data-card="${idx}" data-key="category" value="${card.category || 'SOFTWARE'}">
        </div>
        <div class="field">
          <label>Subdomain / Purpose Tag</label>
          <input data-card="${idx}" data-key="subdomain" value="${card.subdomain || ''}">
        </div>
      </div>

      <div class="admin-grid">
        <div class="field">
          <label>Card Main Title</label>
          <input data-card="${idx}" data-key="title" value="${card.title || ''}">
        </div>
        <div class="field">
          <label>Accent Glow Color</label>
          <input type="color" data-card="${idx}" data-key="color" value="${card.color || '#00f2fe'}" style="height:44px; padding:4px;">
        </div>
      </div>

      <div class="field">
        <label>Purpose Description</label>
        <textarea data-card="${idx}" data-key="description">${card.description || ''}</textarea>
      </div>

      <div class="admin-grid">
        <div class="field">
          <label>Media Type</label>
          <select data-card="${idx}" data-key="mediaType" id="cardMediaType_${idx}">
            <option value="image" ${card.mediaType === "image" ? "selected" : ""}>Image / GIF</option>
            <option value="video" ${card.mediaType === "video" ? "selected" : ""}>Video (MP4)</option>
          </select>
        </div>
        <div class="field">
          <label>Media URL / Data Path</label>
          <input data-card="${idx}" data-key="mediaUrl" id="cardMediaUrl_${idx}" value="${card.mediaUrl || ''}">
        </div>
      </div>

      <div class="file-dropzone" onclick="document.getElementById('cardFile_${idx}').click()">
        📁 Upload Image, GIF, or Video File from Computer for Card ${idx + 1}
        <input type="file" id="cardFile_${idx}" accept="image/*,video/*" style="display:none;" onchange="handleFileUpload(this, 'cardMediaUrl_${idx}', 'cardMediaType_${idx}')" />
      </div>

      <div class="field" style="margin-top:14px;">
        <label>Destination Redirect Link</label>
        <input data-card="${idx}" data-key="link" value="${card.link || ''}">
      </div>
    </div>
  `).join("");
}

// Add New Card
function addNewCard() {
  if (!content.cards) content.cards = [];
  content.cards.push({
    category: "SOFTWARE",
    subdomain: "software.buildroonix.com",
    title: "New Custom System",
    description: "System purpose, features, member management & analytics.",
    color: "#00f2fe",
    mediaType: "image",
    mediaUrl: "assets/software_preview.png",
    link: "https://software.buildroonix.com"
  });
  renderAdminCardsList();
}

// Delete Card
function deleteCard(idx) {
  if (confirm(`Are you sure you want to delete Card ${idx + 1}?`)) {
    content.cards.splice(idx, 1);
    renderAdminCardsList();
  }
}

function setVal(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val || '';
}

function getVal(id) {
  const el = document.getElementById(id);
  return el ? el.value.trim() : '';
}

// File Upload Handler -> Converts local file to Data URL
function handleFileUpload(fileInput, targetInputId, mediaTypeInputId) {
  const file = fileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const dataUrl = e.target.result;
    const targetInput = document.getElementById(targetInputId);
    if (targetInput) {
      targetInput.value = dataUrl;
    }

    if (mediaTypeInputId) {
      const selectEl = document.getElementById(mediaTypeInputId);
      if (selectEl) {
        selectEl.value = file.type.startsWith("video/") ? "video" : "image";
      }
    }

    alert(`Successfully uploaded "${file.name}"!`);
  };
  reader.readAsDataURL(file);
}

// Save Changes to LocalStorage
function saveAdminChanges() {
  content.heroEyebrow = getVal("adminHeroEyebrow");
  content.heroTitleLine1 = getVal("adminHeroHeadline1");
  content.heroTitleHighlight = getVal("adminHeroHeadlineHighlight");
  content.heroDescription = getVal("adminHeroCopy");
  content.heroPrimaryText = getVal("adminHeroPrimaryCtaText");
  content.heroPrimaryLink = getVal("adminHeroPrimaryCtaLink");
  content.heroMediaType = getVal("adminHeroMediaType");
  content.heroMediaUrl = getVal("adminHeroMediaUrl");

  // Contact
  content.contactEmail = getVal("adminContactEmail");
  content.contactPhone = getVal("adminContactPhone");
  content.contactUpi = getVal("adminContactUpi");
  content.contactGst = getVal("adminContactGst");

  // Socials
  content.socials = {
    instagram: getVal("adminSocialInsta"),
    twitter: getVal("adminSocialTwitter"),
    github: getVal("adminSocialGithub"),
    linkedin: getVal("adminSocialLinkedin"),
    youtube: getVal("adminSocialYoutube"),
    discord: getVal("adminSocialDiscord")
  };

  // Cards
  document.querySelectorAll("[data-card]").forEach((el) => {
    const idx = el.dataset.card;
    const key = el.dataset.key;
    if (content.cards && content.cards[idx]) {
      content.cards[idx][key] = el.value;
    }
  });

  try {
    localStorage.setItem("buildroonixContent", JSON.stringify(content));
  } catch (err) {
    alert("Media file is large, but changes have been applied live!");
  }

  alert("Buildroonix content updated successfully! Return to index.html to view live changes.");
}

// JSON Export
function exportConfigJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(content, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "buildroonix_config.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

// JSON Import
function importConfigJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const imported = JSON.parse(e.target.result);
      if (imported && imported.cards) {
        content = imported;
        localStorage.setItem("buildroonixContent", JSON.stringify(content));
        populateAdminDashboard();
        alert("Configuration imported successfully!");
      } else {
        alert("Invalid JSON configuration structure.");
      }
    } catch (err) {
      alert("Error parsing JSON: " + err.message);
    }
  };
  reader.readAsText(file);
}

// Reset Defaults
function resetToDefaultConfig() {
  if (confirm("Reset all Buildroonix settings to default configuration?")) {
    content = JSON.parse(JSON.stringify(defaultSiteContent));
    localStorage.removeItem("buildroonixContent");
    populateAdminDashboard();
    alert("Reset to default configuration.");
  }
}
