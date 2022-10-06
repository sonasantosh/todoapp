console.log("Shallow Copy and Deep Copy");

// const obj = {
//     name:"santosh",
//     age:29
// };
// const user = obj;
// user.name="shivam";
// console.log("Object : ",obj);
// console.log("User : ", user);

/*
: Why we use shallow copy and deep copy?
: As per our requirement of copy an object to another variable as it is and make some changes in anyone will affects both variable or object 
we can not copy the value directly when we try to copy an object to another object it only copy the reference not the value.
That's why we need to use shallow copy and deep copy.
*/

// const obj = {
//     name:"santosh",
//     age:29,
//     address:{
//         city:"gurugram",
//         state:"haryana",
//     }
// };
// const user = Object.assign({},obj);
// user.name="shivam";
// user.age=27;
// user.address.city="noida";
// console.log("Object : ",obj);
// console.log("User : ", user);


/*Another Method to copy the object ({...obj})*/
// const obj = {
//     name:"santosh",
//     age:29,
//     address:{
//         city:"gurugram",
//         state:"haryana",
//     }
// };
// const user = {...obj};
// user.name="shivam";
// user.age=27;
// user.address.city="noida";
// console.log("Object : ",obj);
// console.log("User : ", user);

/*
In the above program we are unable to change user address when we try to change city of user it changes obj address also.
So we will use deep copy.
*/

// const obj = {
//     name:"santosh",
//     age:29,
//     address:{
//         city:"gurugram",
//         state:"haryana",
//     }
// };
// const user = JSON.parse(JSON.stringify(obj));
// user.name="shivam";
// user.age=27;
// user.address.city="noida";
// console.log("Object : ",obj);
// console.log("User : ", user);

/*
In the above program we are able to change user address with the help of Deep copy.
*/

// Issue with Deep Copy (Not able to copy functions).
// const obj = {
//     name:"santosh",
//     age:29,
//     address:{
//         city:"gurugram",
//         state:"haryana",
//     },
//     hello: function greet(){
//         console.log("Hi Friends");
//     }
// };
// const user = JSON.parse(JSON.stringify(obj));
// user.name="shivam";
// user.age=27;
// user.address.city="noida";
// console.log("Object : ",obj);
// console.log("User : ", user);

/*
When we perform deep copy with the help of JSON.stringify() method it will not copy the function that's why we need to use js library named lodash (https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js).
*/

const obj = {
    name:"santosh",
    age:29,
    address:{
        city:"gurugram",
        state:"haryana",
    },
    hello: function greet(){
        console.log("Hi Friends");
    }
};
const user = _.cloneDeep(obj);
user.name="shivam";
user.age=27;
user.address.city="noida";
console.log("Object : ",obj);
console.log("User : ", user);