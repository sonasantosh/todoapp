console.log("File 52 - Rest Parameter");

// function myFunc(a,b,c, ...d){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
//     console.log(`d is ${d}`);
//     console.log("d is ", d);
// }
// myFunc(1,2,3,4,5,6,7,8);


// Sum of all numbers with the help of rest parameter
let total = 0;
function sumAllNum(...nums){
    for(let num of nums){
        total += num;
    }
    return total;
}
let sum = sumAllNum(1,2,3,4,5,6,7,8,9);
console.log(sum);