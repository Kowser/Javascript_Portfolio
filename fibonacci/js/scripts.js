var sequence = [0,1];
function isInteger(index) {
  if ($.isNumeric(index) && index > 0 && index % 1 === 0) {
    return true;
  } else {
    return false;
  }
}

function fibonacci(index) {
	index -= 1;
  if (index >= 2) {
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    fibonacci(index);
  }
  return sequence[index];
}

// fibonacci w/o recursion
function fibonacciNR(index) {
  for (var i = index - 2; i > 0; i--) {
    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
  }
  return sequence[index - 1];
}

$(function() {
  $("form#fibonacci").submit(function() {
    var index = $("input#index").val();
     $("div#result").hide().fadeIn(500);

    if (isInteger(index)) {   
      $("div#result").empty().append("The fibonacci number at index <strong>" + index + "</strong> is <strong>" + fibonacci(index) + "</strong>.");      
    } else {
      $("div#result").empty().append("That is <strong>not</strong> a valid index (<strong>Integers only</strong>)!");
    }

    $("input#index").val('');
    return false;
  });

  $("#reset").click(function() {
    $("div#result").fadeOut();
  });
});