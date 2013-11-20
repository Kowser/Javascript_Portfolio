var digits = {
  1 : "one",
  2 : "two",
  3 : "three",
  4 : "four",
  5 : "five",
  6 : "six",
  7 : "seven",
  8 : "eight",
  9 : "nine",
  10 : "ten",
  11 : "eleven",
  12 : "twelve",
  13 : "thirteen",
  14 : "fourteen",
  15 : "fifteen",
  16 : "sixteen",
  17 : "seventeen",
  18 : "eighteen",
  19 : "nineteen"
};

var tens = {
  1 : "ten",
  2 : "twenty",
  3 : "thirty",
  4 : "forty",
  5 : "fifty",
  6 : "sixty",
  7 : "seventy",
  8 : "eighty",
  9 : "ninety"
};

var scales = {
  1 : "thousand",
  2 : "million",
  3 : "billion",
  4 : "trillion",
  5 : "quadrillion",
  6 : "quintillion",
  7 : "sextillion"
};

var answer = [];
var i = 0
var addScales = false

function isValid(number) {
  if ($.isNumeric(number) & number.toString().length <= 21) {
    return true;
  } else {
    return false;
  }
}

function lessTwenty(number) {
  if (number !== 0) {
  answer.push(digits[number]);
  }
}

function lessHundred(number) {
  if (number < 20) {
    lessTwenty(number);
  } else if (number % 10 !== 0) {
    answer.push(tens[parseInt(number/10)] + "-" + digits[number % 10]);
  } else {
    answer.push(tens[number / 10]);
  }
}

function lessThousand(number) {
  if (number < 100) {
    lessHundred(number);
  } else if (number % 100 !== 0) {
    lessHundred(number % 100);
    answer.push(digits[parseInt(number/100)] + " hundred");
  } else {
    answer.push(digits[parseInt(number/100)] + " hundred");
  }
}

function pushScales() {
  answer.push(scales[i]);
  addScales = false;
}

function numberToWords(number) {
  if (number < 1000) {
    if (addScales === true) { pushScales(); }
    lessThousand(number);
  } else if (number % 1000 === 0) {
    addScales = true
    i++
    numberToWords(parseInt(number/1000));
  } else {
    if (addScales === true) { pushScales(); }
    lessThousand(number % 1000);
    addScales = true
    i++
    numberToWords(parseInt(number/1000));
  }
}

$(function() {
  $("form#number").submit(function() {
    answer = [];
    i = 1;
    var number = parseInt($("input#number").val());

    $("div#result").hide().empty().fadeIn(500);
    if (isValid) {
      numberToWords(number);
      $("div#result").append(answer.reverse().join(" "));
    } else {      
      $("div#result").append("<b>AI:</b> Surely such a number can never be...");
    }
    $("input#number").val('');
    return false;
  });

  $("#reset").click(function() {
    $("div#result").fadeOut();
  });
});
