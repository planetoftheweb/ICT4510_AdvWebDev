/*
  name: Ray Villalobos
  course name: ICT 4510 Advanced Web Design and Site Management
  date: 04/27/15
*/

$(function() {
  'use strict';

  function getUserInfo() {
    var formInfo = {};
    var myInfoArray = [];
    formInfo.firstname = $('#firstname').val();
    formInfo.lastname = $('#lastname').val();
    formInfo.email = $('#email').val();
    formInfo.phone = $('#phone').val();

    if (myInfoArray.length === 0) {
        $('#firstname').val('');
        $('#lastname').val('');
        $('#email').val('');
        $('#phone').val('');
        return 'Thank you ' + formInfo.firstname;
    } else {
        return '';
    }
  }

  function display() {
    var info = getUserInfo();
      $('#message').html('<p>' + info + '</p>');
    return info;
  }

  // Form Validation
  $( "#myForm" ).validate({
    submitHandler: function() {
      display();
      //$(form).ajaxSubmit();
    }
  });

  // Tabs
  $( "#tabs" ).tabs();
});
