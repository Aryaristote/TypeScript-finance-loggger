var title = "-- TypeScript --";
console.log(title);
// Explicit types
var myNamee = "Kalume";
var myAge = 27;
var myNature = false;


// Arrays
var colgs : string[] = []; //Must initialize the array before pushing.
colgs.push('Kalume');

// Tuples
let user: [number, string] = [1, 'John'] // Must only have 2 elements and must be int and char.

// Union types or intersection types
var mixed : ( string | number )[] = []; // Use () when giving type to array only.
mixed.push('Kalume');
mixed.push(45);

    // ---  For normal var.
    var userID;
    userID = "Hgdshsskj123";

    // intersection types can also be
    let exampleArray : number & string;


// Objct types
var ninjaOne : object;
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
var age:any = 25;
age = "Kalume"; // change from number to string. or wherever.

var mixArr:any = [];
mixArr.push(5); // or .puh('Love')

// XXXXX Passing an object User with different elemt type. 
const fetchUser = (user: { username: string | number, password: string, age: number, isLogin: boolean} ) => {
    console.log(user.username);
}

// Easy way
type StrOrNum = string | number; // Store a type in a var.
type Bool = boolean;
type Num = number;
const fetchUser2 = (user: { username: StrOrNum, password: Num, isLogin:Bool }) => {
    console.log(user.username);
}

// Store the whole Object type. 
type ObjTypes = {username: string | number, password: string, age: number, isLogin: boolean};
const fetchUser3 = (user: ObjTypes) => {
    console.log(user.username);
}

// Functon Signature         // Void = not return value expected.
    //Example 1.
let Greet : (x: string, y: number, z: boolean) => void; // The structure it's has to follow.

Greet = (name: string, age:number, isLogin: boolean) => { // Must looks alike.
    console.log("");
}

    // Example 2.
let calc : (x: number, y: number, z: string) => number; // Must returns a number.
calc = (num1: number, num2: number, action: string) => {
    if(action === "add"){
        return num1 + num2; // Return value must be a number.
    }else {
        return num1 - num2;
    }
    // In any case, make sure return is present & in number.
}

    // Example 3
let logDetails : (x: { name: string, age: number }) => void;

type person = { name: string; age: number}
logDetails = (user: person ) => {
    console.log(`User is:  ${user.name} and age: ${user.age}`);
}

// INTERFACE 
interface Person {
    name: string;
    age: number;
    isStudent: boolean;
}

let person: Person = {
    name: "John",
    age: 30,
    isStudent: true
};
    // Using only few props in INTERFACE
interface Assignment {
    studentID: number,
    titles: string,
    grade: number,
    varified?: boolean,
}
    // Func structure.
const UpdateAssignment = (assign: Assignment, propToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propToUpdate }
}

const Assign1: Assignment = {
    studentID: 1,
    titles: "Math Algorithms",
    grade: 1,
}
    // Updating props from interface.
console.log(UpdateAssignment(Assign1, { grade: 87 }));

// Unit TYPE
type Status = "Active" | "Inactive" | "Pending";

function getStatusMessage(status: Status): string {
    switch (status) {
        case "Active":
            return "Account is active";
        case "Inactive":
            return "Account is inactive";
        case "Pending":
            return "Account is pending approval";
    }
}

let userStatus : Status = "Active";
let message : string = getStatusMessage(userStatus); 