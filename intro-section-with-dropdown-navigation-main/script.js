const nav = document.querySelectorAll('.nav-item');
const menuIcon = document.querySelector('.menu-icon');
const btn= document.querySelector('.btn-wrapper');
const menuClose = document.querySelector('.menu-icon-close');
const modal = document.querySelector('.modal');
const wrapper = document.querySelector('.wrap');

nav[0].addEventListener('click', () => {
    nav[0].classList.toggle('active');
})

nav[1].addEventListener('click', () => {
    nav[1].classList.toggle('active');
})


function showMenuHandler() {
    modal.classList.add('active');
    wrapper.classList.add('active');
    btn.classList.add('active');
}


function closeMenuHandler() {
    if (modal.classList.contains('active')) {
        modal.classList.remove('active');
    }

    if (wrapper.classList.contains('active')) {
        wrapper.classList.remove('active');
    }

    if (btn.classList.contains('active')) {
        btn.classList.remove('active');
    }
}

menuIcon.addEventListener('click', showMenuHandler);
menuClose.addEventListener('click', closeMenuHandler)