#!/usr/bin/node
/* script to add, remove and clear <li> elements from a list when the user click */

document.addEventListener('DOMContentLoaded', () => {
  function addItem () {
    $('ul.my_list').append('<li>Item</li>');
  }

  function removeItem () {
    $('ul.my_list li:last').remove();
  }

  function clearList () {
    $('ul.my_list').empty();
  }

  $('div#add_item').on('click', addItem);
  $('div#remove_item').on('click', removeItem);
  $('div#clear_list').on('click', clearList);
});
