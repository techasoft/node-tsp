/*
* =======================================================
* Document Info
* =======================================================
*
*  @Doc Description: agoralive web site Custom Javascript
*  @Author: d4rth0nyx
*  @Creation Date: 2017-11-29
*  @Copyright: Copyright (c) 2017 techasoft - http://techasoft.gr
*  @Version: 1.0.1
*
*  @Status: Development
*  @Last Modified Date: 2017-11-29
*  @Last Modify User: d4rth0nyx
*
*
* //////////////// Actions TO DO //////////////////////

1) 
2) 
3) 
4) 
5) 
========================================================= 
*/

$(document).foundation()

/* Custom class with custom javascript for scroll effect */
$('a.smooth-scroll[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  
  
  /* Custom class with custom back-on-top button and javascript for scroll effect */
  $(document).ready(function(){
    
      // hide #back-top first
      $('.back-top').hide();
    
      // fade in #back-top
      $(function () {
        $(window).scroll(function () {
          if ($(this).scrollTop() > 100) {
            $('.back-top').fadeIn();
          } else {
            $('.back-top').fadeOut();
          }
        });
    
        // scroll body to 0px on click
        $('.back-top').click(function () {
          $('html, body').animate({
            scrollTop: 0
          }, 500);
          return false;
        });
      });
    
    });