console.log("file 43 - Nested destructuring");

const users = [
    {userid: 1, name: "santosh", age:29},
    {userid: 2, name: "sona", age:25},
    {userid: 3, name: "shivam", age:27},
]

console.log(users)

// const [user1, user2, user3] = users;

// console.log(user1);
// console.log(user2);
// console.log(user3);

const [{name:user1name, userid}, , {age}] = users;

console.log(user1name, age);

console.log(userid);