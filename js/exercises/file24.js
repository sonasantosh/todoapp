console.log("Break and Continue Statement");

let i = 0;
let num = 10;

for(; i <= num; i++){
    if(i % 2 !== 0){
        continue;
    }
    console.log(i);
}