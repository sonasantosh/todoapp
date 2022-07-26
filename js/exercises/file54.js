console.log("File 54 - Callback Function");

function myFunc(a){
    console.log("Hello World");
    console.log(a)
}
function myNewFunc(){
    console.log("New Func");
}

myNewFunc(myFunc);
// let a = k