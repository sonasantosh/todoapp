console.log("File 70 - Optional Chaining - ? ");
// used for nested object
const user = {
    firstName: "santosh",
    // address: {houseNumber:512}
}

console.log(user);
console.log(user?.firstName);
console.log(user?.address?.houseNumber);