/* 
  name: Ray Villalobos
  course name: ICT 4510 Advanced Web Design and Site Management
  date: 04/13/15
*/

$(function() {
  'use strict';

  function getUserInfo() {
    var formInfo = {};
    var myInfoArray = [];
    formInfo.firstname = document.getElementById('firstname').value;
    formInfo.lastname = document.getElementById('lastname').value;
    formInfo.email = document.getElementById('email').value;
    formInfo.phone = document.getElementById('phone').value;
    myInfoArray = validate(formInfo);
    console.log(myInfoArray.length);
    if (myInfoArray.length === 0) {
      myInfoArray.push('Thank you ' + formInfo.firstname);
    }
    return myInfoArray;
  }

  function validate(myObject) {
    var myErrors = [];
    if (myObject.firstname.length === 0) {
      myErrors.push('Please enter your first name');
    }
    if (myObject.lastname.length === 0) {
      myErrors.push('Please enter your last name');
    }
    if (myObject.email.length === 0) {
      myErrors.push('Please enter your email');
    }
    return myErrors;
  }

  function display() {
    var info = getUserInfo();
    console.log(info);
    for (var i = 0; i < info.length; i++) {
      var myNode = document.getElementById('message');
      var myElement = document.createElement('p');
      var myText = document.createTextNode(info[i]);
      myElement.appendChild(myText);
      myNode.appendChild(myElement);
    }
    return info;
  }

  //events
  document.forms.myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    display();
  }, false);
});
