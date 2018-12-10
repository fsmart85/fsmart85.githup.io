$(function () {
    $('.price-card').hover(function () {
        $('.two').removeClass('active');
        });
    $('.one, .two, .three').hover(function () {
       if($(this).hasClass('active')){
           $(this).removeClass('active');
       }else {
           $(this).addClass('active');
       }
   });


    $('.burger_menu').on('click', function () {
        $('.nav_top').toggleClass('responsive');
    });


    $(".nav_top li a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });






});