console.log("File 30 - For Loop in Array");

const array1 = ["itemone", "itemtwo", "itemthree", "itemfour"];

// for(let i = 0;  i < array1.length; i++){
//     console.log(i, array1[i], "\n");
// }

// To print in Uppercase
// for(let i = 0; i < array1.length; i++){
//     console.log(array1[i].toUpperCase());
// }

const array2 = [];

// To Store in new array with uppercase
for(let i=0; i<array1.length; i++){
    array2.push(array1[i].toUpperCase());
}
console.log(array2);
