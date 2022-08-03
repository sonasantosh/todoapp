console.log("File 68 - Map in Object");

// const person = {
//     firstName: "santosh",
//     age: 29,
//     1: "one"
// };
// console.log(person.firstName);
// console.log(person["firstName"]);

// for(let key in person){
//     console.log(typeof key);
// }

// const person = new Map();
// person.set("firstName", "Santosh");
// person.set("age", 29);
// person.set(1,"one");
// person.set([1,2,3], "one");
// person.set({lastName:"kumar"}, "testing");
// console.log(person);
// console.log(person.get(1));
// console.log(person.keys());

// for(let key of person.keys()){
//     console.log(key, typeof key);
// }

// for(let [key, value] of person){
//     // console.log(key);
//     console.log(key, value);
// }


// const person = new Map([["firstName","santosh"],["age",29]]);
// console.log(person);

const person1 = {
    id:1,
    firstName: "santosh",
}
const person2 = {
    id:2,
    firstName: "sona",
}

const userInfo = new Map();
userInfo.set(person1, {age: 29, gender:"male"});
userInfo.set(person2, {age: 24, gender:"female"});
console.log(userInfo);

console.log(person1.id);
console.log(userInfo.get(person1).gender)
console.log(userInfo.get(person2).gender)