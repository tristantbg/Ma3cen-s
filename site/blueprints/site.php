<?php if(!defined('KIRBY')) exit ?>

title: Site
fields:
  generalSettings:
    label: Site Settings
    type: headline
  title:
    label: Title
    type:  text
    width: 1/2
  logo:
    label: Logo
    type: image
    width: 1/2
  description:
    label: Description
    type:  textarea
  keywords:
    label: Keywords
    type:  tags
  facebook:
    label: Facebook
    type:  url
    width: 1/2
  instagram:
    label: Instagram
    type:  url
    width: 1/2
  customcss:
    label: Custom CSS
    type: textarea
    buttons: false
  googleAnalytics:
    label: Google Analytics ID
    type: text
    icon: code
    help: Tracking ID in the form UA-XXXXXXXX-X. Keep this field empty if you are not using it.
    width: 1/2
  ogimage:
    label: Facebook OpenGraph image
    type: image
    width: 1/2