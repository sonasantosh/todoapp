console.log("File 57 - Map method");
// Specification of map method (When we use map method function should return result and then store it)

const numbers = [1,2,3,4,5];
const newNumbers = numbers.map((number, index)=>{
    return number * number * index;
});
console.log(newNumbers);

