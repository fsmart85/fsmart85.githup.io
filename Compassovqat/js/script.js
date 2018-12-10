$(function () {
    $('.accardion-box .accardion li a').on('click', function (e) {
        e.preventDefault();

        $(this).siblings('.box').addClass('active');
        $(this).closest('li').siblings('li').find('.box').removeClass('active');
    });
    $('.accardion li a').on('click', function () {
        $('.accardion li a.active').removeClass('active');
        $(this).addClass('active');
    });

    $('.korzina').on('click', function () {
       $('.korzina-list').slideToggle();

    });

    $('.burger').on('click', function () {
        $('.nav_menu').slideToggle('fast');
    });

});
