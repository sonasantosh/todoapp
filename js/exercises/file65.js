console.log("File 65 - Splice Method");
// start, delete, insert
const array1 = ["item1", "item2", "item3", "item4", "item5"];

// delete
// const deletedItems = array1.splice(1, 3);

// console.log(deletedItems);

// Insert
// array1.splice(1, 0, "Inserted Item1");
// console.log(array1);

// Insert and Delete simultaneously
const deletedItem = array1.splice(1,1,"inserted1","inserted2","inserted3","inserted4","inserted5");
console.log(deletedItem);
console.log(array1);