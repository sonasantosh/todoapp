console.log("File 32 - While loop in array");

const array1 = ["itemOne", "ItemTwo", "itemThree", "itemFour"];
let i = 0;
const array2 = [];
while(i<array1.length){
    console.log(array1[i]);
    array2.push(array1[i].toUpperCase());
    i++;
}
console.log(array2);