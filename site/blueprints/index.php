<?php if(!defined('KIRBY')) exit ?>

title: Index
pages: false
files: true
fields:
  title:
    label: Title
    type:  text
    width: 1/2
  bg:
    label: Background image
    type: image
    width: 1/2
  partners:
    label: Partners
    type: structure
    fields:
      name:
        label: Name
        type: text
      image:
        label: Image
        type: image
      link:
        label: Link
        type: url