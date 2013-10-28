describe("Pig Latin", function() {
  describe("pigLatin", function() {
    it("translates a word starting with a vowel", function() {
      pigLatin("apple").should.equal("appleay");
    });

    it("translates a word starting with a qu", function() {
      pigLatin("quark").should.equal("arkquay");
    });

    it("translates a words starting with multiple consonants", function() {
      pigLatin("schedule").should.equal("eduleschay");
    });

    it("ignores any non alpha numberic characters", function() {
      pigLatin("-").should.equal("-");
    });
  });

  describe("translate", function() {
    it("translates an entire phrase into pig latin", function (){
        phrase = "$ixty-six dollars poorer";
        translate(phrase).should.equal("ixty$ay-ixsay ollarsday oorerpay");
    });
  });
});
