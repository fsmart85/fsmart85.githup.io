$(document).ready(function(){
    $('.sidenav').sidenav();


    $('.tabs_list li .tabs_link a').on('click', function (e) {
        e.preventDefault();
        $(this).parents('li').find('.box').addClass('active');
        $(this).parents('li').siblings('li').find('.box').removeClass('active');
    });
    $('.tabs_life .tabs_list li .tabs_link a').on('click', function () {
        $('.tabs_list li .tabs_link.active').removeClass('active');
        $(this).parents('.tabs_link').addClass('active');
    });


    $('.tabs_recidence li .tabs_link .link').on('click', function () {
        $(this).parents('li').find('.tabs_box').addClass('active');
        $(this).parents('li').siblings('li').find('.tabs_box').removeClass('active');
        $(this).parents('.tabs_link').addClass('active');
        $(this).parents('li').siblings('li').find('.tabs_link').removeClass('active');
    });
});