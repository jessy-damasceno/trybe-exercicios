const body = document.body;
const sideBar = document.querySelector('.barra-lateral');
const seta = document.querySelector('.seta');

seta.addEventListener('click', () => {
    sideBar.classList.toggle('close');
})