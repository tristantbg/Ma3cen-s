/* globals $:false */
var width = $(window).width(),
    height = $(window).height(),
    $root = "/maecenas",
    $site_title = "Maecenas",
    logoRotation = 180,
    wpRotationTime = 3;
$(function() {
    var app = {
        init: function() {
            $(window).load(function() {
                $(".loader").fadeOut('fast', function() {
                    if ($('body').hasClass('page')) {
                        TweenLite.set($('.intro .logo .wrap'), {
                            autoAlpha: 1,
                            scale: 0,
                            rotation: logoRotation
                        });
                    } else {
                        TweenMax.fromTo($('.intro .logo .wrap'), 2.3, {
                            autoAlpha: 1,
                            scale: 0,
                            rotation: logoRotation
                        }, {
                            scale: 1,
                            rotation: 0,
                            ease: Back.easeOut.config(1.2)
                        });
                    }
                });
            });
            $(window).resize(function(event) {});
            $(document).ready(function($) {
                $body = $('html, body');
                $container = $('.wrapper');
                History.Adapter.bind(window, 'statechange', function() {
                    var State = History.getState();
                    console.log(State);
                    var content = State.data;
                    if (content.type == 'page') {
                        $body.addClass('page');
                        app.loadContent(State.url + '/ajax', $container);
                    } else if(content.type == 'index') {
                        app.loadContent(State.url + '/ajax', $container);
                    } else {
                      $body.removeClass('page');
                      alert('home');
                    }
                });
                $('body').on('click', '[data-target]', function(e) {
                    $el = $(this);
                    e.preventDefault();
                    if ($el.data("target") == 'index') {
                        app.goIndex($el.attr('href'));
                    } else {
                        History.pushState({
                            type: 'page'
                        }, $site_title + " | " + $el.data('title'), $el.attr('href'));
                    }
                });
            });
            app.introAnim();
            app.sidebarAnim();
        },
        goIndex: function(state) {
            History.pushState({
                type: 'index'
            }, $site_title, state);
        },
        introAnim: function() {
            var circle = $('.intro .circle');
            var wp = $('.intro .wp');
            var tl = new TimelineMax({
                repeat: -1,
                ease: Power1.easeInOut,
                repeatDelay: 2
            });
            tl.to(wp, 2, {
                scaleX: 1
            }).to(wp, wpRotationTime, {
                scaleX: -1,
            }).to(wp, wpRotationTime, {
                scaleX: 1
            });
            var circleDrag = Draggable.create(circle, {
                type: "rotation",
                throwProps: true
            });
            $('.about').hover(function() {
                $page_content.addClass('peekview');
            }, function() {
                $page_content.removeClass('peekview');
            });
        },
        sidebarAnim: function() {
            var circle = $('.sidebar .logo .circle');
            var wp = $('.sidebar .logo .wp');
            var tl = new TimelineMax({
                repeat: -1,
                ease: Power1.easeInOut,
                repeatDelay: 2
            });
            tl.to(wp, 2, {
                scaleX: 1
            }).to(wp, wpRotationTime, {
                scaleX: -1,
            }).to(wp, wpRotationTime, {
                scaleX: 1
            });
            $('.email_us').hover(function() {
                $page_content.addClass('emailzoom');
            }, function() {
                $page_content.removeClass('emailzoom');
            });
        },
        loadContent: function(url, target) {
            $.ajax({
                url: url,
                success: function(data) {
                    $(target).html(data);
                }
            });
        },
        deferImages: function() {
            var imgDefer = document.getElementsByTagName('img');
            for (var i = 0; i < imgDefer.length; i++) {
                if (imgDefer[i].getAttribute('data-src')) {
                    imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
                }
            }
        }
    };
    app.init();
});