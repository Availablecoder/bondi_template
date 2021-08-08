$(document).ready(function () {
    // loader
    $(".preloader").fadeOut(1000)
    // -----
    // scroll animation 
    var wow = new WOW();
    wow.init();
    // ---------
    // menu & menu responsive

    $(window).resize(function () {
        if ($(this).width() > 767 && $("header nav ul").hasClass("mobile-menu")) {
            $("header nav ul").removeClass("mobile-menu");
            $(".toggle-menu").removeClass("menu-rotation")
        }
    });

    $(".toggle-menu").click(function () {
        $(this).toggleClass("menu-rotation");
        $("header nav ul").toggleClass("mobile-menu");
    });

    $("header nav li a").click(function () {
        $(this).addClass("active").parent("li").siblings().find("a").removeClass("active")
    });

    if ($(this).scrollTop() >= 200) {
        $("header").addClass("header-scroll")
    } else {
        $("header").removeClass("header-scroll")
    }
    if ($(this).scrollTop() >= 500) {
        $(".scrollbtn").addClass("scroll-show")
    } else {
        $(".scrollbtn").removeClass("scroll-show")
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 200) {
            $("header").addClass("header-scroll")
        } else {
            $("header").removeClass("header-scroll")
        }

        $("section").each(function(){
            if ($(window).scrollTop() > ($(this).offset().top) - 1) {
                var sectionID = $(this).attr('id');
                $("header nav li a[data-scroll='" + sectionID +"']")
                .addClass('active').parent()
                .siblings().find('a').removeClass('active');
            }
       });

        if ($(this).scrollTop() >= 500) {
            $(".scrollbtn").addClass("scroll-show")
        } else {
            $(".scrollbtn").removeClass("scroll-show")
        }

    });
    // -------------------

    // shuffle 
    var mixer = mixitup('#shuffle')
    $(".portfolio ul li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    // -------------
    // Scrolling 
    var scroll = new SmoothScroll('a[href*="#"]');
    // -------------------

    $(".team .team-members .member").hover(function () {
        $(this).find("h3").slideDown();
    }, function(){
    $(this).find("h3").slideUp();
    });

    // Slider 
    var slider = tns({
        "slideBy": "page",
        "mouseDrag": true,
        "autoplayButtonOutput": false,
        "autoplay": true,
        "items": 2,
        "controls": false,
        "responsive": {
          "350": {
            "items": 3,
            "edgePadding": 30
          },
          "500": {
            "items": 4
          }
        },
        "container": ".client",
        "swipeAngle": false,
        "speed": 400
    });
    // ----------------

    $(".scrollbtn").click(function () {
        dur = $("body , html").scrollTop();
        $("body , html").animate({scrollTop : 0} , dur / 2)
    });
});