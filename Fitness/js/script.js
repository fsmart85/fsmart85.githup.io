$(function () {
    $('.login_btn').on('click', function () {
        $('.modal-box').fadeIn();
    });
    $('.fa-times-circle').on('click', function () {
        $('.modal-box').fadeOut();
    });

    $(document).on('mouseup',function (e) {
        var modal = $('.modal-login');
        if(e.target!=modal[0]&&modal.has(e.target).length===0){
            $('.modal-box').fadeOut();
        }
    });
    $('.sing_up_btn').on('click', function () {
        $('.modal-box2').fadeIn();
    });
    $('i.fa-times-circle').on('click', function () {
        $('.modal-box2').fadeOut();
    });

    $(document).on('mouseup',function (e) {
        var modal = $('.modal-sign_up');
        if(e.target!=modal[0]&&modal.has(e.target).length===0){
            $('.modal-box').fadeOut();
        }
    });


    $('.burger').on('click', function () {
        $('.nav_menu').toggleClass('responsive');
    });

    $('.mobile_login').on('click', function () {
        $('.login').toggleClass('responsive_login');
    });

    $('.accardion li a').on('click', function (e) {
        e.preventDefault();
        $(this).siblings('.box').addClass('active');
        $(this).closest('li').siblings('li').find('.box').removeClass('active');
    });
    $('li a').on('click', function () {
        $('li a.active').removeClass('active');
        $(this).addClass('active');
    });

    $(".header .nav_menu li a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });

    $('.btn_Up').on('click', function () {
        $('body, html').animate({'scrollTop': 0}, 800)
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $('.btn_Up').addClass('active')
        } else {
            $('.btn_Up').removeClass('active')
        }
    });

    $('.btn_send').on('click', function () {
        $('.forms .form').find('input:text, input, textarea ').val('');
    })


});
