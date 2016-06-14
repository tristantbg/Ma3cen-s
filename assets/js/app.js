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
                $body = $('body');
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
                        app.loadContent(State.url, $container);
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
        loadContent: function(url, target) {
            $body.addClass('leaving');
            setTimeout(function() {
                $(target).load(url + ' #wrapper .inner-content', function(response) {
                    setTimeout(function() {$body.removeClass('leaving');},100);
                });
            }, 600);
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