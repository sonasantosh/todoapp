console.log("File 28 - Primitive vs reference data type");

// Primitive Type
let num1 = 10;
let num2 = num1;

console.log("Value of num1 is: ", num1);
console.log("Value of num2 is: ", num2);

num1++;
console.log("After incrementing the value of num1");
console.log("Value of num1 is: ", num1);
console.log("Value of num2 is: ", num2);


// Reference Type

// Array

let array1 = ["item1", "item2"];
let array2 = array1;

console.log("Array1 : ", array1);
console.log("Array2 : ", array2);

array1.push("item3");

console.log("After pushing the item3 in array1");

console.log("Array1 ", array1);
console.log("Array2 ", array2);