#!/usr/bin/node
/* script to toggle the class of the <header> element when user clicks on tag DIV#red_header */

function toggleClassHeader () {
  $('header').toggleClass('red green');
}

$('#toggle_header').on('click', toggleClassHeader);
