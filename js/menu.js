/**
 * Superfish for submenu most of the time in header
 */
//jQuery('.sf-menu').superfish();

/**
 * Menu Mobile
 */
// Mobile to tablet portrait Only JS
if (matchMedia('(max-width: 1023px)').matches) {
    //console.log("under 1023px");
    // Mega Menu Mobile
    // Open main-menu
    jQuery(".button__menu-open").on(
        "click",
        function (e) {
            e.preventDefault();
            jQuery(".menu__mobile").toggleClass("opened");
            jQuery("html, body").toggleClass("menu-mobile--active");
            jQuery(this).toggleClass("open");
        }
    );
}

//Tablet Landscape to Desktop only JS
if (matchMedia('(min-width: 1024px) and (orientation:landscape)').matches) {
    //console.log("over 1024px");
    //restore mobile menu in desktop
    jQuery(".menu__mobile").removeClass("opened");
    jQuery("html, body").removeClass("menu-mobile--active");
}

