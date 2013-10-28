function inSpector(side1, side2, side3) {
  if (Math.max(side1,side2,side3) * 2 >= side1 + side2 + side3 || !$.isNumeric(side1 + side2 + side3)) {
    return "invalid";
  } else if (side1 === side2 && side2 === side3) {
    return "equilateral";
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    return "isosceles";
  } else {
    return "scalene";
  }
}

$(function() {
  $("form#triangle").submit(function() {
    var side1 = parseFloat($("input#side1").val());
    var side2 = parseFloat($("input#side2").val());
    var side3 = parseFloat($("input#side3").val());

    result = inSpector(side1,side2,side3);

    if (result === "invalid") {
      $("div#triangle-results").empty().append("<h4>Your triangle is invalid.</h4>");
    } else if (result === "equilateral") {
      $("div#triangle-results").empty().append("<h4>Your triangle is equilateral.</h4>");
    } else if (result === "isosceles") {
      $("div#triangle-results").empty().append("<h4>Your triangle is isosceles.</h4>");
    } else {
      $("div#triangle-results").empty().append("<h4>Your triangle is scalene.</h4>");
    }

    ($("input#side1").val(''));
    ($("input#side2").val(''));
    ($("input#side3").val(''));
  return false;
  });

  $("#reset").click(function() {
    $("div#triangle-results").fadeOut();
  });
});