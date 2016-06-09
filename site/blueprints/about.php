<?php if(!defined('KIRBY')) exit ?>

title: About
pages: false
files: false
deletable: false
fields:
  title:
    label: Title
    type:  text
  text:
    label: Text
    type:  textarea
  clients:
    label: Clients
    type: structure
    fields:
      client:
        label: Client
        type: text