document.addEventListener("DOMContentLoaded", () => {
  fetch("data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch resume data");
      }
      return response.json();
    })
    .then((data) => {
      renderHero(data.profile);
      renderStats(data.stats);
      renderExperience(data.experience);
      renderProjects(data.projects);
      renderSkills(data.skills);
      renderEducation(data.education);
      renderFooter(data.profile);
    })
    .catch((error) => {
      console.error("Initialization error:", error);
    });
});
