/* Global variables and functions */
var FConvention = (function ($, window, undefined) {
        'use strict';
        var $win = $(window),
            $footer = $('.main-footer'),
            $header = $('header.header'),
            $main = $('main.main'),
            $b = $('body'),
            $searchBtn = $('.search-button'),
            $searchFormWrap = $('.full-search'),
            $searchInput = $('.full-search form input[type=text]'),
            $submit = $("#submitSearch");
        //slider home
        function _sliderHome(){
            $('.slideshow__home').flexslider();
        }

        //scroll down when click mouse down
        function _scrollDownMouse(){
            $('.scroll__down').click(function(){
                var top_first_element = $('.bref__home').offset().top;
                $("html, body").animate({
                    scrollTop:  top_first_element
                }, 700);
            });
        }

        //scroll window
        function _scrollDown(){
            $(window).scroll(function(){
                var scrollTop = $(this).scrollTop();
                if(scrollTop > 0){
                    $(".logo__sticky").show();
                    $(".header").addClass("sticky");
                }else{
                    $(".logo__sticky").hide();
                    $(".header").removeClass("sticky");
                }
            })
        }

        return {
            init: function () {
                _sliderHome();
                _scrollDownMouse();
                _scrollDown();
            }
        };
    }

    (jQuery, window)
);

jQuery(document).ready(function () {
    FConvention.init();
});
