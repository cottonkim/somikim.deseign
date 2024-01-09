
// 서브메뉴 페이드인
    $(".sub-menu").hide();
    $(".menu-item").mouseenter(function(){
        $(this).children(".sub-menu").stop().fadeIn(200);
        });
        $(".menu-item").mouseleave(function(){
        $(this).children(".sub-menu").stop().fadeOut(100);
        });

// 탑버튼
    $(function(){$("#portfolio__top-btn").hide();
    $(window).scroll(function(){
        if($(this).scrollTop() > 500){$("#portfolio__top-btn").fadeIn();}
        else{$("#portfolio__top-btn").fadeOut();}
    });
    $("#portfolio__top-btn").click(function(){
        $('html, body').animate({
        scrollTop : 0
    }, 400);
    return false;
    });
    });  


// 헤더 숨기기
    var didScroll;
    var lastScrollTop = 0;
    var delta = 4;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }
        
        lastScrollTop = st;
    }


    
// 모바일

// 탑
    (function() {
        jQuery.fn.scrollStopped = function(callback) {
            var that = this, $this = $(that);
            $this.scroll(function(ev) {
                clearTimeout($this.data('scrollTimeout'));
                $this.data('scrollTimeout', setTimeout(callback.bind(that), 250, ev));
            });
        };

        jQuery(window).scrollStopped(function(ev){
            setTimeout(function (){
                jQuery('.top_anchor').fadeOut();
            }, 2000);
        });
    }());

    jQuery(window).bind('scroll', function() {
        var curTop = $(this).scrollTop();

        if (curTop > 57) {
            jQuery('.top_anchor').fadeIn();
        } else {
            jQuery('.top_anchor').fadeOut();
        }

    }).trigger('scroll');

// 서브메뉴 페이드인
    $(".gnb__items-sub").hide();
    $(".gnb__items").mouseenter(function(){
        $(this).children(".gnb__items-sub").stop().fadeIn(200);
        });
        $(".gnb__items").mouseleave(function(){
        $(this).children(".gnb__items-sub").stop().fadeOut(100);
        });


        $(document).ready(function(){
    /*메인 메뉴 열기*/
    $('.gnb_m .menu_toggle').click(function(){
        $('.menu__snb__m').addClass('active');
        $('.dim').addClass('active');
        $('body').addClass('scroll_hidden');
    });
    /*메인 메뉴 닫기*/
    $('.menu__snb__m .menu_close').click(function(){
        $('.menu__snb__m').removeClass('active');
        $('.dim').removeClass('active');
        $('body').removeClass('scroll_hidden');
    });

    // /*GNB 메뉴 서브 메뉴 열닫*/
    // $('.snb__menu > li').click(function(){
    //     $(this).toggleClass('active').siblings().removeClass('active');
    // });


    /*서브 nav ui*/
    $('.cont_nav_depth > em').click(function(e){
        $('.cont_nav').toggleClass('on');
    })

    /*풋터 패밀리 사이트 열닫*/
    $('.footer_family > a').click(function(e){
        e.preventDefault();
        $('.footer_family ').toggleClass('active');
    });

});