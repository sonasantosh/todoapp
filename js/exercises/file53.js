console.log("File - 53 - Parameter Destructuring");

const person = {
    firstName : "santosh",
    age: 29,
    gender: "male",
}

// function personDetail(obj){
//     console.log("first name is ", obj.firstNmae);
//     console.log("age is ", obj.age);
//     console.log("gender is ", obj.gender);
// }

function personDetail({firstName, age, gender}){
    console.log(firstName);
    console.log(age);
    console.log(gender);
}

personDetail(person);