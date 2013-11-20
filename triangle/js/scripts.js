function inSpector(side1, side2, side3) {
  var hypotenuse = Math.max(side1,side2,side3);
  var legA = Math.min(side1,side2,side3);
  var legB = side1 + side2 + side3 - hypotenuse - legA;

  if ((hypotenuse >= legA + legB) || !$.isNumeric(side1 + side2 + side3)) {
    return "invalid";
  } else if (side1 === side2 && side2 === side3) {
    return "equilateral";
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    return "isosceles";
  } else if (Math.pow(hypotenuse,2) === Math.pow(legB,2) + Math.pow(legA,2)) {
    return "a right triangle";
  } else {
    return "scalene";
  }
}

$(function() {
  $("form#triangle").submit(function() {
    var side1 = parseFloat($("input#side1").val());
    var side2 = parseFloat($("input#side2").val());
    var side3 = parseFloat($("input#side3").val());

    $("div#triangle-results").empty().append("<h4>Your triangle is " + inSpector(side1,side2,side3) + ".</h4>");
    $("input#side1").val('');
    $("input#side2").val('');
    $("input#side3").val('');
  return false;
  });

  $("#reset").click(function() {
    $("div#triangle-results").fadeOut();
  });
});