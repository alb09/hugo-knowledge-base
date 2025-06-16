(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;
    const currentTheme = localStorage.getItem("theme") || "light";
    if (currentTheme === "dark") {
      body.classList.add("dark-mode");
    }
    themeToggle.addEventListener("click", () => {
      if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
      } else {
        body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
      }
    });
  });
})();
