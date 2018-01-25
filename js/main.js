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
                $(".group-names li .read__more").removeClass("is-active");
                $(this).addClass("is-active");
                $(".tabs-panel").hide();
                $(href).show();
            })
        }

        //fancy box
        function _fancyBox(){
            $(".full-link, .link-more").click(function(e){
                e.preventDefault();
                var id = $(this).data('open');
                var content = $("#"+id).html();
                $(".reveal-overlay").append(content).addClass("is-active");
            })
            $(document).on("click", ".modal-close", function() {
                $(".reveal-overlay").html('').removeClass("is-active");
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
            }
        };
    }

    (jQuery, window)
);

jQuery(document).ready(function () {
    FConvention.init();
});
