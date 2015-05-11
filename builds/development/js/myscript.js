/*
  name: Ray Villalobos
  course name: ICT 4510 Advanced Web Design and Site Management
  date: 05/04/15
*/

$(function() {
  'use strict';

  function http() {
    var data = '';
    var requestObj = {
          type      : 'POST',
          url       : 'process.php',
          data      : $('#myForm').serialize(),
          dataType  : 'json',
          success   : function(response) {
            // console.log(response);
            $.each(response, function(key, value) {
              if (value !== undefined) {
                data += '<p><strong>' + key + '</strong>: ' + value + '</p>';
                console.log(data);
              } // if not undefined
            }); //display(response);
            $('#message').html(data);
          } //success
        }; // requestObj

    $.ajax(requestObj);
  } //http;


  // Form Validation
  $( "#myForm" ).validate({
    submitHandler: function() {
      http();
      //$(form).ajaxSubmit();
    }
  });

  // Tabs
  $( "#tabs" ).tabs();
});
