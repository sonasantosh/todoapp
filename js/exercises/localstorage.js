console.log("File 37 - Localstorage");



// localStorage.setItem('name', 'santosh');
// localStorage.setItem('age', 5);
// localStorage.setItem('hobbies', ['coding', 'listening songs', 'eating food']);

const person = {
    name: 'santosh',
    age: 29,
    hobbies: ['coding', 'listening songs', 'eating food']
}

localStorage.setItem('person1', JSON.stringify(person));

const {name, age, hobbies} = JSON.parse(localStorage.getItem('person1'));

// console.log(name, age, hobbies);

// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// const hobbies = localStorage.getItem('hobbies');

// localStorage.clear();

console.log(`My Name is ${name} and age is ${age} and my hobbies are ${hobbies}`);



