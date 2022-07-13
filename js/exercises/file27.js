console.log("File 27 - push, pop, unshift and shift methods in array")

const fruits = ["apple", "mango", "orange"];

console.log(fruits);

// // To add an element at the last index of an array used push() method
fruits.push("banana");

console.log(fruits);

// // To remove an element at from the last index of an array used pop() method.
let popedFruit = fruits.pop();

// console.log("Poped Fruit is: ", popedFruit, "\nand the array is", fruits);

// // To add an element from the 0th index of an array used unshift() method
fruits.unshift("banana");
fruits.unshift("grapes");

console.log(fruits);

// // To remove an element from the 0th index of an array used shift() method
console.log(fruits.shift());
console.log(fruits);        




