console.log("File 44 - Functions");

// console.log("Happy birthday to you santosh");

// console.log("Happy birthday to you santosh");

// function singHBD(){
//     console.log("Happy Birth day to you santosh");
// }
// singHBD();

// function twoPlusFour(){
//     console.log(2+4);
// }
// twoPlusFour();

// function twoPlusFour(){
//     return 2+4;
// }
// let returnedValue = twoPlusFour();
// console.log(returnedValue);


// Add Two Number Function
// function addTwoNumber(num1, num2){
//     return num1 + num2;
// }
// let sum = addTwoNumber(10, 20);

// console.log(sum);

// Check Number is Even or Odd 
// function isEven(num){
//     // return (num % 2 === 0)? true : false;
//     return num % 2 === 0;
// }

// let checkEven = isEven(3);
// console.log(checkEven);

// function firstChar(name){
//     return name[0];
// }
// console.log(firstChar("Santosh"));

function findTarget(array, target){
    for(let i in array){
        if(array[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(findTarget([4, 5, 6, 7, 8], 8));







