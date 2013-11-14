describe('isInteger', function() {
  it("Checks that given number is an integer", function() {
    isInteger(7.1).should.equal(false);
  });

  it("Checks that given number is an integer", function() {
    isInteger(7.0).should.equal(true);
  });
});

describe('factor', function() {
  it("Factors the number", function() {
    factor(7).should.equal(5040);
  }); 
});
