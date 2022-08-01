console.log("File 63 - Some Method");

// Check conditions for all elements in an array and return boolen if condition is true for any elements

// const numbers = [1,2,3,4,5,6,7,8,9,0];

// const isEven = numbers.some((number)=>{
//     return number % 2 === 0;
// });

// console.log(isEven);

const products = [
    {productId: 1, productName: "mobile", price: 15000},
    {productId: 2, productName: "LED", price: 25000},
    {productId: 3, productName: "Refridgrator", price: 12000},
    {productId: 4, productName: "Laptop", price: 55000},
];

const checkprice = products.some((product)=>{
    return product.price > 5000;
});

console.log(checkprice);