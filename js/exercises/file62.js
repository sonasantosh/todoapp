console.log("File 62 - Every Method");
// Check a condition for all elements in an array
const numbers = [1,2,3,4,5,6,7,8,9,0];

let isEven = numbers.every((number)=>{ return number % 2 === 0})

console.log(isEven);