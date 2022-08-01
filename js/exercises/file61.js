console.log("File 61 - Find Method");

// const userName = ["santosh", "sona", "saurya", "shreya", "shivam"];

// let getUser = userName.find((user)=>{
//     return user.length === 4;
// });

// console.log(getUser);

const users = [
    {userId: 1, userName: "santosh"},
    {userId: 2, userName: "sona"},
    {userId: 3, userName: "saurya"},
    {userId: 4, userName: "shreya"},
    {userId: 5, userName: "shivam"},
    {userId: 6, userName: "amit"},
];

const getUser = users.find((user)=>{
    return user.userId === 3;
});

console.log(getUser)