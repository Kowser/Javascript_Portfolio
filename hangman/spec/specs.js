describe("Game", function() {
  describe("initialize", function() {
    it("has the hidden word's letter array", function() {
      var game = Object.create(Game);
      game.initialize();
      game.hiddenWord.should.eql([]);
    });

    it("has the displayed word's letter array", function() {
      var game = Object.create(Game);
      game.initialize();
      game.displayWord.should.eql([]);
    });

    it("has an alphabet array for valid guesses", function() {
      var game = Object.create(Game);
      game.initialize();
      game.alphabet.length.should.equal(26); // remainingLetters
    });

    it("has an array of wrong guessed letters", function() {
      var game = Object.create(Game);
      game.initialize();
      game.wrongLetters.length.should.equal(0);
    });
  });

  describe("setWord", function() {
    it("sets the hidden word array to letters", function() {
      var game = Object.create(Game);
      game.initialize();
      game.setWord("help");
      game.hiddenWord.should.eql(["h", "e", "l", "p"]);
    });

    it("sets the displayed word array to blank spaces", function() {
      var game = Object.create(Game);
      game.initialize();
      game.setWord("help");
      game.displayWord[3].should.equal("_"); // game.displayWord.should.eql(["_", "_", "_", "_"]);
    });
  });

  describe("isValid", function() {
    it("returns true if a guess is valid", function() {
      var game = Object.create(Game);
      game.initialize(); // remove
      game.isValid("f").should.be.true;
    });

    it("returns false if a guess is invalid", function() {
      var game = Object.create(Game);
      game.initialize();
      game.isValid("fa").should.be.false;
    });

    it("returns true for uppercase guesses", function() {
      var game = Object.create(Game);
      game.initialize();
      game.isValid("F").should.be.true;
    });
  });

  describe("makeGuess", function() {
    it("removes the letter from the available alphabet (any guess)",function() {
      var game = Object.create(Game);
      game.initialize();
      game.makeGuess("q");
      game.alphabet.length.should.equal(25);
    });

    it("adds a letter to the array of wrong letters (incorrect guess)", function() {
      var game = Object.create(Game);
      game.initialize();
      game.setWord("dog");
      game.makeGuess("p");
      game.wrongLetters.should.eql(["p"]);
    });

    it("adds a letter to the displayed word array (correct guess)", function() {
      var game = Object.create(Game);
      game.initialize();
      game.setWord("apple");
      game.makeGuess("a");
      game.displayWord.should.eql(["a", "_", "_", "_", "_"]);
    });

    it("adds multiple letters to the displayed word array (correct guess)", function() {
      var game = Object.create(Game);
      game.initialize();
      game.setWord("apple");
      game.makeGuess("p");
      game.displayWord.should.eql(["_", "p", "p", "_", "_"]);
    });
  });

  // describe("isGameOver", function() {
  //   it("returns true if the user has made six bad guesses", function() {
  //     var game = Object.create(Game);
  //     game.initialize();
  //     for (var i = 0; i < 6; i++) {
  //       game.makeGuess("q");
  //     }
  //     game.isGameOver().should.be.true;
  //   });

  //   it("returns true if the user has guessed the full word", function() {
  //     var game = Object.create(Game);
  //     game.initialize();
  //     game.setWord("cat");
  //     game.makeGuess("c");
  //     game.makeGuess("a");
  //     game.makeGuess("t");
  //     game.isGameOver().should.be.true;
  //   });

  //   it("returns false if the user has made less than six bad guesses", function() {
  //     var game = Object.create(Game);
  //     game.initialize();
  //     game.setWord("cat");
  //     game.makeGuess("p");
  //     game.isGameOver().should.be.false;
  //   });

  //   it("returns false if the user has not yet guessed the full word", function() {
  //     var game = Object.create(Game);
  //     game.initialize();
  //     game.setWord("cat");
  //     game.makeGuess("c");
  //     game.makeGuess("t");
  //     game.isGameOver().should.be.false;
  //   });
  // });
});