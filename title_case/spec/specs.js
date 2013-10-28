describe("Title Case TDD", function() {
  describe("isException", function() {
    it("determines if a word is an exception", function() {
      var word = "into";
      isException(word).should.be.false;
    });
  });

  describe("titleWord", function() {
    it("will Title case the word", function() {
      var word = "word";
      titleWord(word).should.equal("Word");
    });
  });

  describe("titleCase", function() {
    it("will convert a phrase into appropriate Title Case", function() {
      phrase = "$ixty-SIX DOGS AND six CATs";
      phrase = phrase.toLowerCase().split(/([\s-_])/);
      titleCase(phrase).should.equal("$ixty-Six Dogs and Six Cats")
    });
  });

});