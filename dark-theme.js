let page = document.querySelector('.page');
let themeButton = document.querySelector('.change-theme');

themeButton.onclick = function() {
  page.classList.toggle('light-theme');
  page.classList.toggle('dark-theme');
}