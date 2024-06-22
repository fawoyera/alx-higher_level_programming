#!/usr/bin/node
/* script to fetch and display the value of "hello" from a URL that returns a json */

document.addEventListener('DOMContentLoaded', () => {
  function translateHello () {
    const lang = $('input#language_code').val();
    $.get(`https://hellosalut.stefanbohacek.dev/?lang=${lang}`, function (response) {
      $('div#hello').text(response.hello);
    });
  }

  $('input#btn_translate').on('click', translateHello);
});
