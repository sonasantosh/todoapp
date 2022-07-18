console.log("File 45 - Function Expression");

const singHBD = function(){
    console.log("Happy Birth day to you santosh");
}
singHBD();

const twoPlusFour = function(){
    console.log(2+4);
}
twoPlusFour();


// Add Two Number Function
const addTwoNumber = function(num1, num2){
    return num1 + num2;
}
addTwoNumber();

// Check Number is Even or Odd 
const isEven = function(num){
    // return (num % 2 === 0)? true : false;
    return num % 2 === 0;
}
let checkEven = isEven(3);
console.log(checkEven);

const firstChar = function(name){
    return name[0];
}
console.log(firstChar("Santosh"));

const findTarget = function (array, target){
    for(let i in array){
        if(array[i] === target){
            return i;
        }
    }
    return -1;
}
console.log(findTarget([4, 5, 6, 7, 8], 8));







