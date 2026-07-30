// Generic Repository
class Repository {
    items;
    constructor(items) {
        this.items = items;
    }
    add(item) {
        this.items.push(item);
    }
    remove(key, value) {
        this.items = this.items.filter(item => item[key] !== value);
    }
    getAll() {
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
    count() {
        console.log(this.items.length);
    }
}
const userRepository = new Repository([
    { id: 1, name: "Chris", age: 20 },
    { id: 2, name: "Sarah", age: 24 },
    { id: 3, name: "John", age: 19 },
    { id: 4, name: "Emily", age: 27 },
    { id: 5, name: "David", age: 31 },
]);
const employeeRepository = new Repository([
    { id: 1, name: "Tyler", salary: 2000 },
    { id: 2, name: "Grace", salary: 3500 },
    { id: 3, name: "Michael", salary: 4200 },
    { id: 4, name: "Sophia", salary: 3900 },
    { id: 5, name: "Daniel", salary: 5100 },
]);
const bookRepository = new Repository([
    { id: 1, title: "Harry Potter", author: "J.K. Rowling" },
    { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 4, title: "1984", author: "George Orwell" },
    { id: 5, title: "To Kill a Mockingbird", author: "Harper Lee" },
]);
// userRepository.remove("id", 2);
// userRepository.getAll();
// employeeRepository.getAll();
// bookRepository.getAll();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Generic Search Utility
let users = [
    { id: 1, name: "Chris", age: 20 },
    { id: 2, name: "Sarah", age: 24 },
    { id: 3, name: "John", age: 19 },
    { id: 4, name: "Emily", age: 27 },
    { id: 5, name: "David", age: 31 },
];
let employees = [
    { id: 1, name: "Tyler", salary: 2000 },
    { id: 2, name: "Grace", salary: 3500 },
    { id: 3, name: "Michael", salary: 4200 },
    { id: 4, name: "Sophia", salary: 3900 },
    { id: 5, name: "Daniel", salary: 5100 },
];
let books = [
    { id: 1, title: "Harry Potter", author: "J.K. Rowling" },
    { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 4, title: "1984", author: "George Orwell" },
    { id: 5, title: "To Kill a Mockingbird", author: "Harper Lee" },
];
const searchById = (array, id) => {
    const item = array[(id - 1)];
    if (item) {
        return item;
    }
    return undefined;
};
const loginForm = {
    email: "john@gmail.com",
    password: 123456,
};
const registerForm = {
    firstName: "John",
    lastName: "Smilga",
    email: "john@gmail.com",
    password: 123456,
    confirmPassword: 123456,
};
const paymentForm = {
    cardNumber: 2315416578,
    cardHolder: "John Smilga",
    amount: 20000,
    cvv: 220,
};
const loginValidation = {
    valid: true,
    errors: ["Success"],
    data: loginForm,
};
const registerValidation = {
    valid: false,
    errors: ["Failed"],
    data: registerForm,
};
const paymentValidation = {
    valid: false,
    errors: ["CVV must be 3 digits."],
    data: paymentForm,
};
const printValidationResult = (result) => {
    const isValid = result.valid;
    const errors = result.errors;
    if (isValid) {
        console.log("Validation Successful");
    }
    else {
        for (let i = 0; i < errors.length; i++) {
            console.log(errors[i]);
        }
    }
    console.log(result.data);
};
printValidationResult(loginValidation);
printValidationResult(registerValidation);
printValidationResult(paymentValidation);
export {};
//# sourceMappingURL=main.js.map