$(function () {

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true
    });

    $('.fa-chevron-down').on('click', function () {
        $('.fa-chevron-down').toggleClass('active');
        $('.link_regist').toggleClass('active');
    });


    $('.link_sign_up').on('click', function (e) {
        e.preventDefault();
        $('.modal_sg').fadeIn();
    });
    $('.close').on('click', function () {
        $('.modal_sg').fadeOut();
    });

    $('.menu_burger').on('click', function () {
        $('.modal-menu').addClass('show');
        $('.section .banner .slider').css({'z-index': '-1'});
    });
    $('.modal-menu .accardion li a .fa-times').on('click', function () {
        $('.modal-menu').removeClass('show');
        $('.section .banner .slider').css({'z-index': '1'});
    });


    $('.card').on('click', function () {
        $(location).attr('href', 'item-card.html');
        var card_img = $(this).find('img').attr('src');
        $('.card-sl-img').find('img').attr('src', function () {
            return  card_img;
        });
    });


    $('.card-sl-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000
    });

    $('.accardion-box .accardion li .accr-link').on('click', function (e) {
        e.preventDefault();
        $(this).siblings('.box').addClass('active');
        $(this).closest('li').siblings('li').find('.box').removeClass('active');
    });
    $('.accardion li .accr-link').on('click', function () {
        $('.accardion li .accr-link.active').removeClass('active');
        $(this).addClass('active');
    });




});
