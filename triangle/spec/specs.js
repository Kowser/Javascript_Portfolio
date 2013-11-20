describe("TRIANGLE", function() {
  describe("inSpector", function() {
    it("returns 'invalid' if a triangle is invalid", function() {
      inSpector(1,2,3).should.equal('invalid');
    });

    it("return 'equilateral' if a triangle is equilateral", function() {
      inSpector(4,4,4).should.equal('equilateral');
    });

    it("returns 'isosceles' if a triangle is isosceles", function() {
      inSpector(4,4,7).should.equal('isosceles');
    });

    it("returns 'a right trianle' if a triangle is a right triangle", function() {
      inSpector(5,4,3).should.equal('a right triangle');
    });

    it("returns 'scalene' if a triangle is scalene", function() {
      inSpector(4,2,3).should.equal('scalene');
    });
  });
});