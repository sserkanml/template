$(document).ready(function () {
    setTimeout(function () {
        $(".loading").fadeOut();
    }, 150);

    if (window.location.href.indexOf("#onlinekatalog") > -1) {
        $("#print").trigger('click');
    }

    formOpen();
    formMobile();
    menuActive();
    galleryPageSlider();


    $('.sliderArea').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: false,
        navigation: false,
        fade: true,
        autoplay: true,
        playspeed: 5000,
        dots: true,
        navigation: true
    });
  
});


function formOpen() {
    $(".formArea .formBtnArea").click(function () {
        $(".formArea").toggleClass("open")
        $(".formArea .form").removeClass("scroll")
    })
}

$(".homePage .bannerArea .arrowArea .arrow").click(function () {
    $("html, body").animate({ scrollTop: $(".homePage .section-1").offset().top - 20 }, 1000);
})


/*menu active*/
function menuActive() {
    var pathName = location.pathname;

    $('header .menuArea ul li .link[href*="' + pathName + '"]').each(function () {
        $(this).addClass("active");
        if ((window.location.href.indexOf("/#") > -1) || pathName == '/') {
            $("header .menuArea ul li .link").removeClass("active");
        }
    });

}



//$(function () {
//    $(".floorPlan .tab-content").removeClass("active");
//    $(".floorPlan .tab-content").first().addClass("active");

//    $(".floorPlan .tab-content .tab-content-inside .tab-pane").removeClass("active");
//    $(".floorPlan .tab-content.active .tab-content-inside .tab-pane").first().addClass("active");

//    $(".floorPlan .nav-tabs li").on("click", function () {

//        var order = $(this).index();
//        $(".floorPlan .tab-content").removeClass("active");
//        $(".floorPlan .tab-content").eq(order).addClass("active");

//        $(".floorPlan .tab-content .tab-content-inside .tab-pane").removeClass("active");
//        $(".floorPlan .tab-content.active .tab-content-inside .tab-pane").first().addClass("active");

//        $(".floorPlan .tab-content .tab-pane .nav-tabs-left li").removeClass("active");
//        $(".floorPlan .tab-content.active .tab-pane .nav-tabs-left li").first().addClass("active");

//        $(".floorPlan .nav-tabs li").removeClass("active");
//        $(this).addClass("active");
//    });




//    $(".floorPlan .tab-pane .nav-tabs-left li").on("click", function () {
//        var order = $(this).index();
//        $(this).parent().parent().find(".tab-content-inside .tab-pane").removeClass("active");
//        $(this).parent().parent().find(".tab-content-inside .tab-pane").eq(order).addClass("active");

//        $(".floorPlan .tab-pane .nav-tabs-left li").removeClass("active");
//        $(this).addClass("active");
//    });
//});

$(function () {
    $(".tab-content").removeClass("active");
    $(".tab-content").first().addClass("active");

    $(".tab-content .tab-content-inside .tab-pane").removeClass("active");
    $(".tab-content.active .tab-content-inside .tab-pane").first().addClass("active");

    $(".nav-tabs li").on("click", function () {

        var order = $(this).index();
        $(".tab-content").removeClass("active");
        $(".tab-content").eq(order).addClass("active");

        $(".tab-content .tab-content-inside .tab-pane").removeClass("active");
        $(".tab-content.active .tab-content-inside .tab-pane").first().addClass("active");

        $(".tab-content .tab-pane .nav-tabs-left li").removeClass("active");
        $(".tab-content.active .tab-pane .nav-tabs-left li").first().addClass("active");

        $(".nav-tabs li").removeClass("active");
        $(this).addClass("active");

    });


    $(".tab-pane .nav-tabs-left li").on("click", function () {
        var order = $(this).index();
        $(this).parent().parent().find(".tab-content-inside .tab-pane").removeClass("active");
        $(this).parent().parent().find(".tab-content-inside .tab-pane").eq(order).addClass("active");

        $(".tab-pane .nav-tabs-left li").removeClass("active");
        $(this).addClass("active");
    });
});

$(".nav-tabs li").click(function () {

    if ($(window).width() < 768 && $(".tab-content.active .tab-pane .nav-tabs-left").length) {
        $("html, body").animate({ scrollTop: $(".tab-content.active .tab-pane .nav-tabs-left").offset().top }, 1000);
    } else {
        $("html, body").animate({ scrollTop: $(".mainTitle").offset().top }, 1000);
    }
})

$(".nav-tabs-left li").click(function () {

    if ($(window).width() < 768) {
        $("html, body").animate({ scrollTop: $(".tab-content.active .tab-pane .nav-tabs-left").offset().top }, 1000);
    } else {
        $("html, body").animate({ scrollTop: $(".mainTitle").offset().top }, 1000);
    }
})


$("#mobileMenuButton").click(function () {
    $("#mobileMenuButton .wrap").toggleClass("change");
    $("header .menuArea").slideToggle();
    if ($("#mobileMenuButton .wrap").hasClass("change")) {
        $("body").css({ "overflow-y": "hidden" })
    } else {
        $("body").css({ "overflow-y": "auto" })
    }
})

$("#backToTop").click(function () {
    $("html, body").animate({ scrollTop: $("body").offset().top }, 1000);
})

function formMobile() {
    if ($(window).width() < 768) {
        $(".formArea").removeClass("open")
    }
}



$(window).scroll(function () {
    if ($(window).width() > 768 && $(window).scrollTop() > 50) {
        $(".formArea").removeClass("open")
    }
});

$(".formArea .form input").click(function () {
    if ($(window).width() < 768) {
        $(".formArea .form").addClass("scroll")
    }
})

$(".formArea .form textarea.message").focusin(function () {
    $(".textsArea .label").hide();
})



$(".formArea .form textarea.message").on('keypress keyup blur', function (e) {
    var val = $(this).val();
    if (val.length == 0) {
        $(".textsArea .label").show();
    } else {
        $(".textsArea .label").hide();
    }
});

/*galleryPage*/
function galleryPageSlider() {
    $('.slider')
        .on('init', function () {
            //$(".slick-center").prev().removeClass('nextdiv').addClass('prevdiv');
            //$(".slick-center").next().removeClass('prevdiv').addClass('nextdiv');

            $(".slick-center").next().css({ "z-index": "2", "transform": "scale(.9)" });
            $(".slick-center").css({ "z-index": "3", "transform": "scale(1)" })
            $(".slick-center").prev().css({ "z-index": "2", "transform": "scale(.9)" });


        })
        .slick({
            centerMode: true,
            focusOnSelect: true,
            centerPadding: '0px',
            slidesToShow: 5,
            cssEase: 'ease',
            easing: 'linear',
            swipe: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '0px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: true,
                        centerMode: true,
                        centerPadding: '0px',
                        slidesToShow: 1
                    }
                }
            ]
        }).on('afterChange', function () {
            //$(".slick-slide").removeClass("nextdiv").removeClass("prevdiv");
            //$(".slick-center ").prev().removeClass('nextdiv').addClass('prevdiv')
            //$(".slick-center ").next().removeClass('prevdiv').addClass('nextdiv')

    $('.slider')
            $(".slider .slick-slide").css({ "z-index": "1", "transform": "scale(.7)" })
            $(".slick-center").next().css({ "z-index": "2", "transform": "scale(.9)" });
            $(".slick-center").css({ "z-index": "3", "transform": "scale(1)" })
            $(".slick-center").prev().css({ "z-index": "2", "transform": "scale(.9)" });
            

        });


}
