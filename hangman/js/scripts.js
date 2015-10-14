var Game = {
  initialize: function() {
    this.hiddenWord = [];
    this.displayWord = [];
    this.alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    this.wrongLetters = [];
  },

  setWord: function(word) {
    this.hiddenWord = word.split("");

    for (var i = 0; i < word.length; i++) {
      if ($.inArray(this.hiddenWord[i], this.alphabet) !== -1) {
        this.displayWord.push("_");
      } else {
        this.displayWord.push(this.hiddenWord[i]);
      }
    }
  },  

  isValid: function(letter) {
    return ($.inArray(letter.toLowerCase(), this.alphabet) !== -1);
  },

  makeGuess: function(letter) {
    letter = letter.toLowerCase();
    this.alphabet.splice(this.alphabet.indexOf(letter), 1);

    if ($.inArray(letter, this.hiddenWord) !== -1) {
      for (var i = 0; i < this.hiddenWord.length; i++) {
        this.displayWord[i] = (this.hiddenWord[i] !== letter) ? this.displayWord[i] : letter;
      }
    } else {
      this.wrongLetters.push(letter);
    }
  }
}

$(function() {
  var game = Object.create(Game);
  $("div#game-modal").modal("show");

  function refresh() {
    var newClass = {
      0: "zero",
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six"
    };

    $("div#hangman").removeClass().addClass(newClass[game.wrongLetters.length]);
    $("#display-word").empty().append("<h2>" + game.displayWord.join(" ") + "</h2>");
    $("#wrong-letters").empty().append("<h4>MIA Letters:&nbsp;&nbsp;&nbsp;" + game.wrongLetters.join(", ") + "</h4>");
  }

  function endGame() {
    var word = game.hiddenWord.join("");
    if (game.wrongLetters.length === 6) {
      $("h3").empty().append("Game Over Man!");
      $("div.modal-body").empty().append("<img src='img/hangman.png'></img><p>You were defeated by <strong><u>" + word.slice(0, 1).toUpperCase() + word.slice(1) + "</u></strong>! Better luck next life&hellip;</p>");
      $("button#start").empty().append("Start!");
      $("div#game-modal").modal("show");
      
    } else if ($.inArray("_", game.displayWord) === -1) { //push into model
      $("h3").empty().append("Victory!");
      $("div.modal-body").empty().append("<img src='img/hangman.png'></img><p>Congratulations! You live to fight another word!</p>");
      $("button#start").empty().append("Play Again");
      $("div#game-modal").modal("show");
    }
  }

  function getWord() {
    $("div.modal-body").empty().append(
      "<img src='img/hangman.png'></img>" + 
      "<div class='progress progress-striped active'>" + 
        "<div class='bar bar-danger' style='width: 30%;'></div>" +
      "</div>" + 
      "<p class='text-center'>Building word&hellip;</p>");
    // $.get("http://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=2&maxDictionaryCount=-1&minLength=7&maxLength=13&api_key=4b252ec9e95c73764310606cd1003aaa24e8c86557b1de9d2", function(responseText) {
      game.setWord("randomization"); // TESTING LINE, unhide for test purposes
      // game.setWord(responseText.word.toLowerCase()); // hide during test purposes
      setTimeout(function() {
        $("div.modal-body").children("p").empty().append("Setting word&hellip;");
        $("div.progress").empty().append("<div class='bar bar-danger' style='width: 60%;'></div>");
        setTimeout(function() {
          $("div.modal-body").children("p").empty().append("Reticulating Splines&hellip;");
          $("div.progress").empty().append("<div class='bar bar-danger' style='width: 85%;'></div>");
          setTimeout(function() {
            $("#game-modal").modal("hide");
            $("button#start").show();
            refresh();
          }, 600);
        }, 600);
      }, 600);
    // });
  }
      
  $("button#start").click(function() {
    $("button#start").hide();
    game.initialize();
    getWord();
  });

  $("#guess-form").submit(function() {
    var letter = $("input#letter").val();
    $("input#letter").val("");
    $("#error").hide().empty().fadeIn(500);

    if (game.isValid(letter)) {
      game.makeGuess(letter);
      refresh();
      endGame();
    } else {
      $("#error").append("<h4>404: Letter not valid</h4><h5>Please try another letter.</h5>");
    }
    return false;
  });
});