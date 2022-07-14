console.log("File 35 - Array Destructuring.");

const array1 = ["item1", "item2", "item3", "item4"];

// let myvar1 = array1[0];
// let myvar2 = array1[1];

// console.log(myvar1, "\n",myvar2);

let [myvar1, myvar2, ...array2] = array1;

console.log(myvar1, myvar2);
console.log(array2);