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