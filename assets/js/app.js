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
                    if ($('body').hasClass('page')) {} else {}
                });
            });
            $(window).resize(function(event) {});
            $(document).ready(function($) {
                $body = $('html, body');
                $container = $('#wrapper');
                History.Adapter.bind(window, 'statechange', function() {
                    var State = History.getState();
                    console.log(State);
                    var content = State.data;
                    if (content.type == 'page') {
                        $body.addClass('page');
                        app.loadContent(State.url, $container);
                    } else if (content.type == 'index') {
                        app.loadContent(State.url, $container);
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
        },
        loadContent: function(url, target) {
            $(target).load(url + ' #wrapper', function(response) {});
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