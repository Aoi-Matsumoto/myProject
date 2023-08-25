const fizzBuzz = (array) => {
  return array.map((el) => {
    if (el % 15 === 0) {
      return "Fizz Buzz";
    } else if (el % 3 === 0) {
      return "Fizz";
    } else if (el % 5 === 0) {
      return "Buzz";
    } else {
      return el;
    }
  });
};

let range = [];
for (i = 0; i < 100; i++) {
  range.push(i);
}

console.log(fizzBuzz(range));
