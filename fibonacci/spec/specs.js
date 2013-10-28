describe('FIBONACCI', function() {
	describe("fibonacci", function() {
		it("returns the fibonacci number at a given index", function() {
			fibonacci(5).should.equal(3);
		});
	});
  it("has a starting array with 2 numbers", function() {
    sequence.length.should.equal(2);
  }); 
});