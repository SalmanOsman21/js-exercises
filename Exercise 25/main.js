const numbers = [1, 2, 3];
const allNumbers = [...numbers, 4, 5, 6];

console.log(allNumbers);

function multiply(...numbers) {
  return numbers.reduce((total, num) => total * num);
}

console.log(multiply(4, 5));
console.log(multiply(6, 3));
