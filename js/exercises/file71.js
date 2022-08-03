console.log("File 71 - Methods");

// Function inside Object

function getInfo(){
    console.log(`My Name is ${this.firstName} and Age is ${this.age}`);
}

const person = {
    firstName: "santosh",
    age: 29,
    about: getInfo
}
const person2 = {
    firstName: "sona",
    age: 24,
    about: getInfo
}
const person3 = {
    firstName: "Saurya",
    age: 3,
    about: getInfo
}

// console.log(person);
// console.log(person.about);
// person.about();

// console.log(getInfo);

person.about()
person2.about()
person3.about()