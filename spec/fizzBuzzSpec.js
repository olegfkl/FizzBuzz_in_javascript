
describe("fizzBuzz", function() {

  it("Should Fizz when passed a number multiple of 3", function() {
    expect(fizzbuzz(3)).toEqual('Fizz');
  });
  it("Should Buzz when passed a number multiple of 5", function() {
    expect(fizzbuzz(5)).toEqual('Buzz');
  });
  it("Should return FizzBuzz when passed a number multiple of 3 && 5", function() {
    expect(fizzbuzz(15)).toEqual('FizzBuzz');
  });
  it(" Should return number if not devided by 5 or 3", function(){
    expect(fizzbuzz(7)).toEqual(7);
  });
});
