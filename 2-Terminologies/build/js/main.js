let myName = "Dave"; // String type
let meaningOfLife; // Number type
let isloading; // Boolean type
// let album: any; // Any type
let album; // Union type
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
const sum = (a, b) => {
    return a + b;
};
// Some use cases for union types
let postId;
let isActive;
// TS allows you to discover type values 
// by hovering over them with mouse
// let re = /\w+/g
let re = /\w+/g;
export {};
//# sourceMappingURL=main.js.map