describe('lessTwenty', function() {
 it("returns in words any number less than 20", function () {
    lessTwenty(17);
    answer.join(" ").should.equal("seventeen");
    answer = [];
  });
});

describe('lessHundred', function() {
  it("returns in words any whole ten number between 20 & 99", function() {
    lessHundred(20);
    answer.join(" ").should.equal("twenty");
    answer = [];
  });
  it("returns in words any number between 20 & 99", function() {
    lessHundred(33);
    answer.join(" ").should.equal("thirty-three");
    answer = [];
  }); 
});

describe('lessThousand', function() {
  it("returns in words any whole hundred number less than 1,000", function() {
    lessThousand(300);
    answer.reverse().join(" ").should.equal("three hundred");
    answer = [];
  });
  it("returns in words any number less than 1,000", function() {
    lessThousand(333);
    answer.reverse().join(" ").should.equal("three hundred thirty-three");
    answer = [];
  });
});

describe('numberToWords', function() {
  it("returns in words any whole multiple of 1,000 to 1 septillion", function() {
    numberToWords(3000);
    answer.reverse().join(" ").should.equal("three thousand");
    answer = [];
    i = 1;
  });
  it("returns in words any number up to 1 septillion", function() {
    numberToWords(123456);
    answer.reverse().join(" ").should.equal("one hundred twenty-three thousand four hundred fifty-six");
    answer = [];
    i = 1;
  });
});