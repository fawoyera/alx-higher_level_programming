#!/usr/bin/node
/* script to add a <li> element to a list when user clicks on tag DIV#add_item */

function addListItem () {
  $('ul.my_list').append('<li>Item</li>');
}

$('#add_item').on('click', addListItem);
