$(function () {
    $('.burger').on('click', function () {
        $('.nav_menu').toggleClass('responsive');
    });

    $('.slick-vertical').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 2,
        autoplay: true,
        // prevArrow: '<img src="/img/Up.png">',
        // nextArrow: '<img src="/img/Down.png">'

    });
    $('.autoplay').slick({
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
    });



});