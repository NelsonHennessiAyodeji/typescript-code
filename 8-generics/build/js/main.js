// known type
const stringEcho = (arg) => arg;
// Generic type
const echo = (arg) => arg;
// For utility functions
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));
// const isTrue = <T>(arg: T): {arg: T, is: boolean} => {
//     return {arg, is: !!arg} // "!!" is called a double bang, if flips a 0 or other compatible 
//     // data into a true or false.
// } // is still correct code 
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) { // We are checking if the object is empty, w do not want emptyb objects, so we check the keys. 
        // we could have combined the two ifs, but just to make some room.
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue("Dave"));
console.log(isTrue(""));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: "Dave" }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) { // We are checking if the object is empty, w do not want emptyb objects, so we check the keys. 
        // we could have combined the two ifs, but just to make some room.
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
// Extends narrows T down, and now the type will have to have the properties of HasID
const processUser = (user) => {
    // Process the user with logic here...
    return user;
};
// The types must have the properties of HasID
console.log(processUser({ id: 1, name: "Dave" }));
// If it does not, we get am error like below
// console.log(processUser({name: "Dave"})); // incorrect
//  A more complex example
// We are building K to be the key of the type of Type T
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
const usersArray = [
    {
        "id": 1,
        "name": "Green James",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-crona",
            "catchPhrase": "Multi-layered",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Emily Carter",
        "username": "EmCarter",
        "email": "emily.carter@example.com",
        "address": {
            "street": "Oakwood Drive",
            "suite": "Suite 210",
            "city": "Riverton",
            "zipcode": "48321-1098",
            "geo": {
                "lat": "40.7128",
                "lng": "-74.0060"
            }
        },
        "phone": "1-555-248-9134",
        "website": "emilycarter.dev",
        "company": {
            "name": "BrightTech Solutions",
            "catchPhrase": "Innovating everyday experiences",
            "bs": "empower scalable digital platforms"
        }
    }
];
console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "username"));
// Generics in a class
class StateObject {
    data;
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("John"); // This is where we specify the object for the class
console.log(store.state);
store.state = 'Dave';
// store.state = 12;// Incorrect
const myState = new StateObject([15]);
myState.state = (['Dave', 34, true]);
console.log(myState.state);
export {};
//# sourceMappingURL=main.js.map