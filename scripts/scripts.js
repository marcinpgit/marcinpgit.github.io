AOS.init();

const $page = $('body, html');
const $scrollUpArrow = $('.arrow-up');
const $navbarLinks = $('.navbar-nav').find('a');

function showUpArrow() {
    $window = $(window).scrollTop();
        $window > 400 ?
        $scrollUpArrow.fadeIn() :
        $scrollUpArrow.fadeOut();
}

function scrollToTop() {
    $page.animate({ scrollTop: 0}, 800);
}

function scrollToSection() {
    const anchor = $(this).attr('href');

    $page.animate({scrollTop: $(anchor).offset().top}, 800);
}


$(window).on('scroll', showUpArrow);

$scrollUpArrow.on('click', scrollToTop);

$navbarLinks.on('click', scrollToSection);