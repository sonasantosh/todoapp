console.log("File-51 - Default Parameters");

// function addTwoNum(a, b){
//     if(typeof b === "undefined"){
//         b = 0;
//     }
//     console.log(a, "+", b, "=", a+b);
    
// }

function addTwoNum(a, b = 20){
    console.log(a + b);
}

addTwoNum(10, 20);
addTwoNum(10);