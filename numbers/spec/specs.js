describe('isValid', function() {
  it("checks that the input is a number", function() {
    isValid("dog").should.equal(false);
  });

  it("checks that the number is less than 21 digits", function() {
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

describe('pushScales', function() {
  it("adds the appropriate scales after 1 or more sets of '000'", function () {
    i = 4;
    pushScales();
    answer.join(" ").should.equal("trillion");
    answer = [];
    i = 0;
  });
});

describe('numberToWords', function() {
  it("returns in words any whole multiple of 1,000", function() {
    numberToWords(3003000);
    answer.reverse().join(" ").should.equal("three million three thousand");
    answer = [];
    i = 0;
  });

  it("returns in words a complex number", function() {
    numberToWords(300130003111);
    answer.reverse().join(" ").should.equal("three hundred billion one hundred thirty million three thousand one hundred eleven");
    answer = [];
    i = 0;
   });
});