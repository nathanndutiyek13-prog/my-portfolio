const themeToggleBtn = document.getElementById("theme-toggle");

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      themeToggleBtn.textContent = "☀️ Light Mode";
    } else {
      themeToggleBtn.textContent = "🌙 Dark Mode";
    }
  });
}
