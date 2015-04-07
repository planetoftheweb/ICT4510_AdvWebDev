/* 
	name: Ray Villalobos
 	course name: ICT 4510 Advanced Web Design and Site Management
 	date: 04/06/15
*/

$(function() {

  "use strict";
  var firstName, lastName, email, phone;

  do {
    firstName = window.prompt("Please enter your first name");
  } while (firstName === '' && firstName === null);

  do {
    lastName = window.prompt("Please enter your last name");
  } while (lastName === '');

  do {
    email = window.prompt("please enter your email address");
  } while (email === '');

  do {
    phone = window.prompt("please enter your phone number");
  } while (phone === '');

  console.log(firstName, lastName, email, phone);
  alert('Thanks for filling out the forms ' + firstName);

  if (phone !== null) {
    alert('We will contact you soon.');
  }
});
