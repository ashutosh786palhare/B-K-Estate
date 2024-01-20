// JavaScript to toggle between light and dark mode
document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const toggleDarkModeBtn = document.getElementById('toggle-dark-mode-btn');

  // Toggle the class on button click
  toggleDarkModeBtn.addEventListener('click', function () {
    body.classList.toggle('dark-mode');
  });
});
