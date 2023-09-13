// All burger icon spans
const menuBtnSpans = document.querySelectorAll('.header .links .icon span');

// The burger icon
const burgerIcon = document.getElementById('burger-icon');

// Menu
const navMenu = document.getElementById('nav-menu');

// Change burger icon and display links when clicking
burgerIcon.addEventListener('click', () => {
    dropDown(navMenu);
    menuBtnSpans.forEach(span => {
        if(span.classList.contains('clicked'))
            span.classList.remove('clicked');
        else
            span.classList.add('clicked');
    });
});

// Toggle between `none` and `block` classes
function dropDown(menu) {
    if(menu.classList.contains('none')){
        menu.classList.remove('none');;
        menu.classList.add('block');

    }
    else {
        menu.classList.remove('block');
        menu.classList.add('none');
    }
}
