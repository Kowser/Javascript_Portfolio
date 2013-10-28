function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
}

function isPositiveInteger(year) {
  if (year % 1 === 0 && year > 0) {
    return true;
  } else {
    return false;
  }
}

$(function() {
  $("form#leapyear").submit(function() {
    var year = parseInt($("input#leapyear").val());
    $("div#leapyear-results").hide().empty().fadeIn(500);

    if (isPositiveInteger(year) && isLeapYear(year)) {
      $("div#leapyear-results").append('<img src="img/success.jpeg"><span> The year <strong>' + year + '</strong> is a leap year!</span>');
    } else if (isPositiveInteger(year) !== true) {
      $("div#leapyear-results").append('<span>ERROR! Try Again.</span>');
    } else {
      $("div#leapyear-results").append('<img src="img/fail.jpeg"><span> The year <strong>' + year + '</strong> is <u>NOT</u> a leap year!</span>');
    }
    $("input#leapyear").val('');
    return false;
  });

  $("#reset").click(function() {
    $("div#leapyear-results").fadeOut(500);
  });
});