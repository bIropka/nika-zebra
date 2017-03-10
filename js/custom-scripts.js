$(document).ready(function() {

    /******************************************************************************************************************
     ******* init scripts
     ******************************************************************************************************************/

    setTimeout(function() {
        $('.slider-wrap').animate({opacity: '1'}, 500);
    }, 500);

    /******************************************************************************************************************
     ******* clicks scripts
     ******************************************************************************************************************/

    $('.burger').click(function() {

        $(this).toggleClass('active');
        $('nav').toggleClass('active');

    });

    $('.top-block ul li').click(function() {

        if(!$(this).hasClass('active')) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            $(this).parents('.top-block').find('blockquote.active').fadeOut(0);
            $(this).parents('.top-block').find('blockquote').eq($(this).index()).addClass('active').fadeIn();
        }

    });

    /******************************************************************************************************************
     ******* sliders scripts
     ******************************************************************************************************************/

    $('.slider-case').slick({
        appendArrows: '.case-control',
        prevArrow: '.case-control-prev',
        nextArrow: '.case-control-next',
        dots: true
    });

    $('.slider-article').slick({
        slidesToShow: 4,
        appendArrows: '.article-control',
        prevArrow: '.article-control-prev',
        nextArrow: '.article-control-next',
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

});