function pigLatin(word) {
  if (word.match(/-/)) {
    var word = word.split('-').map(function(word) {
      return pigLatin(word);
    });
    return word.join('-');
  } else if (word.match(/^[aeiou]/i)) {
    return word + 'way';
  } else if (word.match(/^[(qu)]/i)) {
    return word.slice(2) + 'quay';
  } else {
    return word.replace(/^[^aeiouy]+/i,'') + word.match(/^[^aeiouy]+/i) + 'ay';
  }
}

function translate(phrase) {
  var phrase = phrase.split(' ').map(function(word) {
    return pigLatin(word);
  });
  return phrase.join(' ');
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
