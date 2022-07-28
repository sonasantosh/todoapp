console.log("File 56 - forEach, map, filter, reduce - Higher Order Array Method");

// forEach
const numbers = [1,2,3,4,5];

// function printIndexValue(value, index){
//     console.log(index, value);
// }

// for(let i = 0; i < numbers.length; i++){
//     printIndexValue(i, numbers[i]);
// }

// numbers.forEach((value, index)=>{
//     console.log(index, value)
// });

numbers.forEach((value, index)=>{
    console.log("On Index ", index, value*2);
});