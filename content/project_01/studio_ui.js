$(document).ready(function(){
    /*메인 메뉴 열기*/
    $('.gnb_m .menu_toggle').click(function(){
        $('.eduon-studio__snb__m').addClass('active');
        $('.dim').addClass('active');
        $('body').addClass('scroll_hidden');
    });
    /*메인 메뉴 닫기*/
    $('.eduon-studio__snb__m .menu_close').click(function(){
        $('.eduon-studio__snb__m').removeClass('active');
        $('.dim').removeClass('active');
        $('body').removeClass('scroll_hidden');
    });

    /*GNB 메뉴 서브 메뉴 열닫*/
    $('.snb__menu > li').click(function(){
        $(this).toggleClass('active').siblings().removeClass('active');
    });


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