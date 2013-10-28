describe("TRIANGLE", function() {
  describe("inSpector", function() {
    it("is invalid if a triangle is invalid", function() {
      inSpector(1,2,3).should.equal("invalid");
    });

    it("is equilateral if a triangle is equilateral", function() {
      inSpector(4,4,4).should.equal("equilateral");
    });

    it("is true if a triangle is isosceles", function() {
      inSpector(4,4,7).should.equal("isosceles");
    });

    it("is scalene if a triangle is scalene", function() {
      inSpector(4,2,3).should.equal("scalene");
    });
  });
});