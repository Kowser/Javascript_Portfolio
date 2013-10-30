$(function() {
  $('ul#legislators').on('click', 'li.expandable', function() {
    $(this).next().slideToggle();
  });

  $("form#get-locale").submit(function() {
    $("ul#legislators").empty();

    var locale = encodeURI($("input#locale").val());
    var lat = [];
    var lng = [];
    var counter = 0;

    // obtain lat & long from Google to send to sunlight API
    $.get("http://maps.googleapis.com/maps/api/geocode/json?address=" + locale + "&sensor=false", function(responseText) {
      responseText.results.forEach(function(object) {
        lat.push(object.geometry.location.lat);
        lng.push(object.geometry.location.lng);
      });

      for (var i = 0; i < lat.length; i++) {
        $.get("http://congress.api.sunlightfoundation.com/legislators/locate?apikey=ba4d76d2f7ab45a5a08a28f3b7b42a94&latitude=" + lat[i] + "&longitude=" + lng[i], function(responseText) {          
          responseText.results.forEach(function(legislator) {
            $("ul#legislators").append("<li class='expandable'>" + legislator.first_name + " " + legislator.last_name + " (" + legislator.state + ")</li>").append("<ul id='"  + counter + "'></ul>");
            $("ul#" + counter).append("<li>(" + legislator.chamber + ")</li>");
            counter++;
          });
        });
        console.log(lat[i]);
        console.log(lng[i]);
      }
    });

  return false;
  });

  $("form#get-hearing").submit(function() {
    $("ul#hearings").empty();

    var hearing = encodeURI($("input#hearing").val());

    $.get("http://congress.api.sunlightfoundation.com/hearings?apikey=ba4d76d2f7ab45a5a08a28f3b7b42a94&query=" + hearing, function(responseText) {
      responseText.results.forEach(function(hearing) {
        if (hearing.url === undefined) {
           $("ul#hearings").append("<li>" + hearing.description + "</li>");

        } else {
          $("ul#hearings").append("<li><a href='" + hearing.url + "'>" + hearing.description + "</a></li>");
        }
      });
    });
  return false;
  });
});
