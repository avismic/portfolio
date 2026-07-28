function renderHero(profile) {
  const container = document.getElementById("hero-content");
  container.innerHTML = `
    <span class="status-badge">${profile.status}</span>
    <h1 class="hero-title">${profile.name}</h1>
    <div class="hero-role">${profile.role}</div>
    <p class="hero-summary">${profile.summary}</p>
    <div class="cta-buttons">
      <a href="mailto:${profile.email}" class="btn btn-primary">Get In Touch</a>
      <a href="${profile.github}" target="_blank" class="btn">GitHub</a>
      <a href="${profile.linkedin}" target="_blank" class="btn">LinkedIn</a>
    </div>
  `;
}

function renderStats(stats) {
  const container = document.getElementById("stats-grid");
  container.innerHTML = stats
    .map(
      (stat) => `
    <div class="stat-card">
      <div class="stat-value">${stat.value}</div>
      <div class="stat-label">${stat.label}</div>
    </div>
  `,
    )
    .join("");
}

function renderExperience(experience) {
  const container = document.getElementById("experience-list");
  container.innerHTML = experience
    .map(
      (item) => `
    <div class="card">
      <div class="card-header">
        <div>
          <div class="card-title">${item.role}</div>
          <div class="card-subtitle">${item.company}</div>
        </div>
        <div class="card-meta">${item.period} | ${item.location}</div>
      </div>
      <ul class="bullet-list">
        ${item.highlights.map((h) => `<li>${h}</li>`).join("")}
      </ul>
    </div>
  `,
    )
    .join("");
}

function renderProjects(projects) {
  const container = document.getElementById("projects-grid");
  container.innerHTML = projects
    .map(
      (item) => `
    <div class="card">
      <div class="card-header">
        <div>
          <div class="card-title">${item.title}</div>
          <div class="card-subtitle">${item.subtitle}</div>
        </div>
        <div class="card-meta">${item.category}</div>
      </div>
      <div class="tag-container">
        ${item.tech.map((t) => `<span class="chip">${t}</span>`).join("")}
      </div>
      <ul class="bullet-list">
        ${item.highlights.map((h) => `<li>${h}</li>`).join("")}
      </ul>
    </div>
  `,
    )
    .join("");
}

function renderSkills(skills) {
  const container = document.getElementById("skills-container");
  container.innerHTML = Object.entries(skills)
    .map(
      ([category, list]) => `
    <div class="skill-row">
      <div class="skill-cat">${category}</div>
      <div class="tag-container" style="margin: 0;">
        ${list.map((s) => `<span class="chip">${s}</span>`).join("")}
      </div>
    </div>
  `,
    )
    .join("");
}

function renderEducation(education) {
  const container = document.getElementById("education-container");
  container.innerHTML = education
    .map(
      (item) => `
    <div class="card">
      <div class="card-header">
        <div>
          <div class="card-title">${item.institution}</div>
          <div class="card-subtitle">${item.degree}</div>
        </div>
        <div class="card-meta">${item.period}</div>
      </div>
    </div>
  `,
    )
    .join("");
}

function renderFooter(profile) {
  const container = document.getElementById("footer-content");
  container.innerHTML = `
    <p>${profile.name} &mdash; ${profile.phone} &mdash; ${profile.email}</p>
  `;
}
