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
  19 : "nineteen"};

var tens = {
  1 : "ten",
  2 : "twenty",
  3 : "thirty",
  4 : "forty",
  5 : "fifty",
  6 : "sixty",
  7 : "seventy",
  8 : "eighty",
  9 : "ninety"};

var scales = {
  1 : "thousand",
  2 : "million",
  3 : "billion",
  4 : "trillion",
  5 : "quadrillion",
  6 : "quintillion",
  7 : "sextillion"};

var answer = [];
var i = 1;

// function numberToWords(number) {
//   if (number === 0 && answer.length === 0) {
//     answer.push("zero");
//   } else if (number === 0) {
//     // Ignores the zero if it is not the corner case (just "zero" by itself)
//   } else if (number < 20) {
//     answer.push(digits[number]);
//   } else if (number < 100) {
//     numberToWords(number % 10);
//     answer.push(tens[parseInt(number/10)]);
//   } else if (number < 1000) {
//     numberToWords(number % 100);
//     answer.push(digits[parseInt(number/100)] + " hundred");
//   } else {
//     numberToWords(number % 1000);
//     answer.push(scales[i]);
//     i++;
//     numberToWords(parseInt(number/1000));
//   }
// }

// ------------------- PRE - REFACTORING

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

function numberToWords(number) {
  if (number < 1000) {
    lessThousand(number);
  } else {
    lessThousand(number % 1000);
    answer.push(scales[i]);
    i++;
    numberToWords(parseInt(number/1000));
  }
}

$(function() {
  $("form#number").submit(function() {
    answer = [];
    i = 1;
    var number = parseInt($("input#number").val());
    if (number.toString().length > 21 || !$.isNumeric(number)) {
      $("div#result").hide().empty().fadeIn(500);
      $("div#result").append("<b>COMPUTER:</b> That number exceeds my capacity.");
    } else {      
      numberToWords(number);
      $("div#result").hide().empty().fadeIn(500);
      $("div#result").append(answer.reverse().join(" "));
    }
    $("input#number").val('');
    return false;
  });

  $("#reset").click(function() {
    $("div#result").fadeOut();
  });
});
