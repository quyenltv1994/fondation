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
                var top_first_element = $('.bref__home').offset().top - 138;
                $("html, body").animate({
                    scrollTop:  top_first_element
                }, 700);
            });
        }

        //scroll window
        function _scrollDown(){
            var _scrollTop = $(window).scrollTop();
            if(_scrollTop > 0){
                $(".header").addClass("sticky");
            }
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

        //search visible
        function _searchVisible(){
            $(".search__icon").click(function(){
                if($(this).hasClass("is-visible")){
                    $(".search__input .search-input").removeClass("is-visible");
                    $(".search-holder").removeClass("is-visible");
                    $(this).removeClass("is-visible");
                }else{
                    $(".search__input .search-input").addClass("is-visible");
                    $(".search-holder").addClass("is-visible");
                    $(this).addClass("is-visible");
                }

            })
        }

        //tabs in compagnie
        function _tagsCompagnie(){
            $(".group-names li .read__more").click(function(e){
                e.preventDefault();
                var href = $(this).attr('href');
                $(this).closest('.container').find(".group-names li .read__more").removeClass("is-active");
                $(this).addClass("is-active");
                $(this).closest('.container').find(".tabs-panel").hide();
                $(href).show();
            });

        }

        //fancy box
        function _fancyBox(){
            var width_w = $(window).width();
            if(width_w > 767){
                $(".paroller").paroller({
                    factor: 0.2,            // multiplier for scrolling speed and offset
                    type: 'foreground',     // background, foreground
                    direction: 'vertical' // vertical, horizontal
                });
            }
            $("a.popup-box").bind( 'click', function(e){
                e.preventDefault();
                e.stopPropagation();
                var id = $(this).attr("data-open");
                $(this).attr("href", "#"+id);
            });
            $(".popup-box").fancybox({
                scrolling : "no",
                afterClose: function(){
                    $("a.popup-box").attr("href", "");
                },
                helpers: {
                    overlay: {
                        locked: false
                    }
                }
            });
            $("a.popup-box").bind( 'click', function(e){
                e.preventDefault();
                e.stopPropagation();
            });
            $(".link-more").click(function(e){
                e.preventDefault();
                e.stopPropagation();
            })
            $(document).on("click", ".modal-close", function() {
                $(".fancybox-close").trigger('click');
            });
        }

        function _slider(){
            $(".slider__node").flexslider();
        }

        function _animation_hover(){
            $(".animation_hover").hover(function(){
                $(this).addClass("animation_hover");
            }, function(){
                $(this).removeClass("animation_hover");
            });
            google.maps.event.addListenerOnce(map, 'idle', function(){
                jQuery('.gm-style-iw').prev('div').remove();
            });
        }

        return {
            init: function () {
                _sliderHome();
                _scrollDownMouse();
                _scrollDown();
                _searchVisible();
                _tagsCompagnie();
                _fancyBox();
                _slider();
            }
        };
    }

    (jQuery, window)
);

jQuery(document).ready(function () {
    FConvention.init();
});
