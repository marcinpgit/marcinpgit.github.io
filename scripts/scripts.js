AOS.init();

const $page = $('body, html');
const $scrollUpArrow = $('#arrow-up');
const $navbarLinks = $('.navbar-nav').find('a');

// SMOOTH SCROLL TO SECTION
function scrollToSection() {
    const anchor = $(this).attr('href');

    $page.animate({scrollTop: $(anchor).offset().top}, 800);
}

$navbarLinks.on('click', scrollToSection);

// SHOW/HIDE GO UP ARROW
function showUpArrow() {
    $(window).scrollTop() > 400 ?
        $scrollUpArrow.fadeIn() :
        $scrollUpArrow.fadeOut();
}

$(window).on('scroll', showUpArrow);

// SCROLL TO TOP
function scrollToTop() {
    $page.animate({ scrollTop: 0}, 800);
}

$scrollUpArrow.on('click', scrollToTop);






