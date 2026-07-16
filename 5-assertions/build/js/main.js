// convert to more or less specific type using the "as" keyword
let a = "hello";
let b = a; // we have change the type to a less specific one
let c = a; // more specific
// Angle brackets (This is less common because they dont use to work in this way in react)
let d = "world";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
// let myVal: string = addOrConcat(2,2, "concat"); // Incorrect because
// MyVal is a string and the function returns a union type
// therefore we can assert the type here...
let myVal = addOrConcat(2, 2, "concat"); // correct
// Be careful beacuse typescript does not know that the types
// are wringly asserted as the code below will result
// in a type error
let nextVal = addOrConcat(2, 2, "concat");
// Unknown types are not usable but they are used for forced/
// Double casting, make sure you avoid this as much as possible
// unles it is the last resort
// 10 as string //we need to cast as unknonw first
10; // Double/Forced casting;
// The DOM... is where assertions are very useful
// const img = document.querySelector("#myId") // Is both null and has its type when inferred, and in this case it is 
// // inferring to a very generic type "Element"
const img = document.querySelector("img"); // non null assertion "!", no need for hard typing
// the type, code already inferred that well
const myImg = document.getElementById("#img"); // No need for non null here beacuse we casted it to a type
const nextImg = document.getElementById("#img"); // Angle brackets can works here 
// img.src // this will give errors if we do not specify the type explicitly, 
// or we could use a non null assertion "!"
// beacuse the type in the img definition beacuse there is a possibility that it is null
img.src; // problem solved
// myImg.src // same problem here, we use a non null "!" for this one 
// in the definiton
myImg.src;
export {};
//# sourceMappingURL=main.js.map