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
              type      : 'GET',
              url       : '/geo.php',
              data      : $('#mapForm').serialize(),
              dataType  : 'json',
              success   : function(response) {
                console.log(response);

                $("#map").goMap({
                    latitude: response[0],
                    longitude: response[1],
                    zoom: 16
                });


              } //success
            }; // requestObj

        $.ajax(requestObj);
      } //http;


      // Form Validation
      $( "#mapForm" ).on('submit', function(e) {
        e.preventDefault();
        http();
      });


});
