<?php

/*

---------------------------------------
License Setup
---------------------------------------

Please add your license key, which you've received
via email after purchasing Kirby on http://getkirby.com/buy

It is not permitted to run a public website without a
valid license key. Please read the End User License Agreement
for more information: http://getkirby.com/license

*/

c::set('license', 'put your license key here');

/*

---------------------------------------
Kirby Configuration
---------------------------------------

By default you don't have to configure anything to
make Kirby work. For more fine-grained configuration
of the system, please check out http://getkirby.com/docs/advanced/options

*/

c::set('home', 'landing');

c::set('languages', array(
  array(
    'code'    => 'fr',
    'name'    => 'Français',
    'default' => true,
    'locale'  => 'fr_FR',
    'url'     => '/fr',
  ),
  array(
    'code'    => 'en',
    'name'    => 'English',
    'locale'  => 'en_US',
    'url'     => '/en',
  )
));

c::set('oembed.lazyvideo', true);
c::set('autopublish.templates', array('project', 'item'));
c::set('sitemap.exclude', array('error'));
c::set('sitemap.important', array('contact'));

c::set('routes', array(
    array(
        'pattern' => '(:all)/ajax',
        'action'  => function($uri) {
          $l = substr($uri, 0, 2);
          $uri = substr($uri,3);
          tpl::load(kirby()->roots()->templates() . DS . 'ajax.php', array('uri' => $uri, 'lang' => $l), false );
        }
    ),
    array(
        'pattern' => 'pages',
        'action'  => function($uri,$uid) {
          $page = site()->homePage();
      		go($page);
        }
    )
));