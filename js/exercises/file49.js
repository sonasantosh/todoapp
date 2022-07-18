console.log("File 49 - Laxical Scope");


const myVar = "value1";

function myApp(){


    function myFunc(){
        // const myVar = "value2";
        const myFunc2 = () => {
            console.log("Inside myFunc", myVar);
        }
        myFunc2();
    }

    const myFunc2 = function(){}

    const myFunc3 = () => {}

    console.log(myVar);

    myFunc();
}
myApp();