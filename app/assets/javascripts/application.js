// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require bootstrap-sprockets
//= require turbolinks
//= require_self
//= require_tree .


$(document).on("turbolinks:load", function () {
  $('#gender-select').dropdown();
});


 $(function(){
      $('.joined-member').click(function(){
        $('.ui.modal').modal('show');
      });
    });

$(document).ready(function() {
  $('.ui.sidebar').sidebar({
    context: $('.bottom.segment')
  })
  .sidebar('attach events', '.menu .item');
});


$(document).ready(function() {
    $(".panel.panel-chat > .panel-heading > .chatMinimize").click(function(){
      if($(this).parent().parent().hasClass('mini'))
      {
          $(this).parent().parent().removeClass('mini').addClass('normal');

          $('.panel.panel-chat > .panel-body').animate({height: "250px"}, 500).show();

          $('.panel.panel-chat > .panel-footer').animate({height: "75px"}, 500).show();
      }
      else
      {
          $(this).parent().parent().removeClass('normal').addClass('mini');

          $('.panel.panel-chat > .panel-body').animate({height: "0"}, 500);

          $('.panel.panel-chat > .panel-footer').animate({height: "0"}, 500);

          setTimeout(function() {
              $('.panel.panel-chat > .panel-body').hide();
              $('.panel.panel-chat > .panel-footer').hide();
          }, 500);


      }

  });
  $(".panel.panel-chat > .panel-heading > .chatClose").click(function(){
      $(this).parent().parent().remove();
  });
});
/*
function changeCssForModal() {
  console.log(123);
   $(".ui .small .modal .transition .visible .active .scrolling").attr("id", "modal-show");
}*/


$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();
    });

    function hamburger_cross() {

      if (isClosed == true) {
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }

  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });
});
