console.log("File 58 - Filter Method");

const numbers = [1,2,3,4,5,6,7,8,9];

const evenNumbers = numbers.filter((number)=>{
    return number % 2 === 0;
});

const oddNumbers = numbers.filter((number)=>{
    return number % 2 !== 0;
});

const evenOrOdd = numbers.map((number)=>{
    return number % 2 === 0 ? `Even Numbers : ${number}` : `Odd Numbers : ${number}`;
});

console.log("Even Numbers : ",evenNumbers);
console.log("Odd Numbers : ",oddNumbers);
console.log(evenOrOdd);