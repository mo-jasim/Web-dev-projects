const nav = document.querySelector('.nav-box');
const closeNavButton = document.querySelector('.close-nav-button');
const openNavButton = document.querySelector('.open-nav-button');




openNavButton.addEventListener('click', show);
closeNavButton.addEventListener('click', close);

function show() {
    nav.style.display = 'flex';
    nav.style.top = '0';
}

function close() {
    nav.style.top = '-100%';
}