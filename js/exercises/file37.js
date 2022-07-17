console.log("File 37 - Difference between dot and bracket notation");

const key = 'email';

const person = {
    name: 'santosh',
    age: 29,
    "our hobbies": ['coding', 'eating', 'listening songs']
}
person[key] = "srbca1256@gmail.com";
console.log(person);

console.log(person["our hobbies"]);

