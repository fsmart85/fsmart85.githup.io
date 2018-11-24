$(function () {
    $('.btn_burger').on('click', function () {
        $('.nav_menu').toggleClass('responsive');
    });

    $(".nav_menu li a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });

    $('.btn_Up, .logo').on('click', function () {
        $('body, html').animate({'scrollTop': 0}, 800)
    });

    $(window).scroll(function () {
        if($(window).scrollTop() > 100){
            $('.btn_Up').addClass('active');
            $('.nav_top').addClass('fixed')
        }else {
            $('.btn_Up').removeClass('active');
            $('.nav_top').removeClass('fixed')
        }

        var st = $(window).scrollTop();
            $('.banner_img').css('transform', 'translate(0%, '+ st * 0.60 + 'px');

        $('header[id], .sec_content[id]').each(function () {
            var id = $(this).attr("id");
            if($(this).offset().top-100 < $(window).scrollTop()){
                $('.nav_menu li a[href="#'+id+'"]').parent().addClass('active').siblings().removeClass('active');

            }
        })
    });

});