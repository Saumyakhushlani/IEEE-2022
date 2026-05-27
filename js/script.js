$(document).ready(function () {
    $('#myModal').modal('show');
});
setTimeout(function () { $('#myModal').modal('hide'); }, 10000);
(function($) {

    "use strict";

    //Hide Loading Box (Preloader)
    function handlePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(200);
        }
    }


    //Update Header Style and Scroll to Top
    function headerStyle() {
        if ($('.main-header').length) {
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            var scrollLink = $('.scroll-to-top');
            var sticky_header = $('.main-header .sticky-header, .main-header .mobile-sticky-header');
            if (windowpos > 500) {
                siteHeader.addClass('fixed-header');
                sticky_header.addClass('animated slideInDown');
                scrollLink.fadeIn(300);
            } else {
                siteHeader.removeClass('fixed-header');
                sticky_header.removeClass('animated slideInDown');
                scrollLink.fadeOut(300);
            }
        }
    }
    headerStyle();

    //sticky-header Hide Show
    if ($('.sticky-header').length) {
        var stickyMenuContent = $('.main-header .main-box .nav-outer').html();
        $('.sticky-header .main-box').append(stickyMenuContent);
        //Sidebar Cart
        $('.main-header .cart-btn, .mobile-header .cart-btn').on('click', function() {
            $('body').addClass('sidebar-cart-active');
        });

        //Menu Toggle Btn
        $('.main-header .cart-back-drop, .main-header .close-cart').on('click', function() {
            $('body').removeClass('sidebar-cart-active');
        });
    }

    //Mobile Nav Hide Show
    if ($('.mobile-menu').length) {
        //Submenu Dropdown Toggle
        if ($('.main-header li.dropdown ul').length) {
            $('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
        }

        var mobileMenuContent = $('.main-header .nav-outer .main-menu .navigation').html();
        $('.mobile-menu .navigation').append(mobileMenuContent);
        $('.mobile-menu .close-btn').on('click', function() {
            $('body').removeClass('mobile-menu-visible');
        });
        //Dropdown Button
        $('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
            $(this).prev('ul').slideToggle(500);
            $(this).prev('.mega-menu').slideToggle(500);
        });
        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function() {
            $('body').addClass('mobile-menu-visible');
        });

        //Menu Toggle Btn
        $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
            $('body').removeClass('mobile-menu-visible');
        });
    }

    //Header Search
    if ($('.nav-toggler').length) {
        $('.nav-toggler').on('click', function() {
            $('body').addClass('active-side-nav');
        });
        $('.cross-icon, .form-back-drop').on('click', function() {
            $('body').removeClass('active-side-nav');
        });
    }

    //Header Search
    if ($('.search-btn').length) {
        $('.search-btn').on('click', function() {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function() {
            $('body').removeClass('search-active');
        });
    }

    //Banner Carousel
    if ($('.banner-carousel').length) {
        $('.banner-carousel').owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 500,
            autoHeight: true,
            autoplay: true,
            autoplayTimeout: 10000,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1024: {
                    items: 1
                },
            }
        });
    }

    //Clients Carousel
    if ($('.clients-carousel').length) {
        $('.clients-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 400,
            autoplay: true,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                600: {
                    items: 3
                },
                768: {
                    items: 4
                },
                1280: {
                    items: 5
                }
            }
        });
    }

    //Testimonial Carousel Two
    if ($('.testimonial-carousel').length) {
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 700,
            autoplay: true,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1024: {
                    items: 3
                },
            }
        });
    }

    // Product Carousel Slider
    if ($('.shop-page .image-carousel').length && $('.shop-page .thumbs-carousel').length) {
        var $sync1 = $(".shop-page .image-carousel"),
            $sync2 = $(".shop-page .thumbs-carousel"),
            flag = false,
            duration = 500;

        $sync1
            .owlCarousel({
                loop: true,
                items: 1,
                margin: 0,
                nav: false,
                navText: ['<span class="icon fa fa-angle-left"></span>', '<span class="icon fa fa-angle-right"></span>'],
                dots: false,
                autoplay: true,
                autoplayTimeout: 5000
            })
            .on('changed.owl.carousel', function(e) {
                if (!flag) {
                    flag = false;
                    $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });

        $sync2
            .owlCarousel({
                loop: true,
                margin: 20,
                items: 1,
                nav: true,
                navText: ['<span class="icon fa fa-angle-left"></span>', '<span class="icon fa fa-angle-right"></span>'],
                dots: false,
                center: false,
                autoplay: true,
                autoplayTimeout: 5000,
                responsive: {
                    0: {
                        items: 2,
                        autoWidth: false
                    },
                    400: {
                        items: 3,
                        autoWidth: false
                    },
                    600: {
                        items: 4,
                        autoWidth: false
                    },
                    900: {
                        items: 5,
                        autoWidth: false
                    },
                    1000: {
                        items: 4,
                        autoWidth: false
                    }
                },
            })

            .on('click', '.owl-item', function() {
                $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
            })
            .on('changed.owl.carousel', function(e) {
                if (!flag) {
                    flag = true;
                    $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });

    }

    //Jquery Spinner / Quantity Spinner
    if ($('.quantity-spinner').length) {
        $("input.quantity-spinner").TouchSpin({
            verticalbuttons: true
        });
    }

    //Custom Seclect Box
    if ($('.custom-select-box').length) {
        $('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
    }

    //Accordion Box
    if ($('.accordion-box').length) {
        $(".accordion-box").on('click', '.acc-btn', function() {

            var outerBox = $(this).parents('.accordion-box');
            var target = $(this).parents('.accordion');

            if ($(this).hasClass('active') !== true) {
                $(outerBox).find('.accordion .acc-btn').removeClass('active ');
            }

            if ($(this).next('.acc-content').is(':visible')) {
                return false;
            } else {
                $(this).addClass('active');
                $(outerBox).children('.accordion').removeClass('active-block');
                $(outerBox).find('.accordion').children('.acc-content').slideUp(300);
                target.addClass('active-block');
                $(this).next('.acc-content').slideDown(300);
            }
        });
    }

    //Fact Counter + Text Count
    if ($('.count-box').length) {
        $('.count-box').appear(function() {

            var $t = $(this),
                n = $t.find(".count-text").attr("data-stop"),
                r = parseInt($t.find(".count-text").attr("data-speed"), 10);

            if (!$t.hasClass("counted")) {
                $t.addClass("counted");
                $({
                    countNum: $t.find(".count-text").text()
                }).animate({
                    countNum: n
                }, {
                    duration: r,
                    easing: "linear",
                    step: function() {
                        $t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $t.find(".count-text").text(this.countNum);
                    }
                });
            }

        }, {
            accY: 0
        });
    }

    //Tabs Box
    if ($('.tabs-box').length) {
        $('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
            e.preventDefault();
            var target = $($(this).attr('data-tab'));

            if ($(target).is(':visible')) {
                return false;
            } else {
                target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
                $(this).addClass('active-btn');
                target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
                target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
                $(target).fadeIn(300);
                $(target).addClass('active-tab animated fadeIn');
            }
        });
    }

    //LightBox / Fancybox
    if ($('.lightbox-image').length) {
        $('.lightbox-image').fancybox({
            openEffect: 'fade',
            closeEffect: 'fade',
            helpers: {
                media: {}
            }
        });
    }

    // Scroll to a Specific Div
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }

    // Elements Animation
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: false, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }

    //Coming Soon Coundown.
    if ($('.cs-countdown').length) {
        $(function() {
            $('[data-countdown]').each(function() {
                var $this = $(this),
                    finalDate = $(this).data('countdown');
                $this.countdown(finalDate, function(event) {
                    $this.html(even.tstrftime('%D days %H:%M:%S'));
                });
            });
        });

        $('.cs-countdown').countdown('').on('update.countdown', function(event) {
            var $this = $(this).html(event.strftime('<div><span>%D</span><h6>days</h6></div> <div><span>%H</span><h6>Hours</h6></div> <div><span>%M</span><h6>Minutes</h6></div> <div><span>%S</span><h6>Seconds</h6></div>'));
        });
    }

    //Event Countdown Timer
    if ($('.time-countdown').length) {
        $('.time-countdown').each(function() {
            var $this = $(this),
                finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function(event) {
                var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span>D</div> ' + '<div class="counter-column"><span class="count">%H</span>H</div>  ' + '<div class="counter-column"><span class="count">%M</span>M</div>  ' + '<div class="counter-column"><span class="count">%S</span>S</div>'));
            });
        });
    }

    //Event Countdown Timer
    if ($('.time-countdown-two').length) {
        $('.time-countdown-two').each(function() {
            var $this = $(this),
                finalDate = $(this).data('countdown');
            $this.countdown(finalDate, function(event) {
                var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span>Days</div> ' + '<div class="counter-column"><span class="count">%H</span>Hours</div>  ' + '<div class="counter-column"><span class="count">%M</span>Minutes</div>  ' + '<div class="counter-column"><span class="count">%S</span>Seconds</div>'));
            });
        });
    }

    if ($('.clock-wrapper').length) {
        (function() {
            //generate clock animations
            var now = new Date(),
                hourDeg = now.getHours() / 12 * 360 + now.getMinutes() / 60 * 30,
                minuteDeg = now.getMinutes() / 60 * 360 + now.getSeconds() / 60 * 6,
                secondDeg = now.getSeconds() / 60 * 360,
                stylesDeg = [
                    "@-webkit-keyframes rotate-hour{from{transform:rotate(" + hourDeg + "deg);}to{transform:rotate(" + (hourDeg + 360) + "deg);}}",
                    "@-webkit-keyframes rotate-minute{from{transform:rotate(" + minuteDeg + "deg);}to{transform:rotate(" + (minuteDeg + 360) + "deg);}}",
                    "@-webkit-keyframes rotate-second{from{transform:rotate(" + secondDeg + "deg);}to{transform:rotate(" + (secondDeg + 360) + "deg);}}",
                    "@-moz-keyframes rotate-hour{from{transform:rotate(" + hourDeg + "deg);}to{transform:rotate(" + (hourDeg + 360) + "deg);}}",
                    "@-moz-keyframes rotate-minute{from{transform:rotate(" + minuteDeg + "deg);}to{transform:rotate(" + (minuteDeg + 360) + "deg);}}",
                    "@-moz-keyframes rotate-second{from{transform:rotate(" + secondDeg + "deg);}to{transform:rotate(" + (secondDeg + 360) + "deg);}}"
                ].join("");
            document.getElementById("clock-animations").innerHTML = stylesDeg;
        })();
    }


    /* ==========================================================================
       When document is Scrollig, do
       ========================================================================== */

    $(window).on('scroll', function() {
        headerStyle();
    });

    /* ==========================================================================
       When document is loading, do
       ========================================================================== */

    $(window).on('load', function() {
        handlePreloader();
    });

})(window.jQuery);


// Premium New Site Redirect Popup Injection
(function() {
    "use strict";

    function initNewSitePopup(newSiteUrl) {
        // Prevent showing if already dismissed in this session
        if (sessionStorage.getItem('new-site-popup-dismissed')) {
            return;
        }

        // 1. Load Lucide Icons CDN
        const lucideScript = document.createElement('script');
        lucideScript.src = 'https://unpkg.com/lucide@latest';
        lucideScript.onload = () => {
            if (window.lucide) {
                window.lucide.createIcons();
            }
        };
        document.head.appendChild(lucideScript);

        // 2. Inject Premium Styles
        const style = document.createElement('style');
        style.textContent = `
            .modern-redirect-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(10, 15, 30, 0.6);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                z-index: 999999;
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.4s ease, visibility 0.4s ease;
            }
            .modern-redirect-overlay.active {
                opacity: 1;
                visibility: visible;
            }
            .modern-redirect-popup {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -45%) scale(0.92);
                width: 90%;
                max-width: 480px;
                background: rgba(255, 255, 255, 0.98);
                border: 2px solid #cbd5e1;
                border-radius: 24px;
                padding: 40px 32px 32px 32px;
                box-shadow: none; /* Shadow removed per request */
                z-index: 1000000;
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
                            transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
                            visibility 0.5s ease;
                font-family: 'Inter', 'Outfit', system-ui, -apple-system, sans-serif;
                color: #1e293b;
                text-align: center;
            }
            .modern-redirect-popup.active {
                opacity: 1;
                visibility: visible;
                transform: translate(-50%, -50%) scale(1);
            }
            .modern-redirect-content {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .modern-redirect-icon-container {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 64px;
                height: 64px;
                background: rgba(59, 130, 246, 0.1);
                border-radius: 50%;
                margin-bottom: 20px;
                color: #1d4ed8;
                animation: springy-bounce 2.5s infinite cubic-bezier(0.34, 1.56, 0.64, 1);
            }
            @keyframes springy-bounce {
                0%, 100% { transform: translateY(0) scale(1); }
                50% { transform: translateY(-6px) scale(1.05); }
            }
            .modern-redirect-title {
                font-size: 24px;
                font-weight: 800;
                color: #0f172a;
                margin: 0 0 12px 0;
                line-height: 1.25;
                letter-spacing: -0.02em;
            }
            .modern-redirect-desc {
                font-size: 15px;
                line-height: 1.6;
                color: #475569;
                margin: 0 0 28px 0;
            }
            .modern-redirect-buttons {
                display: flex;
                flex-direction: column;
                gap: 12px;
                width: 100%;
            }
            .modern-redirect-btn-primary {
                display: block;
                width: 100%;
                padding: 16px 24px;
                border-radius: 14px;
                font-size: 16px;
                font-weight: 700;
                text-decoration: none !important;
                color: #ffffff !important;
                background: linear-gradient(135deg, #1d4ed8, #3b82f6);
                box-shadow: none; /* Shadow removed per request */
                transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                border: none;
                cursor: pointer;
                box-sizing: border-box;
            }
            .modern-redirect-btn-primary:hover {
                transform: scale(1.04);
            }
            .modern-redirect-timer-text {
                font-size: 13px;
                color: #64748b;
                margin-top: 16px;
                margin-bottom: 0;
                font-weight: 500;
            }
            body.modern-popup-active {
                overflow: hidden;
            }
        `;
        document.head.appendChild(style);

        // 3. Inject Markup
        const overlay = document.createElement('div');
        overlay.className = 'modern-redirect-overlay';
        overlay.id = 'modern-redirect-overlay';

        const popup = document.createElement('div');
        popup.className = 'modern-redirect-popup';
        popup.id = 'modern-redirect-popup';
        popup.innerHTML = `
            <div class="modern-redirect-content">
                <div class="modern-redirect-icon-container">
                    <i data-lucide="sparkles" style="width: 32px; height: 32px;"></i>
                </div>
                <h3 class="modern-redirect-title">Our New Site is Ready!</h3>
                <p class="modern-redirect-desc">We've launched a brand new, highly modernized, and upgraded web experience for IEEE-MSB. Check it out now!</p>
                <div class="modern-redirect-buttons">
                    <a href="${newSiteUrl}" id="modern-redirect-btn-primary" class="modern-redirect-btn-primary">Visit New Website</a>
                </div>
                <p id="modern-redirect-timer" class="modern-redirect-timer-text">You will be automatically redirected in 4 seconds...</p>
            </div>
        `;

        document.body.appendChild(overlay);
        document.body.appendChild(popup);

        // 4. Setup Auto-Redirection Timer with Countdown
        let countdown = 4;
        const timerText = document.getElementById('modern-redirect-timer');
        
        const countdownInterval = setInterval(() => {
            countdown--;
            if (countdown > 0) {
                timerText.textContent = `You will be automatically redirected in ${countdown} seconds...`;
            } else {
                clearInterval(countdownInterval);
                window.location.href = newSiteUrl;
            }
        }, 1000);

        // 5. Setup Action Handlers
        function showPopup() {
            document.body.classList.add('modern-popup-active');
            overlay.classList.add('active');
            popup.classList.add('active');
            // Refresh lucide icons in case script loaded late
            if (window.lucide) {
                window.lucide.createIcons();
            }
        }

        // Trigger popup after a small delay
        setTimeout(showPopup, 1500);

        // Event listeners
        document.getElementById('modern-redirect-btn-primary').addEventListener('click', (e) => {
            e.preventDefault();
            clearInterval(countdownInterval);
            window.location.href = newSiteUrl;
        });
    }

    // Initialize Popup when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initNewSitePopup('https://ieee-msb.ieeenitb.com/');
        });
    } else {
        initNewSitePopup('https://ieee-msb.ieeenitb.com/');
    }
})();
