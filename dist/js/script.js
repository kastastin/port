const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    hamburger.hidden = true;
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
    hamburger.hidden = false;
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

// pageup

const upButton = document.querySelector('.up');

function scroll() {
    const scrolled = window.pageYOffset,
        height = document.documentElement.clientHeight;

    if (scrolled > 1500) {
        upButton.classList.add('up-show');
    } else {
        upButton.classList.remove('up-show');
    }
}

function up() {
    if (window.pageYOffset > 0) {
        window.scrollTo({ top: 0,
            behavior: "smooth"
        });
    }
}

window.addEventListener('scroll', scroll);
upButton.addEventListener('click', up);