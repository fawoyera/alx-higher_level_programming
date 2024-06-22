#!/usr/bin/node
/* script to fetch and display the value of "hello" in different languages from a URL that returns a json */

document.addEventListener('DOMContentLoaded', () => {
  function translateHello () {
    const lang = $('input#language_code').val();
    $.get(`https://hellosalut.stefanbohacek.dev/?lang=${lang}`, function (response) {
      $('div#hello').text(response.hello);
    });
  }

  $('input#btn_translate').on('click', translateHello);

  const inputField = $('input#language_code');

  function enterKey () {
    inputField.on('keydown', function (event) { if (event.keyCode === 13) { translateHello(); } });
  }

  inputField.on('focus', enterKey);
});
