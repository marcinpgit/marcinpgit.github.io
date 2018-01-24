AOS.init();

const $page = $('body, html');
const $scrollUpBttn = $('#go-up');
const $navbarLinks = $('.navbar-nav').find('a');

function scrollToSection() {
    const anchor = $(this).attr('href');

    $page.animate({scrollTop: $(anchor).offset().top}, 800);
}

$navbarLinks.on('click', scrollToSection);

function goUp() {
    $page.animate({scrollTop: 0}, 800);
}

$scrollUpBttn.on('click', goUp);

