const getMainPage = (link) => {
  const request = new XMLHttpRequest();
  request.open('get', link);
  request.onload = function () {
    const content = document.querySelector('#target');
    content.innerHTML = this.responseText;
  }
  request.send();
}
const sideBtn = document.querySelector('nav').children;
const changeColor = (target) => {
  [...sideBtn].map((elem) => {
    elem.classList.remove('change-color');
    target.classList.add('change-color');
  })
}



const profileBtn = document.querySelector('#profile-btn');
profileBtn.addEventListener('click', () => {
  getMainPage('https://yiminprogram.github.io/ProjectWebSite/src/profile.html');
  changeColor(profileBtn);
})
const portfolio = document.querySelector('#portfolio');
portfolio.addEventListener('click', () => {
  getMainPage('https://yiminprogram.github.io/ProjectWebSite/src/portfolio.html');
  changeColor(portfolio);
})