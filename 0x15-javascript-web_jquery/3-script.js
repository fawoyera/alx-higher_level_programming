#!/usr/bin/node
/* script to add the class red to the <header> element when user clicks on tag DIV#red_header */

function addClassRed () {
  $('header').addClass('red');
}

$('#red_header').on('click', addClassRed);
