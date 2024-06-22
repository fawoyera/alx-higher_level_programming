#!/usr/bin/node
/* script to fetch and display the value of "hello" from a URL that returns a json */

document.addEventListener('DOMContentLoaded', () => {
  $.get('https://hellosalut.stefanbohacek.dev/?lang=fr', function (response) {
    $('div#hello').text(response.hello);
  });
});
