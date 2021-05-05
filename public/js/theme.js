"use strict";




// Banner rev Slider 
function mainBanner() {
    if ($("#main_slider").length) {
        $("#main_slider").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            loops: false,
            delay: 7000,
            navigation: {
                arrows: {
                    style: "hephaistos",
                    enable: true,
                    hide_onmobile: false,
                    hide_onleave: false,
                    tmp: '',
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 10,
                        v_offset: -51
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 10,
                        v_offset: -51
                    }
                },
            },
            responsiveLevels: [2220, 1183, 975, 751],
            gridwidth: [1170, 970, 770, 580],
            gridheight: [783, 783, 700, 700],
            shadow: 0,
            spinner: "off",
            autoHeight: "off",
            disableProgressBar: "on",
            hideThumbsOnMobile: "off",
            hideSliderAtLimit: 0,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            debugMode: false,
            fallbacks: {
                simplifyAll: "off",
                disableFocusListener: false,
            }
        });
    };
}


// placeholder remove
function removePlaceholder() {
    if ($("input,textarea").length) {
        $("input,textarea").each(
            function() {
                $(this).data('holder', $(this).attr('placeholder'));
                $(this).on('focusin', function() {
                    $(this).attr('placeholder', '');
                });
                $(this).on('focusout', function() {
                    $(this).attr('placeholder', $(this).data('holder'));
                });

            });
    }
}


// Language switcher
function languageSwitcher() {
    if ($("#polyglot-language-options").length) {
        $('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
            effect: 'fade',
            testMode: true,
            onChange: function(evt) {
                    alert("The selected language is: " + evt.selectedItem);
                }
                //                ,afterLoad: function(evt){
                //                    alert("The selected language has been loaded");
                //                },
                //                beforeOpen: function(evt){
                //                    alert("before open");
                //                },
                //                afterOpen: function(evt){
                //                    alert("after open");
                //                },
                //                beforeClose: function(evt){
                //                    alert("before close");
                //                },
                //                afterClose: function(evt){
                //                    alert("after close");
                //                }
        });
    };
}


// Select menu 
function selectDropdown() {
    if ($(".selectmenu").length) {
        $(".selectmenu").selectmenu();
    };
}

// Testimonial Slider
function testiminialSliderSingle() {
    if ($('.testimonial-carousel-content-box').length && $('.testimonial-carousel-thumbnail-box').length) {

        var $sync1 = $(".testimonial-carousel-content-box"),
            $sync2 = $(".testimonial-carousel-thumbnail-box"),
            flag = false,
            duration = 500;

        $sync1
            .owlCarousel({
                animateIn: 'fadeId',
                animateOut: 'fadeOut',
                items: 1,
                margin: 0,
                nav: true,
                dots: false,
                navText: false,
                autoplay: true,
                autoplayTimeout: 3500,
                autoplaySpeed: 1500
            })
            .on('changed.owl.carousel', function(e) {
                if (!flag) {
                    flag = true;
                    $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });

        $sync2
            .owlCarousel({
                margin: 0,
                items: 3,
                nav: false,
                dots: false,
                navText: false,
                center: false,
                autoplay: true,
                autoplayTimeout: 3500,
                autoplaySpeed: 1500,
                responsive: {
                    0: {
                        items: 4,
                        autoWidth: false
                    },
                    551: {
                        items: 2,
                        autoWidth: false
                    },
                    650: {
                        items: 3,
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

    };
}

// Counter function
function CounterNumberChanger() {
    var timer = $('.timer');
    if (timer.length) {
        timer.appear(function() {
            timer.countTo();
        })
    }
}

// Accordion panel
function themeAccrodion() {
    if ($('.theme-accordion > .panel').length) {
        $('.theme-accordion > .panel').on('show.bs.collapse', function(e) {
            var heading = $(this).find('.panel-heading');
            heading.addClass("active-panel");

        });

        $('.theme-accordion > .panel').on('hidden.bs.collapse', function(e) {
            var heading = $(this).find('.panel-heading');
            heading.removeClass("active-panel");
            //setProgressBar(heading.get(0).id);
        });

    };
}


// latest News Slider  
function latestNewsPost() {
    if ($('.news_slider').length) {
        $('.news_slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            autoplay: true,
            autoplayTimeout: 3500,
            autoplaySpeed: 1500,
            lazyLoad: true,
            singleItem: true,
            items: 1,
        })
    }
}

// Partner Logo Footer 
function partnersLogo() {
    if ($('#partner_logo').length) {
        $('#partner_logo').owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 1500,
            autoplaySpeed: 1000,
            lazyLoad: true,
            responsive: {
                0: {
                    items: 1
                },
                550: {
                    items: 2
                },
                1000: {
                    items: 3
                },
                1001: {
                    items: 4
                }
            }
        })
    }
}


// Map Area Address  
function mapAddress() {
    if ($('.map_address').length) {
        $('.map_address').owlCarousel({
            loop: true,
            margin: 5,
            nav: true,
            navText: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3500,
            autoplaySpeed: 1500,
            lazyLoad: true,
            singleItem: true,
            items: 1,
        })
    }
}


// Scroll to top
function scrollToTop() {
    if ($('.scroll-top').length) {

        //Check to see if the window is top if not then display button
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 400) {
                $('.scroll-top').fadeIn();
            } else {
                $('.scroll-top').fadeOut();
            }
        });

        //Click event to scroll to top
        $('.scroll-top').on('click', function() {
            $('html, body').animate({ scrollTop: 0 }, 1500);
            return false;
        });
    }
}


// cart item Dismiss
function cartItemDismiss() {
    if ($('.cart_option').length) {
        $('.cart_list>ul>li').append(function() {
            return '<i class="fa fa-times-circle" aria-hidden="true"></i>';
        });
        $('.cart_list>ul>li .fa-times-circle').on('click', function() {
            $(this).parent('li').fadeOut(300);
        });
    };
}

// Cart Open function 
function cartOpen() {
    if ($('#cartDropdown').length) {
        $("#cartDropdown").on('click', function() {
            $(".cart_list").slideToggle(300)
        })
    }
}

// Fancybox Video
function FancypopUpVideo() {
    if ($(".fancy_video").length) {
        $(".fancy_video").fancybox({
            maxWidth: 1080,
            maxHeight: 1080,
            fitToView: false,
            width: '85%',
            height: '85%',
            autoSize: false,
            closeClick: false,
            openEffect: 'none',
            closeEffect: 'none'
        });
    };
}


// Fancybox 
function FancypopUp() {
    if ($(".fancybox").length) {
        $(".fancybox").fancybox({
            openEffect: 'elastic',
            closeEffect: 'elastic',
            helpers: {
                overlay: {
                    css: {
                        'background': 'rgba(0, 0, 0, 0.6)'
                    }
                }
            }
        });
    };
}

// Sidebar Testimonial Slider
function sidebarTestimonialCarousel() {
    if ($('.sidebar-testimonial-carousel-content-box').length && $('.sidebar-testimonial-carousel-thumbnail-box').length) {

        var $sync1 = $(".sidebar-testimonial-carousel-content-box"),
            $sync2 = $(".sidebar-testimonial-carousel-thumbnail-box"),
            flag = false,
            duration = 500;

        $sync1
            .owlCarousel({
                animateIn: 'fadeId',
                animateOut: 'fadeOut',
                items: 1,
                margin: 0,
                nav: false,
                dots: false,
                autoplay: true,
                autoplayTimeout: 3500,
                autoplaySpeed: 1500
            })
            .on('changed.owl.carousel', function(e) {
                if (!flag) {
                    flag = true;
                    $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });

        $sync2
            .owlCarousel({
                margin: 0,
                items: 2,
                nav: false,
                dots: false,
                navText: false,
                center: false,
                autoplay: true,
                autoplayTimeout: 3500,
                autoplaySpeed: 1500,
                responsive: {
                    0: {
                        items: 2,
                        autoWidth: false
                    },
                    400: {
                        items: 2,
                        autoWidth: false
                    },
                    1200: {
                        items: 2,
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

    };
}



// Mixitup gallery
function mixitupGallery() {
    if ($("#mixitup_list").length) {
        $("#mixitup_list").mixItUp()
    };
}


// isoptop 
function masanory() {
    if ($("#isotop_wrapper").length) {
        var $grid = $('#isotop_wrapper').isotope({
            // options
            itemSelector: '.isotop_item',

        });

        // filter items on button click
        $('.mixitUp_menu').on('click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        // change is-checked class on buttons
        $('.mixitUp_menu').each(function(i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'li', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
        });
    };
}


// Testimonial Sidebar
function sideBartestimonial() {
    if ($('#testimonial-sidebar').length) {
        $('#testimonial-sidebar').owlCarousel({
            animateIn: 'fadeId',
            animateOut: 'fadeOut',
            loop: true,
            margin: 5,
            nav: false,
            navText: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 3500,
            autoplaySpeed: 1500,
            lazyLoad: true,
            singleItem: true,
            items: 1,
        })
    }
}

// Related Project Slider 
function relatedProject() {
    if ($('#related_project_slider').length) {
        $('#related_project_slider').owlCarousel({
            loop: true,
            dots: false,
            nav: true,
            navText: false,
            autoplay: true,
            autoplayTimeout: 2500,
            autoplaySpeed: 1000,
            lazyLoad: true,
            responsive: {
                320: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })
    }
}

// Share item Show
function blogShareSlide() {
    if ($('.share-content').length) {
        $('.share_box button').on('click', function() {
            $(this).parent().find('.share-content').toggleClass('share-show');
        });
    };
}



// Price Ranger 
function priceRange() {
    if ($('.price-ranger').length) {
        $('.price-ranger #slider-range').slider({
            range: true,
            min: 5,
            max: 100,
            values: [11, 49],
            slide: function(event, ui) {
                $('.price-ranger .ranger-min-max-block .min').val('$' + ui.values[0]);
                $('.price-ranger .ranger-min-max-block .max').val('$' + ui.values[1]);
            }
        });
        $('.price-ranger .ranger-min-max-block .min').val('$' + $('.price-ranger #slider-range').slider('values', 0));
        $('.price-ranger .ranger-min-max-block .max').val('$' + $('.price-ranger #slider-range').slider('values', 1));
    };
}



// Bar chart function 
function barTableOne() {
    if ($('#chart-tableOne').length) {
        var ctx = $("#chart-tableOne");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "Company dataset",
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(255,99,132,0.4)",
                    hoverBorderColor: "rgba(255,99,132,1)",
                    data: [65, 59, 80, 81, 56, 55, 0],
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    };
}


// Doughnut Charts 
function doughnutChartBox() {
    if ($('#doughnut-chartBox').length) {
        var ctx = $("#doughnut-chartBox");
        var myDoughnutChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [
                    "65%",
                    "13%",
                    "22%"
                ],
                datasets: [{
                    data: [300, 50, 100],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBorderColor: [
                        "#fff",
                        "#fff",
                        "#fff"
                    ]
                }]
            },
            option: {
                position: "left",
                responsive: true,
            }
        });
    };
}

// Sticky header
function stickyHeader() {
    if ($('.main_menu').length) {
        var sticky = $('.main_menu'),
            scroll = $(window).scrollTop();

        if (scroll >= 190) sticky.addClass('fixed');
        else sticky.removeClass('fixed');

    };
}


// Mobile Navigation
function mobileNavToggler() {
    if ($('.main_menu').length) {
        $('.main_menu ul li.dropdown').append(function() {
            return '<i class="fa fa-bars"></i>';
        });
        $('.main_menu ul li.dropdown .fa').on('click', function() {
            $(this).parent('li').children('ul').slideToggle();
        });

    }
}



//Contact Form Validation
function contactFormValidation() {
    if ($('.form-validation').length) {
        $('.form-validation').validate({ // initialize the plugin
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true
                },
                category: {
                    required: true
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    success: function() {
                        $('.form-validation :input').attr('disabled', 'disabled');
                        $('.form-validation').fadeTo("slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor', 'default');
                            $('#alert_success').fadeIn();
                        });
                    },
                    error: function() {
                        $('.form-validation').fadeTo("slow", 1, function() {
                            $('#alert_error').fadeIn();
                        });
                    }
                });
            }
        });
    }
}

// Close success Alret
function closeSuccessAlert() {
    if ($('.closeAlert').length) {
        $(".closeAlert").on('click', function() {
            $(".alert_wrapper").fadeOut();
        });
        $(".closeAlert").on('click', function() {
            $(".alert_wrapper").fadeOut();
        })
    }
}





// DOM ready function
jQuery(document).on('ready', function() {
    (function($) {
        mainBanner();
        removePlaceholder();
        languageSwitcher();
        selectDropdown();
        testiminialSliderSingle();
        CounterNumberChanger();
        themeAccrodion();
        latestNewsPost();
        partnersLogo();
        mapAddress();
        scrollToTop();
        cartItemDismiss();
        cartOpen();
        FancypopUpVideo();
        FancypopUp();
        sidebarTestimonialCarousel();
        mixitupGallery();
        relatedProject();
        sideBartestimonial();
        blogShareSlide();
        priceRange();
        barTableOne();
        doughnutChartBox();
        mobileNavToggler();
        contactFormValidation();
        closeSuccessAlert();
    })(jQuery);
});


// Window scroll function
jQuery(window).on('scroll', function() {
    (function($) {
        stickyHeader()
    })(jQuery);
});


// window load function
jQuery(window).on('load', function() {
    (function($) {
        masanory();
    })(jQuery);
});
