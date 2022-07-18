console.log("File 48 - Function inside Function");

const app = () => {
    const myFunc = () => {
        console.log("Hello From myFunc");
    }

    const addTwoNumber = (num1, num2) => {
        return num1 + num2;
    }

    console.log("Inside App");
    myFunc();
    console.log(addTwoNumber(10, 20));
}
app();