console.log("File 29 - How to clone Array");
console.log("How to concatenate two or more arrays");

let array1 = ["item1", "item2"];
// let array2 = array1;
// let array2 = array1.slice(0);
// let array2 = [].concat(array1);

// Spread Operator
// let array2 = [...array1];

// let array2 = array1.slice(0).concat(["item3", "item4"]);
// let array2 = [].concat(array1, ["item3", "item4"])
// let array2 = [...array1, "item3", "item4"];

let arraynew = ["item3", "item4"];

let array2 = [...array1, ...arraynew];

console.log(array1 === array2);

array1.push("item3");

console.log("Array1: ", array1);
console.log("Array2: ", array2)



