#!/usr/bin/node
/* script to update the text color of the DIV#red_header element to red when clicked */

function changeHeaderColor () {
  $('header').css({ color: '#FF0000' });
}

$('#red_header').on('click', changeHeaderColor);
