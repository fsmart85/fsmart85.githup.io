$(function() {
    $('.item').on('click', function () {
        $('.items').toggleClass('items-origin');
    });

    $(".navbar .collapse .navbar-nav .nav-item .nav-link, .mycard .btn").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });

    var menu = $('.header_menu ul li');
    menu.on('click', function(e){
        e.preventDefault();
        menu.removeClass('active').filter(this).addClass('active');

    });

    $('.fa').on('click', function () {
        $('ul').slideToggle(300, function () {
            if($(this).css('display') === 'none'){
                $(this).removeAttr('style');
            }
        })
    })

    $('.owl-carousel').owlCarousel({
        rtl: true,
        margin: 5,
        loop: true,
        nav: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 8
            }
        }
    });


    $(window).scroll(function () {
        parallax();
    });
    function parallax() {
        var st = $(window).scrollTop();
        $('.parallax-bg').css('background-position', 'center ' + (st * 0.6) + 'px');
        $('.mycard').css('transform', 'translate(0%, '+ st * 0.15 + 'px')
    }






});










