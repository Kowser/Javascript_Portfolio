describe("Pig Latin", function() {
  describe("pigLatin", function() {
    it("translates a word starting with a vowel", function() {
      pigLatin("apple").should.equal("appleway");
    });

    it("translates a word starting with a qu", function() {
      pigLatin("quark").should.equal("arkquay");
    });

    it("translates a words starting with multiple consonants", function() {
      pigLatin("schedule").should.equal("eduleschay");
    });

    it("treats hyphenated words as two separate words", function() {
      pigLatin("one-way").should.equal("oneway-ayway");
    });
  });

  describe("translate", function() {
    it("translates an complex multi-word phrase into pig latin", function (){
        phrase = "$ixty-six dollars poorer";
        translate(phrase).should.equal("ixty$ay-ixsay ollarsday oorerpay");
    });
  });
});
