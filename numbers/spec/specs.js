describe('isValid', function() {
  it("checks that the input is a number", function() {
    isValid("dog").should.equal(false);
  });

  it("checks that the number is less than 21", function() {
    isValid(1234567890123456789012).should.equal(false);
  });

  it("checks that the number is valid for conversion", function() {
    isValid(1234567890).should.equal(true);
  });
});


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
  it("returns in words any whole multiple of 1,000 to 1 quintillion", function() {
    numberToWords(3000300);
    answer.reverse().join(" ").should.equal("three million three hundred");
    answer = [];
    i = 0;
  });

  // it("returns in words any whole multiple of 1,000 to 1 quintillion", function() {
  //   numberToWords(3000000);
  //   answer.reverse().join(" ").should.equal("three million");
  //   answer = [];
  //   i = 0;
  //  });

  // it("returns in words any number up to, but not inluding 1 sextillion", function() {
  //   numberToWords(999000000000000001111);
  //   answer.reverse().join(" ").should.equal("nine hundred ninety-nine quintillion one thousand one hundred eleven");
  //   answer = [];
  //   i = 1;
  // });
});