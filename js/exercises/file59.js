console.log("File 59 - Reduce Method");

const numbers = [1,2,3,4,5,6,7,8,9];

// const result = numbers.reduce((a,b)=>{
//     // just for checking the process
//     console.log(a, b);
//     return a + b;
// });

// console.log(result);

const userCart = [
    {priductId: 1, productName: "Mobile", price: 23000},
    {priductId: 2, productName: "LED", price: 15000},
    {priductId: 3, productName: "Computer", price: 53000},
    {priductId: 4, productName: "Refrigrator", price: 18000},
];

const totalAmount = userCart.reduce((accumulator , product)=>{
    return accumulator + product.price;
}, 0);

console.log(totalAmount);