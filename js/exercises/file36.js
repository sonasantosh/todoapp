console.log("File 36 - Object");

const person = {
    name: "santosh",
    age: 29,
    hobbies: ["coding", "learning", "listening songs"]
}
person.gender = "male";
person["marital status"] = "married";


console.log(person);
console.log(typeof person);
console.log("Name is ",person.name);
console.log("and age is : ",person.age);
console.log("Hobbies : ", person.hobbies);
console.log("Marital status : ", person["marital status"]);

for (let key in person)
{
    console.log(person[key]);
    document.getElementById("root").innerHTML = person[key];
}

// Delete a property
delete person.age;
console.log(person);

document.getElementById("root").innerHTML = person["gender"];
