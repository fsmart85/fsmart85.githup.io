$(function () {

    $('.item_card').on('click', function () {
            $(location).attr('href', 'item-card.html');
            // var card_img = $(this).find('img').attr('src');
            // $('.card-sl-img').find('img').attr('src', function () {
            //     return  card_img;
            // });
        });

    $('.list_img li a').on('click', function (e) {
        e.preventDefault();
        $('.imgBox img').attr("src", $(this).attr("href"));
        $(this).parent('li').addClass('active');
        $(this).parent('li').siblings().removeClass('active');
    });
//
    $('.colors li').on('click', function () {
       var ptext = $(this).find('p').text();
       $('.pord_color h4>span').text(ptext);
    });

    $('.burger').on('click', function () {
        $('.nav_menu').toggleClass('show');
        $('.burger').toggleClass('close');
        $('.burger .fas').toggleClass('fa-window-close');
    });
//     $('.accardion_box li a').on('click', function (e) {
//         e.preventDefault();
//         $(this).siblings('accar_box').addClass('active');
//         $(this).closest('li').siblings('li').find('accar_box').removeClass('active');
//         $('.accardion_box li a.active').removeClass('active');
//         $(this).addClass('active');
//
//     });
//
//     $('.sign_up').on('click', function () {
//         $('.register').toggleClass('show');
//     });
//
//     $('.catalog_menu a').on('click', function () {
//         $('.catalog_menu').toggleClass('close');
//     });
//
//     $('.responsive_nav-menu').on('click', function () {
//         $('.nav_menu').toggleClass('responsive');
//         $(this).find('.fas').toggleClass('fa-times');
//     });
//
// });
//
// $('.responsive-slick2').slick({
//     dots: false,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//         {
//             breakpoint: 960,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 infinite: false,
//                 dots: false
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//     ]
});

// $('.fa-chevron-down').on('click', function () {
    //     $('.fa-chevron-down').toggleClass('active');
    //     $('.link_regist').toggleClass('active');
    // });
    //
    //
    // $('.link_sign_up').on('click', function (e) {
    //     e.preventDefault();
    //     $('.modal_sg').fadeIn();
    // });
    // $('.close').on('click', function () {
    //     $('.modal_sg').fadeOut();
    // });
    //
    // $('.menu_burger').on('click', function () {
    //     $('.modal-menu').addClass('show');
    //     $('.section .banner .slider').css({'z-index': '-1'});
    // });
    // $('.modal-menu .accardion li a .fa-times').on('click', function () {
    //     $('.modal-menu').removeClass('show');
    //     $('.section .banner .slider').css({'z-index': '1'});
    // });
    //
    //
    //
    //
    //
    // $('.card-sl-img').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: false,
    //     autoplaySpeed: 3000
    // });
    //
    // $('.accardion-box .accardion li .accr-link').on('click', function (e) {
    //     e.preventDefault();
    //     $(this).siblings('.box').addClass('active');
    //     $(this).closest('li').siblings('li').find('.box').removeClass('active');
    // });
    // $('.accardion li .accr-link').on('click', function () {
    //     $('.accardion li .accr-link.active').removeClass('active');
    //     $(this).addClass('active');
    // });




