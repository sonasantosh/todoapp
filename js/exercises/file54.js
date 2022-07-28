// A Higher Order Function
console.log("File 54 - Callback Function");

function myFunc2(){
    const data = {
        firstName: "santosh",
        age: 29
    }
    return data;
}

function myFunc(Callback){
    console.log("I am myFunc");
    let myData = Callback();
    console.log(myData.firstName);
    console.log(myData.age);
}

myFunc(myFunc2);
