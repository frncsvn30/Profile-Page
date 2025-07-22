document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");

  // load saved mode
  const savedMode = localStorage.getItem("dark-mode");
  if (savedMode === "true") {
    document.body.classList.add("dark-mode");
  }

  toggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", isDark);
  });
});
