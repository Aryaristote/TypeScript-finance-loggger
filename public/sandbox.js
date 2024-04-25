"use strict";
var title = "-- TypeScript --";
console.log(title);
// Explicit types
var myNamee = "Kalume";
var myAge = 27;
var myNature = false;
// Arrays
var colgs = []; //Must initialize the array before pushing.
colgs.push('Kalume');
// Union types
var mixed = []; // Use () when giving type to array only.
mixed.push('Kalume');
mixed.push(45);
// ---  For normal var.
var userID;
userID = "Hgdshsskj123";
// Objct types
var ninjaOne;
ninjaOne = {
    name: 'Kalume', age: 36, gender: 'Male',
}; // OR
// Define type of elmnt when initialize.
var ninjaTwo;
ninjaTwo = {
    name: 'Kalume',
    age: 36,
    gender: 'Male'
};
// Any types
var age = 25;
age = "Kalume"; // change from number to string. or wherever.
var mixArr = [];
mixArr.push(5); // or .puh('Love')
// XXXXX Passing an object User with different elemt type. 
const fetchUser = (user) => {
    console.log(user.username);
};
const fetchUser2 = (user) => {
    console.log(user.username);
};
const fetchUser3 = (user) => {
    console.log(user.username);
};
// Functon Signature         // Void = not return value expected.
//Example 1.
let Greet; // The structure it's has to follow.
Greet = (name, age, isLogin) => {
    console.log("");
};
// Example 2.
let calc; // Must returns a number.
calc = (num1, num2, action) => {
    if (action === "add") {
        return num1 + num2; // Return value must be a number.
    }
    else {
        return num1 - num2;
    }
    // In any case, make sure return is present & in number.
};
// Example 3
let logDetails;
logDetails = (user) => {
    console.log(`User is:  ${user.name} and age: ${user.age}`);
};
