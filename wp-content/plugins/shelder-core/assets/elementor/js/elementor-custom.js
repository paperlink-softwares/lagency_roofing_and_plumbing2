(function($) {

    "use strict";


    var banner_carousel = function($scope, $) {

        // banner-carousel
        if ($('.banner-carousel').length) {
            $('.banner-carousel').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                active: true,
                smartSpeed: 1000,
                autoplay: true,
                autoplayTimeout: 6000,
                navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    800: {
                        items: 1
                    },
                    1024: {
                        items: 1
                    }
                }
            });
        }

    }

    var testimonial_carousel = function($scope, $) {

        if ($('.testimonial-carousel').length) {
            $('.testimonial-carousel').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                smartSpeed: 1000,
                autoplay: 500,
                navText: ['<span class="fas fa-arrow-left"></span>', '<span class="fas fa-arrow-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    800: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    }
                }
            });
        }

    }


    var brand_carousel = function($scope, $) {
        if ($('.clients-carousel').length) {
            $('.clients-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: false,
                smartSpeed: 3000,
                autoplay: true,
                navText: ['<span class="flaticon-left"></span>', '<span class="flaticon-right"></span>'],
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
                    800: {
                        items: 4
                    },
                    1200: {
                        items: 5
                    }

                }
            });
        }
    }

    var project_carousel = function($scope, $) {
        if ($('.project-carousel').length) {
            $('.project-carousel').owlCarousel({
                loop: true,
                margin: 0,
                nav: false,
                smartSpeed: 3000,
                autoplay: true,
                navText: ['<span class="flaticon-left"></span>', '<span class="flaticon-right"></span>'],
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
                    800: {
                        items: 4
                    },
                    1200: {
                        items: 5
                    }

                }
            });
        }
    }

    var testimonial_02_carousel = function($scope, $) {

        //testimonial-carousel-2
        if ($('.testimonial-carousel-2').length) {
            $('.testimonial-carousel-2').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                smartSpeed: 1000,
                autoplay: 500,
                navText: ['<span class="fas fa-arrow-left"></span>', '<span class="fas fa-arrow-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    800: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    }
                }
            });
        }

    }

    var blog_carousel = function($scope, $) {
        //news-carousel
        if ($('.news-carousel').length) {
            $('.news-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                smartSpeed: 1000,
                autoplay: 500,
                navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    800: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    }
                }
            });
        }
    }


    var team_carousel = function($scope, $) {
        if ($('.four-item-carousel').length) {
            $('.four-item-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                autoHeight: true,
                smartSpeed: 500,
                autoplay: 5000,
                navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    800: {
                        items: 3
                    },
                    1024: {
                        items: 3
                    },
                    1200: {
                        items: 4
                    }
                }
            });
        }
    }

    var why_choose_carousel = function($scope, $) {
        if ($('.three-item-carousel').length) {
            $('.three-item-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                smartSpeed: 1000,
                autoplay: 500,
                navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    800: {
                        items: 2
                    },
                    1024: {
                        items: 3
                    }
                }
            });
        }
    }


    var Shelder_Compare_Gallery_js = function($scope, $) {



        function beforeAfterTwentyTwenty() {
            if ($(".before-after-twentytwenty").length) {
                $(".before-after-twentytwenty").each(function() {
                    var Self = $(this);
                    var objName = Self.attr('id');
                    $('#' + objName).twentytwenty();

                    // hack for bs tab 
                    $(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function(e) {
                        var paneTarget = $(e.target).attr('data-target');
                        var $thePane = $('.tab-pane' + paneTarget);
                        var twentyTwentyContainer = '#' + objName;
                        var twentyTwentyHeight = $thePane.find(twentyTwentyContainer).height();
                        if (0 === twentyTwentyHeight) {
                            $thePane.find(twentyTwentyContainer).trigger('resize');
                        }
                    });
                });
            };
        }

        beforeAfterTwentyTwenty();
    }
    var testimonial_03 = function($scope, $) {
        if ($('.single-item-carousel').length) {
            $('.single-item-carousel').owlCarousel({
                loop: true,
                margin: 0,
                nav: false,
                smartSpeed: 1000,
                autoplay: 500,
                navText: ['<span class="fas fa-angle-left"></span>', '<span class="fas fa-angle-right"></span>'],
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    800: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    }
                }
            });
        }

    }


    var latest_project_2_js = function($scope, $) {
        //Sortable Masonary with Filters
        enableMasonry();

        function enableMasonry() {
            if ($('.sortable-masonry').length) {

                var winDow = $(window);
                // Needed variables
                var $container = $('.sortable-masonry .items-container');
                var $filter = $('.filter-btns');

                $container.isotope({
                    filter: '*',
                    masonry: {
                        columnWidth: '.masonry-item.small-column'
                    },
                    animationOptions: {
                        duration: 500,
                        easing: 'linear'
                    }
                });


                // Isotope Filter 
                $filter.find('li').on('click', function() {
                    var selector = $(this).attr('data-filter');

                    try {
                        $container.isotope({
                            filter: selector,
                            animationOptions: {
                                duration: 500,
                                easing: 'linear',
                                queue: false
                            }
                        });
                    } catch (err) {

                    }
                    return false;
                });


                winDow.on('resize', function() {
                    var selector = $filter.find('li.active').attr('data-filter');

                    $container.isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 500,
                            easing: 'linear',
                            queue: false
                        }
                    });
                });


                var filterItemA = $('.filter-btns li');

                filterItemA.on('click', function() {
                    var $this = $(this);
                    if (!$this.hasClass('active')) {
                        filterItemA.removeClass('active');
                        $this.addClass('active');
                    }
                });
            }
        }

        // enableMasonry();

    }



    var shelder_faq_js = function($scope, $) {
        //Accordion Box
        if ($('.accordion-box').length) {
            $(".accordion-box").on('click', '.acc-btn', function() {

                var outerBox = $(this).parents('.accordion-box');
                var target = $(this).parents('.accordion');

                if ($(this).hasClass('active') !== true) {
                    $(outerBox).find('.accordion .acc-btn').removeClass('active');
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
    }


    //Elementor JS Hooks
    $(window).on('elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction('frontend/element_ready/slider_banner.default', banner_carousel);
        elementorFrontend.hooks.addAction('frontend/element_ready/testimonial_01.default', testimonial_carousel);
        elementorFrontend.hooks.addAction('frontend/element_ready/brand_slider.default', brand_carousel);
        elementorFrontend.hooks.addAction('frontend/element_ready/latest_project.default', project_carousel);
        elementorFrontend.hooks.addAction('frontend/element_ready/testimonial_02.default', testimonial_02_carousel);
        elementorFrontend.hooks.addAction('frontend/element_ready/shelder_blog.default', blog_carousel);
        elementorFrontend.hooks.addAction('frontend/element_ready/team_02.default', team_carousel);
        elementorFrontend.hooks.addAction('frontend/element_ready/shelder_facts.default', team_carousel);
        elementorFrontend.hooks.addAction('frontend/element_ready/why_choose_three.default', why_choose_carousel);
        elementorFrontend.hooks.addAction('frontend/element_ready/service_01.default', why_choose_carousel);
        elementorFrontend.hooks.addAction('frontend/element_ready/shelder_blog.default', why_choose_carousel);
        elementorFrontend.hooks.addAction('frontend/element_ready/Shelder_Compare_Gallery.default', Shelder_Compare_Gallery_js);
        elementorFrontend.hooks.addAction('frontend/element_ready/testimonial_03.default', testimonial_03);
        elementorFrontend.hooks.addAction('frontend/element_ready/latest_project_2.default', latest_project_2_js);
        elementorFrontend.hooks.addAction('frontend/element_ready/shelder_faq.default', shelder_faq_js);

    });

})(window.jQuery);