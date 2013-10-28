var sequence = [0,1];
function fibonacci(index) {
	index -= 1;

  if (index >= 2) {
    sequence.push(sequence[sequence.length - 2] + sequence[sequence.length - 1]);
    fibonacci(index);
  }
  return sequence[index];
}

$(function() {
  $("form#fibonacci").submit(function() {
    var index = $("input#index").val();
     $("div#result").hide().fadeIn(500);

    if (!$.isNumeric(index) || index <= 0 || index % 1 > 0) {   
      $("div#result").empty().append("That is <strong>not</strong> a valid index (<strong>Integers only</strong>)!");
    } else {
      $("div#result").empty().append("The fibonacci number at index <strong>" + index + "</strong> is <strong>" + fibonacci(index) + "</strong>.");
    }

    $("input#index").val('');
    return false;
  });

  $("#reset").click(function() {
    $("div#result").fadeOut();
  });
});