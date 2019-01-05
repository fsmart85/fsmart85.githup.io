$(function () {
    $('.js-table .wp .item1 p').on('click', function () {
        $('.js-table img').css("left", "0");
    });
    $('.js-table .wp .item2 p').on('click', function () {
        $('.js-table img').css("left", "17.5%");
    });
    $('.js-table .wp .item3 p').on('click', function () {
        $('.js-table img').css("left", "50%");
    });
    $('.js-table .wp .item4 p').on('click', function () {
        $('.js-table img').css("left", "100%");
    });

    $('.chek').on('click', function () {
        $(this).toggleClass('on');
    });

    $('.circle').on('click', function () {
        $(this).toggleClass('on');
    });

});