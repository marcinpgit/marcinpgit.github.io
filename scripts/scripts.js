AOS.init();

const $page = $('body, html');
const $scrollUpBttn = $('#go-up');

$(document).ready(function() {
    var scrollLink = $('.scroll');

    scrollLink.click(function(event) {
        event.preventDefault();
        $page.animate({scrollTop: $(this.hash).offset().top}, 800 );
    });
});


function goUp() {
    $page.animate({scrollTop: 0}, 800);
}

$scrollUpBttn.on('click', goUp);

