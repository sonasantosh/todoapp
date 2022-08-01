console.log("File 60 - Sort Method");

const numbers = [1, 20, 44, 52, 25, 37, 90, 18, 98, 202];

const [...sorted] = numbers.sort();

const  [...ascendingNumbers] = numbers.sort((a,b)=>{
    return a - b;
});

const [...descendingNumbers] = numbers.sort((a,b)=>{
    return b - a;
});

console.log("Sorted as a String like dictionary : ", sorted);
console.log("Sorted Ascending Order : ", ascendingNumbers);
console.log("Sorted Descending Order : ", descendingNumbers);

