const getMainPage = (link) => {
  const request = new XMLHttpRequest();
  request.open('get', link, false);
  request.onload = () => {
    const content = document.querySelector('#target');
    content.innerHTML = request.responseText;
  }
  request.send(null);
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
  getMainPage('./profile.html');
  changeColor(profileBtn);
})
const portfolioBtn = document.querySelector('#portfolio-btn');
portfolioBtn.addEventListener('click', () => {
  getMainPage('./portfolio.html');
  changeColor(portfolioBtn);
  portfolio();
})



//------------------------------------------------------------
const portfolio = () => {
  const modal = document.querySelector('.modal');
  const gallery = document.querySelector('.gallery');
  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      modal.classList.remove('open');
    }
  })

  gallery.addEventListener('click', (e) => {
    if (e.target.nodeName === 'IMG') {
      const src = e.target.getAttribute('src');
      const tagImg = modal.children[0];
      const tagName = modal.children[1];
      const fileName = e.target.getAttribute('data-fileName');
      tagImg.setAttribute('src', src);
      tagName.textContent = fileName;
      modal.classList.add('open');
    }
  })
}
