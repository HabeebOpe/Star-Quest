const body = document.querySelector('body');
const navBtn = document.querySelector('.open-nav')

navBtn.addEventListener('click', () => {
   body.classList.toggle('open')
})