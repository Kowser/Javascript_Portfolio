function isException(word) {
  var exceptions = ["a","an","as","and","at","but","by","for","from","if","in","into","nor","of","or","per","the","this","to","with"];
  return exceptions.every(function(exception) {
  	return word !== exception;
  });
}

function titleWord(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
}

function titleCase(phrase) {
	for (var i = 1; i <= phrase.length; i++) {
		console.log(phrase);
		if (i === 1 || i === phrase.length) {
			phrase.push(titleWord(phrase.shift()));
		} else if (!isException(phrase[0])) {
			phrase.push(phrase.shift());
		} else {
			phrase.push(titleWord(phrase.shift()));
		}
	}
	return phrase.join("");
}

$(function() {
  $("form#titleCase").submit(function() {
    var phrase = $("input#phrase").val().toLowerCase().split(/([\s-_])/);
		$("div#result").hide().empty().fadeIn(500);
		$("div#result").append("<h4>" + titleCase(phrase) + "</h4>");
    $("input#phrase").val('');
    return false;
  });

  $("#reset").click(function() {
    $("div#result").fadeOut();
  });
});