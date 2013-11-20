function pigLatin(word) {
  var vowels = ["a","e","i","o","u"];
  while ($.inArray(word[0], vowels) === -1) {
    if (word.slice(0,2) === "qu") {
      word = word.slice(2) + "qu";
      break;
    } else {
      word = word.slice(1) + word[0];
      vowels.push("y");
    }
  }
  return word + "ay"
}


function translate(phrase) {
  var phrase = phrase.split(/([\s-_])/).map(function(word) {
    return pigLatin(word);
  });
  return phrase.join("");
}

$(function() {
  $("form#piglatin").submit(function() {
    var phrase = $("input#phrase").val();
    $("div#result").hide().empty().fadeIn(500);
    $("div#result").append("<h4>" + translate(phrase) + "</h4>");
    $("input#phrase").val('');
    return false;
  });

  $("#reset").click(function() {
    $("div#result").fadeOut();
  });
});
