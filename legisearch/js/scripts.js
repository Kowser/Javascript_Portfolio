function isBlank(query) {
  if (query === undefined) {
    return '--';
  } else {
    return query;
  }
}

$(function() {
// BEGIN ZIP CODE SEARCH
  $('div#legislators').on('click', 'tr.expandable', function() {
    $(this).next().slideToggle();
  });

  $("form#get-locale").submit(function() {
    var locale = encodeURI($("input#locale").val());
    $("input#locale").val('')
    var lat = [];
    var lng = [];

    $("div#legislators").empty();
    // obtain lat & long from Google to send to sunlight API, more accurate than Sunlight Zip Code search
    $.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + locale + "&sensor=false", function(responseText) {
      responseText.results.forEach(function(object) {
        lat.push(object.geometry.location.lat);
        lng.push(object.geometry.location.lng);
      });

      $("div#legislators").append(
        "<table class='table table-hover table-condensed table-bordered'><tbody>" +
          "<tr class='success'>" +
            "<td><strong>First Name</strong></td>" +
            "<td><strong>Last Name</strong></td>" +
            "<td><strong>State</strong></td>" +
            "<td><strong>Chamber</strong></td>" +
          "</tr>" +
        "</tbody></table>");

      for (var i = 0; i < lat.length; i++) {
        $.get("https://congress.api.sunlightfoundation.com/legislators/locate?apikey=ba4d76d2f7ab45a5a08a28f3b7b42a94&latitude=" + lat[i] + "&longitude=" + lng[i], function(responseText) {          
          responseText.results.forEach(function(legislator) {
            $("div#legislators").children('table').children('tbody').append(
              "<tr class='expandable'>" +
                "<td>(" + legislator.party + ") " + legislator.first_name + "</td>" +
                "<td>" + legislator.last_name + "</td>" +
                "<td>" + legislator.state + "</td>" +
                "<td>" + legislator.chamber + "</td>" +
              "</tr>" +
              "<tr class='hidden'>" +
                "<td colspan='2'>" +
                  "<strong>Legislator Information</strong>" +
                  "<ul>" +
                    "<li>Birthday: " + legislator.birthday + "</li>" +
                    "<li>Term Begin: " + legislator.term_start + "</li>" +
                    "<li>Term End: " + legislator.term_end + "</li>" +
                  "</ul>" +
                "</td>" +
                "<td colspan='2'>" +
                  "<strong>Contact Information</strong>" +
                  "<ul>" +
                    "<li>(P) " + legislator.phone + "</li>" +
                    "<li>(F) " + legislator.fax + "</li>" +
                    "<li>" + legislator.office + "</li>" +
                    "<li><a href='" + legislator.website + "' target='_blank'>" + legislator.website + "</a></li>" +
                  "</ul>" +
                "</td>" +
              "</tr>"
              );
          });
        });
      }
    });

  return false;
  });

// END ZIP CODE SEARCH
// BEGIN HEARING SEARCH
  $("form#get-hearing").submit(function() {
    var searchTerm = encodeURI($("input#hearing").val());
    $("input#hearing").val('');
    $("ul#hearings").empty();

    $.get("https://congress.api.sunlightfoundation.com/hearings?apikey=ba4d76d2f7ab45a5a08a28f3b7b42a94&query=" + searchTerm).done(function(responseText) {
      responseText.results.forEach(function(hearing) {

        $.get("https://congress.api.sunlightfoundation.com/committees?apikey=ba4d76d2f7ab45a5a08a28f3b7b42a94&committee_id=HSHM").done(function(responseText) {
          responseText.results.forEach(function(committee) {
            $("ul#hearings").append(
              "<hr>" +
              "<strong>" + hearing.description + "</strong>" +
              "<li>Committee: " + isBlank(committee.name) + "</li>" +
              "<li>Chamber: " + isBlank(hearing.chamber) + "</li>" +
              "<li>Address: " + isBlank(committee.address) + "</li>" +
              "<li>Phone: " + isBlank(committee.phone) + "</li>" +
              "<li>Website: " + isBlank(committee.url) + "</li>" +
              "<li>Hearing on: " + isBlank(hearing.occurs_at) + "</li>" +
              "<li>Hearing at: " + isBlank(hearing.room) + "</li>"
            );
            if (hearing.url !== undefined) {
              $("ul#hearings").append("<li><a href='" + hearing.url + "' target='_blank'>Additional Hearing Information</a></li>");
            }
          });
        });
      });
    });

  return false;
  });
// END HEARING SEARCH
});
