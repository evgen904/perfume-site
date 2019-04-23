$(function(){

    var isiOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);

    var menuTop = $('.js-m-top-clone').clone();
    var socialClone = $('.js-social-clone').clone();
    var mailClone = $('.js-mail-clone').clone();
    var thumbProd = $('.js-clone-thumb').clone();
    var nameProd = $('.js-clone-name-prod').clone();

    $('.js-m-top-add').prepend('<ul class="item-vendor"><li><a href="#">Бренды</a></li></ul>').prepend(menuTop);
    $('.js-cont-append').append(mailClone);
    $('.js-append-soc').next().append(socialClone);
    $('.js-append-thumb').append(thumbProd);
    $('.js-append-name-prod').append(nameProd);

    $('.js-mob-filter').on('click',function(){
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.js-mob-filter-show').addClass('active');
        } else {
            $(this).removeClass('active');
            $('.js-mob-filter-show').removeClass('active');
        }
    });

    $('.js-menu-bot .hasclass > a').on('click',function(event){
        event.preventDefault();
        if ($(document).width() > 800) {
            document.location.href = $(this).attr('href');
        } else {
            if (!$(this).parent().hasClass('active')) {
                $(this).parent().addClass('active');
            } else {
                $(this).parent().removeClass('active');
            }
        }
    });

    $(document).on('click','.js-menu-popup',function(){
        $('.menu-burger').addClass('active');
    });
    $(document).on('click','.js-menu-popup-close',function(){
        $('.menu-burger').removeClass('active');
    });

    // if (isiOS == true) {
    //     $(document).on('click touchstart','.js-menu-popup-close',function(){
    //         $('.menu-burger').removeClass('active');
    //     });
    //     $(document).on('click touchstart','.js-select-vendor-close',function(){
    //         $('.js-select-vendor').removeClass('active');
    //     });
    // }



    $(document).on('click','.item-vendor a',function(event){
        event.preventDefault();
        $('.js-select-vendor').addClass('active');
    });
    $(document).on('click','.js-select-vendor-close',function(){
        $('.js-select-vendor').removeClass('active');
    });
        
    $('.js-vendor-item > li').on('click',function(){
        $('.js-vendor-item > li').removeClass('active');
        $(this).addClass('active');    
    });

    $('.js-open-btn-prod').on('click',function(){
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $('.js-open-body-prod').addClass('active');
        } else {
            $(this).removeClass('active');
            $('.js-open-body-prod').removeClass('active');
        }
    });


    $('.js-about').on('click',function(){
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).next().show();
        } else {
            $(this).removeClass('active');
            $(this).next().hide();
        }
    });


    $('.js-search-btn').on('click',function(){
        if (!$(this).parent('.search').hasClass('active')) {
            $(this).parent('.search').addClass('active');
        } else {
            $(this).parent('.search').removeClass('active');
        }
    });

    $('.select-vendor-menu > li').each(function(){
        if ($(this).find('> ul').length) {
            $(this).addClass('hasclass');
            $(this).find('> ul').wrap('<div class="vendor-menu-popup"></div>');
            var classNumber = ($(this).find('> a').text()=='0 - 9') ? 'number' : '';
            $(this).find('> div').prepend('<div class="vendor-menu-name '+classNumber+'">'+$(this).find('> a').text()+'</div>');
        }
    });


    $('.js-btn-filter').on('click',function(){
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            $(this).next().slideDown();
        } else {
            $(this).removeClass('active');
            $(this).next().slideUp();
        }
    });


    $(document).on('click','.js-thumbs-prod li',function(){
        $('.js-thumbs-prod li').removeClass('active');
        $(this).addClass('active');

        if ($(this).index() == 0) {
            $('.js-img-prod > div').eq(1).fadeOut();
        } else if ($(this).index() == 1) {
            $('.js-img-prod > div').eq(1).fadeIn();
        }
    });


    $('.products-tabs-nav span').on('click',function(){
        $('.products-tabs-nav span').removeClass('active');
        $(this).addClass('active');
        $('.products-tabs-body > div').removeClass('active').eq($(this).index()).addClass('active');
    });


    $(".slider-head-in").owlCarousel({
        nav : false,
        dots: true,
        loop: true,
        autoplay:true,
        autoplayTimeout: 7000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items:1,
        onTranslate: fadeBlock
    });
    function fadeBlock(){
        $(".slider-head-text").removeClass('animated fadeInLeft');
        setTimeout(function(){
            $(".slider-head-text").addClass('animated fadeInLeft');
        },200);
    }

    $('.js-slider-prod').owlCarousel({
        nav : true,
        dots: false,
        loop: false,
        items:3,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            },
            960:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    $('.js-slider-review').owlCarousel({
        nav : true,
        dots: false,
        loop: false,
        items:3,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1
            },
            960:{
                items:3
            },
            1200:{
                items:3
            }
        }
    });
    
});