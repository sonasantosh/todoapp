// A Higher Order Function
console.log("File 55 - Function Returning Function");

function myFunc(){
    console.log("I am myFunc");
}

function myNewFunc(Callback){
    console.log("I am myNewFunc");
    function myInnerFunc(){
        console.log("I am myInnerFunc");
        Callback();
    }
    return myInnerFunc;
}
let getAll = myNewFunc(myFunc);
getAll();