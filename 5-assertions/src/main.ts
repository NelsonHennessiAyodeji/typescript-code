type One  = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific type using the "as" keyword
let a: One = "hello";
let b = a as Two; // we have change the type to a less specific one
let c = a as Three // more specific

// Angle brackets (This is less common because they dont use to work in this way in react)
let d = <One>"world"
let e = <string | number>"world"


const addOrConcat = (a: number, b: number, c: "add" | "concat"): number | string => {
    if (c === 'add') return a + b;
    return '' + a + b;
}

// let myVal: string = addOrConcat(2,2, "concat"); // Incorrect because
// MyVal is a string and the function returns a union type
// therefore we can assert the type here...
let myVal: string = addOrConcat(2,2, "concat") as string; // correct

// Be careful beacuse typescript does not know that the types
// are wringly asserted as the code below will result
// in a type error
let nextVal: number = addOrConcat(2,2, "concat") as number




// Unknown types are not usable but they are used for forced/
// Double casting, make sure you avoid this as much as possible
// unles it is the last resort
// 10 as string //we need to cast as unknonw first
(10 as unknown) as string // Double/Forced casting;


// The DOM... is where assertions are very useful
// const img = document.querySelector("#myId") // Is both null and has its type when inferred, and in this case it is 
// // inferring to a very generic type "Element"

const img = document.querySelector("img")!; // non null assertion "!", no need for hard typing
// the type, code already inferred that well
const myImg = document.getElementById("#img") as HTMLImageElement; // No need for non null here beacuse we casted it to a type
const nextImg = <HTMLImageElement>document.getElementById("#img"); // Angle brackets can works here 

// img.src // this will give errors if we do not specify the type explicitly, 
// or we could use a non null assertion "!"
// beacuse the type in the img definition beacuse there is a possibility that it is null

img.src; // problem solved
// myImg.src // same problem here, we use a non null "!" for this one 
// in the definiton

myImg.src