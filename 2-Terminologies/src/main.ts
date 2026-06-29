let myName: string = "Dave"; // String type
let meaningOfLife: number; // Number type
let isloading: boolean; // Boolean type
// let album: any; // Any type
let album: string | number; // Union type

myName = "John";
meaningOfLife = 42;
isloading = true;
album = "Van"; 
// or
album = 5150;

// Unknown parameter not allowed in TS
// const sum = (a, b) => {
//     return a + b;
// }

const sum = (a: number, b: string) => {
    return a + b;
}

// Some use cases for union types
let postId: string | number;
let isActive: number | boolean;

// TS allows you to discover type values 
// by hovering over them with mouse
// let re = /\w+/g
let re: RegExp = /\w+/g