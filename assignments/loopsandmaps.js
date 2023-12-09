//Program to double each number in the array [1, 2, 3, 4, 5] using loops and maps

//using loops
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers);

//using maps
const doubledNumbers1 = numbers.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers1);