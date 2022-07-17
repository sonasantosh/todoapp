console.log("File 42 - Objects inside array");

console.log("Very Useful in real world applications");

const users = [
    {userid:1, name: "santosh", age:29},
    {userid:2, name: "shivam", age:27},
    {userid:3, name: "sona", age:25},
]
console.log(users);

for(let user of users){
    console.log(user.name);
}


