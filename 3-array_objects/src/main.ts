// an array of type string when inferred
let stringArr = ["one", "hey", "DAVE"];
// an array of type union when inferred
let guitars = ["Start", "Something", 2020]
// an array of type union when inferred
let mixed = ["Evh", 1983, true];

// stringArr[0] = 42  os wrong becaus is not string
stringArr[0] = "Obe"
// stringArr.push(42); is wrong
stringArr.push("Tbo");
// Note no limit to array lenght, 
// No order for union types

guitars[0] = 1950 // correct, it is union type
// guitars.unshift(true) False
guitars.unshift("Jim");

// stringArr = guitars; // Cannot work, only tyoe strin

guitars = stringArr; // Works the other 
// way becayuse they include strings n

let test = [] // Has any type
let bands: string[] = []; // Defining the type before hand
// bands.push(true); // incorrect
bands.push("Dave"); // correct

// lenght and order of array do not matter for Arrays

// Tuples a strict is array that has a fixed type for the array with specific positions and lenght. 

let myTuple: [string, number, boolean] = ["dave", 63, true]; // This is a tuple with string number and boolean. Has 3 slots.

let mixedData = ["john", 1, false]; // This is a union type with string number and boolean.

mixedData = myTuple; // No issues because mixed is a type of array that accepts string number and boolean.

// myTuple = mixedData; // Incorrect It is possible that mixedData has less than 3 elements in it, it is not fixed.

// myTuple[3] = 42;// Incorrect beacuse the forth element in not created nor assigned.

myTuple[1] = 42; // Correct.


// Objects
let myObj: object;
// An aaray is a type of object
myObj = []
console.log(typeof myObj); // is object

myObj = bands;
myObj = {};

const exampleObj = {
    prop1: "Dave",
    prop2: true
} // prop2 must be a boolean, prop1 must be a string

// exampleObj.prop1 = 42 // Incorrect
exampleObj.prop1 = "John" // Correct

// Annotating types for objects
// We use Types
// type Guitarist = {
//     name: string;
//     active: boolean;
//     albums: (string | number)[]
// } // This expects a name, active and album properties on it annotators

// type Guitarist = {
//     name: string;
//     active?: boolean;
//     albums: (string | number)[]
// } // The "?" makes the active property optional

// An interface works the same way
interface Guitarist {
    name?: string;
    active: boolean;
    albums: (string | number)[]
} // The "?" makes the active property optional. You can se them interchangeably.


let evh: Guitarist = {
    name: "Eddie",
    active: false,
    albums: [1934, 90, "Yes"]
} // Thus is convenient because wwe have defined the type in advance
// We have to add every property to mae it work.

let jp: Guitarist = {
    // name: "Jimie",
    active: true,
    albums: [1934, "Yes", 90]
} 

evh = jp // no issues here unlss you dont correctly fill the rest of the 

// evh.years = 40; // THIS WONT wor k because we cant just add another property from here.

// If we want a property to be optionally filled, then we need add the "?" on it.

// How it applies to functions
const greet = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`
    }
    // return `Hello ${guitarist.name?.toUpperCase()}!`// The question mark makes them know that is is optional and could be undefined
    return "Hello";

}// We did not have to specifie all properties and types in the function.

console.log(greet(jp));

// We can also use an interface for this



// Enums
// Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime. It is not in JS

enum Grade {
    U = 7, // You can change the number and everything else wil adapt.
    D,
    C,
    B,
    A
}

console.log(Grade.U); // They are enumerated and they start at zero


// This is a covering of array tuples objetcs and enums.