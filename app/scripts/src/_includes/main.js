$(function(){



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


    $('.js-thumbs-prod li').on('click',function(){
        $('.js-thumbs-prod li').removeClass('active');
        $(this).addClass('active');

        if ($(this).index() == 0) {
            $('.js-img-prod > div').eq(1).fadeOut();
        } else if ($(this).index() == 1) {
            $('.js-img-prod > div').eq(1).fadeIn();
        }
    });

    $(".slider-head-in").owlCarousel({
        nav : false,
        dots: true,
        loop: true,
        autoplay: 10000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items:1,
        onTranslate: fadeBlock
    });
    function fadeBlock(){
        $(".slider-head-title, .slider-head-note").removeClass('animated fadeInLeft');
        setTimeout(function(){
            $(".slider-head-title, .slider-head-note").addClass('animated fadeInLeft');
        },200);
    }


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
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    var sliderProd = $('.js-prod-slider');
    sliderProd.owlCarousel({
        items: 1,
        margin: 0,
        nav: true,
        dots: false,
        loop: false,
        smartSpeed: 800,
        animateOut: 'fadeOut',
    });
    $('.js-prod-slider-thumbs li').on('click',function(){
        $('.js-prod-slider-thumbs li').removeClass('active');
        $(this).addClass('active');
        sliderProd.trigger('to.owl.carousel', [$(this).index(), duration, true]);
    });



    $('.products-tabs-nav span').on('click',function(){
        $('.products-tabs-nav span').removeClass('active');
        $(this).addClass('active');
        $('.products-tabs-body > div').removeClass('active').eq($(this).index()).addClass('active');
    });





    /*
    $('.js-product').lightGallery({
        thumbnail: false
    });

    $('.js-other-prosucts').owlCarousel({
        loop:false,
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            960:{
                items:2
            },
            1260:{
                items:3
            }
        }
    });

    $('input[type="tel"]').mask("+7 ( 999 ) 999-99-99");
    */
    
});