console.log("File 73 - Function call by Call")

// function hello(){
//     console.log("Hello World!");
// }
// hello();
// hello.call();

// Call, Apply, Bind

const user1 = {
    firstName: "santosh",
    age: 29,
    about: function(){
        console.log(this.firstName, this.age);
    }
}
const user2 = {
    firstName: "shivam",
    age: 27
}
// user1.about();
user1.about.call();