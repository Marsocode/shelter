
const menu_burger = document.querySelector('.menu_burger');
const menu = document.getElementById('menu');
menu.className = "menu";
const header = document.querySelector('.header');
const logo = document.querySelector('.logo');
const overlay = document.querySelector('.overlay');

menu_burger.addEventListener("click", function() {
    if (menu.classList.contains('slide-in')) {
        menu_burger.classList.remove('active');
        menu.classList.remove('slide-in');
        menu.classList.add('slide-out');
        document.body.classList.remove('body_lock');

        header.style.background = "white";
        logo.style.visibility = "visible";

        overlay.classList.remove("overlay-display");
        overlay.classList.add("overlay-none");
    } else {
        header.style.background = "rgba(41, 41, 41, 0.05)";
        logo.style.visibility = "hidden";
        document.body.classList.add('body_lock');
        menu_burger.classList.add('active');
        menu.classList.add('slide-in');
        menu.classList.remove('slide-out');

        overlay.classList.remove("overlay-none");
        overlay.classList.add("overlay-display");
    }
});

overlay.addEventListener(`click`, function() {
    if (overlay.classList.contains("overlay-display")) {
        menu_burger.classList.remove('active');
        menu.classList.remove('slide-in');
        menu.classList.add('slide-out');
        document.body.classList.remove('body_lock');
        logo.style.visibility = "visible";
        header.style.background = "white";

        overlay.classList.remove("overlay-display");
        overlay.classList.add("overlay-none");
    }
});


window.addEventListener('resize', function() {
    if (document.querySelector('body').scrollWidth >= 321) {
      menu.classList.remove('slide-out');
    } 
});