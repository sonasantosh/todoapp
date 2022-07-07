// For Loop Example
let i = 0;
let num = 10;
let total = 0;

// We have two way to sum of n Natural numbers
for(i = 0; i <= num; i++){
    console.log(i);
    total = total + i;
}

total = num * (num + 1)/2;

console.log("Sum of all Natutal Numbers upto " + num + " is : " + total);

