console.log("file 40 - Spread operator");


// const array1 = ["item1", "item2", "item3"];
// const array2 = ["item4", "item5", "item6"]

// // const array3 = [...array1, ...array2, "item7", "item8"]
// const array3 = [..."1234567890"];

// console.log(array3);

const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

const obj2 = {
    key3 : "value3",
    key4 : "value4"
}
const newobj = {...obj1, ...obj2, key5 : "value5", key6 : "value6"}

console.log(newobj);

