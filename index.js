const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const menuarea = document.querySelector('menu-area')

toggle.onclick = function() {
    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
        menu.style.backgroundColor = 'rgba(0, 0, 0, 0.37)';
    } else {
        menu.style.backgroundColor = 'transparent';
    }
}