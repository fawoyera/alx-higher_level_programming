#!/usr/bin/node
/* script to update the text of the header to "New Header!!!" when user clicks on tag DIV#update_header */

function updateHeader () {
  $('header').text('New Header!!!');
}

$('#update_header').on('click', updateHeader);
