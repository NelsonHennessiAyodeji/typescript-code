// ?? We canot do this with an interface
// interface PostId = stringOrNumber; // Will not work beacuse interfaces are like objects or classes or something
// Meanwhile types are types or aliases of any type script type we might assign
// Literal types
let myName;
// myName = "John" // Will not work, it has to be equal to the type
let username;
username = "Dave"; // Correct
// username = "Racheal" // Incorrect
// Functions
// Function with a return
const add = (a, b) => {
    return a + b;
};
// Funtion without a return
const logMessage = (message) => {
    console.log(message);
};
logMessage("Hi");
logMessage(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// Can also work for interfaces, but with different syntaxes
// But lets just agrre that unterfaces are more of classes and ibjects stuff so we will leave this magic to types
// interface mathFunction { 
//     (a: number, b: number): number;
// }
let multiply = function (c, d) {
    return c * d;
};
console.log(multiply(2, 2));
// Opional parameter
// Note that optional parameters no to be last in the list
const addAll = (a, b, c) => {
    // We will use a type guard for the c parameter
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    // The fuintions gives an eror because this could possibly return undefined, so we just end up returning a sure number anyways if the top one is undefined
    return a + b;
};
// Default param values
// Default values do not work with function types
// nor interface funtions
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
// Because the first parameter has a defualt value, if we were to use the function
// and not assign the first value, we use undefined to skip it, else we will give the intending second value to the first
const sumAllII = (a = 2, b, c = 2) => {
    return a + b + c;
};
logMessage(addAll(2, 3, 2));
logMessage(addAll(3, 2));
logMessage(sumAll(2, 3));
logMessage(sumAllII(undefined, 3)); // We can ignore the last one in this case because it has a defaukt value
// Rest parameters
// The point of it is to give ooption to multiple options
// This should always come at the end
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMessage(total(1, 2, 3)); // No array here beacuse the ...nums is the aray, and the last parameters will go to the array because
// the first set of parameters have been exhausted
// Never Type
// They are for funcniots that explicitly throw errors
const createError = (errMsg) => {
    throw new Error(errMsg);
};
// This code block has the type of never if the loop will run forver
// And when a code infers a never type, you should always catch the loop or issue before it gets out of hand
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break; // This solves the endless loop
    }
};
// we can create a custom type guard for the code below
const isNumber = (value) => {
    return typeof value === "number"
        ? true : false;
};
// Using never types
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    // Typescript is still seeing this as an error despite us 
    // Returning the correct type. But when we reurn a never type
    // Thungs look fine
    return createError("This should never happen");
    // Type gurads here was good, but tyopescript needs a 
    // Retrun value with a possible error when we do not have 
    // an explicit retuen and not handling a potential indefined
};
export {};
//# sourceMappingURL=main.js.map