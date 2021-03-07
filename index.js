let bars = document.querySelector(".fa-bars");
let nav = document.querySelector('nav');
let icons = document.querySelector('.icons');
window.onload = function () {
    bars.addEventListener('click', function () {
        if (nav.style.display == 'flex') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'flex';
        }
        if (icons.style.display == 'flex') {
            icons.style.display = 'none';
        } else {
            icons.style.display = 'flex';
        }
    });
}

window.onresize = function (e) {
    if (window.innerWidth <= 740) {
        nav.style.display = "none";
        icons.style.display = 'none';
    } else {
        nav.style.display = "flex";
        icons.style.display = 'flex';

    }
}