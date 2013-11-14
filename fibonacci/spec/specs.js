describe('FIBONACCI', function() {
  it("has a starting array with 2 numbers", function() {
    sequence.length.should.equal(2);
  }); 

  describe('isInteger', function() {
    it("Checks that input is an integer", function() {
      isInteger("dog").should.equal(false);
    });

    it("Checks that given number is an integer", function() {
      isInteger(7.1).should.equal(false);
    });

    it("Checks that given number is an integer", function() {
      isInteger(7.0).should.equal(true);
    });
  });

	describe("fibonacci", function() {
		it("returns the fibonacci number at a given index", function() {
			fibonacci(5).should.equal(3);
		});
	});

  describe("fibonacciNR", function() {
    it("returns the fibonacci number at a given index", function() {
      fibonacciNR(6).should.equal(5);
    });
  });
});