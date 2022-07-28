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

// numbers.forEach((value, index)=>{
//     console.log("On Index ", index, value*2);
// });

const users = [
    {firstName: "santosh", age: 29, },
    {firstName: "shivam", age: 27, },
    {firstName: "sona", age: 24, },
    {firstName: "amit", age: 22, },
];

// users.forEach((value, index)=>{
//     console.log(value.firstName);
// });

for(let user of users){
    console.log(user.firstName);
}