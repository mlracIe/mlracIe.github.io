//калькулятор
$(document).ready(function(){
  if (window.calc) {  
    $('#calc').convertor();
  };
});

//меню
$(function(){ 
"use strict"; 
	$('#menu_icon').click( function() { 
	$('#menu').toggleClass('open'); 
	$( '#menuTline' ).toggleClass( 'openLine' );
	}); 
});