console.log("File 50 - Block Scope vs Function Scope");

// Let and const are block scope
// var is function scope

// {
//     let firstNmae = "santosh";
//     console.log(firstNmae);
// }
// {
//     let firstNmae = "shivam";
//     console.log(firstNmae);
// }

// {
//     const firstNmae = "santosh";
//     console.log(firstNmae);
// }
// {
//     const firstNmae = "shivam";
//     console.log(firstNmae);
// }

// {
//     var firstName = "Sona";
// }
// console.log(firstName);

function myApp(){
    if(true){
        let firstName = "santosh";
        console.log(firstName);
    }
    console.log(firstName);
}
myApp();