console.log("File 46 - Arrow Function");

const testArrowFunction = ()=>{
    console.log("tesing arrow function");
}
testArrowFunction();

const singHBD = () => {
    console.log("Happy Birth day to you santosh");
}
singHBD();

// Two plus four function
const twoPlusFour = ()=> {
    console.log(2+4);
}
twoPlusFour();

// Add Two Number Function
const addTwoNumber = (num1, num2) => {
    return num1 + num2;
}
addTwoNumber();

// Check Number is Even or Odd 
const isEven = num => {
    return num % 2 === 0;
}
let checkEven = isEven(4);
console.log(checkEven);

const firstChar = name => {
    return name[0];
}
console.log(firstChar("Santosh"));

const findTarget = (array, target) => {
    for(let i in array){
        if(array[i] === target){
            return i;
        }
    }
    return -1;
}
console.log(findTarget([4, 5, 6, 7, 8], 8));

