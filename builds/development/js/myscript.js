/*
  name: Ray Villalobos
  course name: ICT 4510 Advanced Web Design and Site Management
  date: 04/20/15
*/

$(function() {
  'use strict';

  //Animate the form element
  $( "#myForm" ).animate({
    opacity: 1
    }, 1000);

  function getUserInfo() {
    var formInfo = {};
    var myInfoArray = [];
    formInfo.firstname = $('#firstname').val();
    formInfo.lastname = $('#lastname').val();
    formInfo.email = $('#email').val();
    formInfo.phone = $('#phone').val();

    myInfoArray = validate(formInfo);
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

  function validate(myObject) {
    var myErrors = [];
    if (myObject.firstname.length === 0) {
      $('span#error_firstname').html('Please enter your first name').css('color', 'red');
      myErrors.push('error');
    } else {
      $('span#error_firstname').html('');
    }
    if (myObject.lastname.length === 0) {
        $('span#error_lastname').html('Please enter your last name').css('color', 'red');
        myErrors.push('error');
    } else {
      $('span#error_lastname').html('');
    }
    if (myObject.email.length === 0) {
        $('span#error_email').html('Please enter your email').css('color', 'red');
        myErrors.push('error');
    } else {
      $('span#error_email').html('');
    }
    return myErrors;
  }

  function display() {
    var info = getUserInfo();
      $('#message').html('<p>' + info + '</p>');
    return info;
  }

  //events
  $('#submit').click(function() {
      display();
  });
});
