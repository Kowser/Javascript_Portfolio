describe("LEAP YEAR", function() {
  describe("isLeapYear", function() {
    it("is true if a year is divisible by 400", function() {
      isLeapYear(2400).should.equal(true);
    });

    it("if not divisible by 400, checks if it's divisble by 100", function() {
      isLeapYear(2300).should.equal(false);
    });

    it("If not divisible by 100, checks if divisible by 4", function() {
      isLeapYear(2524).should.equal(true);
    });

    it("If not divisible by 4, returns false", function() {
      isLeapYear(2523).should.equal(false);
    });
  });

  describe("isPositiveInteger", function() {
    it("is true if the value is an integer", function() {
      isPositiveInteger("hello").should.equal(false);
    });

    it("determines if the integer is greater than 0", function() {
      isPositiveInteger(-99).should.equal(false);
    });
  });
});