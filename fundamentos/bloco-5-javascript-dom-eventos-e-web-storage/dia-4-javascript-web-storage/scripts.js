const body = document.body;
const sideBar = document.querySelector('.barra-lateral');
const seta = document.querySelector('.seta');
const icons = document.querySelector('.footIcons');


seta.addEventListener('click', () => {
    sideBar.classList.toggle('close');
    icons.classList.toggle('close');
})