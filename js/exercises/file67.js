console.log("File 68 - Set");

// Set is also iterable
// store data
// set also have its own methods
// no index based access
// order is not guaranteed
// unique items only (no duplicates allowed)

// const numbers = new Set([1,2,3,4,5,6,7,8,9,0]);
// console.log(numbers);

// for(let number of numbers){
//     console.log(number);
// }

// We can not access with index
// console.log(numbers[0]);
// const items = ["item1", "item2", "item3", "item4"];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(items);
// numbers.add([items]);
// console.log(numbers);

// To check the number existance
// if(numbers.has(1)){
//     console.log("1 is present in the numbers");
// }
// else{
//     console.log("1 is not present in the numbers");
// }
// console.log(numbers.has(1));

const myarray = [1,2,3,4,5,6,2,5,3,4,2,5,3];
console.log(myarray);
const ids = new Set(myarray);
console.log(ids);
console.log("length of ids ", ids.size);
let length = 0;
for(let id of ids){
    length++;
}
console.log(length);