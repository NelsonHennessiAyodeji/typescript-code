// Generic Repository
class Repository<T> {
    constructor(private items: T[]) {
    }

    public add(item: T) {
        this.items.push(item);
    }

    public remove<K extends keyof T>(key: K, value: T[K]) {
        this.items = this.items.filter(item => item[key] !== value);
    }

    public getAll() {
        for (let i: number = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }

    public count() {
        console.log(this.items.length);        
    }
}

type User = {
    id: number,
    name: string,
    age: number,
}

type Employee = {
    id: number,
    name: string,
    salary: number,
}

type Book = {
    id: number,
    title: string,
    author: string,
}

const userRepository = new Repository<User>([
    { id: 1, name: "Chris", age: 20 },
    { id: 2, name: "Sarah", age: 24 },
    { id: 3, name: "John", age: 19 },
    { id: 4, name: "Emily", age: 27 },
    { id: 5, name: "David", age: 31 },
]);

const employeeRepository = new Repository<Employee>([
    { id: 1, name: "Tyler", salary: 2000 },
    { id: 2, name: "Grace", salary: 3500 },
    { id: 3, name: "Michael", salary: 4200 },
    { id: 4, name: "Sophia", salary: 3900 },
    { id: 5, name: "Daniel", salary: 5100 },
]);

const bookRepository = new Repository<Book>([
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
let users: User[] = [    
    { id: 1, name: "Chris", age: 20 },
    { id: 2, name: "Sarah", age: 24 },
    { id: 3, name: "John", age: 19 },
    { id: 4, name: "Emily", age: 27 },
    { id: 5, name: "David", age: 31 },
];

let employees: Employee[] = [
    { id: 1, name: "Tyler", salary: 2000 },
    { id: 2, name: "Grace", salary: 3500 },
    { id: 3, name: "Michael", salary: 4200 },
    { id: 4, name: "Sophia", salary: 3900 },
    { id: 5, name: "Daniel", salary: 5100 },
];

let books: Book[] = [
    { id: 1, title: "Harry Potter", author: "J.K. Rowling" },
    { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 4, title: "1984", author: "George Orwell" },
    { id: 5, title: "To Kill a Mockingbird", author: "Harper Lee" },
];

const searchById = <T>(array: T[], id: number): (T | undefined | any) => {
    const item = array[(id - 1) as keyof T[]];
    if (item) {
        return item;
    } 
    return undefined;
}

// console.log(searchById<User>(users, 3));
// console.log(searchById(employees, 5));
// console.log(searchById<Book>(books, 2));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Generic Form Validator
interface ValidationResult<T> {
    valid: boolean;
    errors: string[];
    data: T
}

type LoginForm = {
    email: string, 
    password: number
}

type RegisterForm = {
    firstName: string,
    lastName: string,
    email: string,
    password: number
    confirmPassword: number
}

type PaymentForm = {
    cardNumber: number,
    cardHolder: string,
    amount: number,
    cvv: Number,
}

const loginForm: LoginForm = {
    email: "john@gmail.com",
    password: 123456,
}

const registerForm: RegisterForm = {
    firstName: "John",
    lastName: "Smilga",
    email: "john@gmail.com",
    password: 123456,
    confirmPassword: 123456,
}

const paymentForm: PaymentForm = {
    cardNumber: 2315416578,
    cardHolder: "John Smilga",
    amount: 20000,
    cvv: 220,
}

const loginValidation: ValidationResult<LoginForm> = {
    valid: true,
    errors: ["Success"],
    data: loginForm,
}

const registerValidation: ValidationResult<RegisterForm> = {
    valid: false,
    errors: ["Failed"],
    data: registerForm,
}

const paymentValidation: ValidationResult<PaymentForm> = {
    valid: false,
    errors: ["CVV must be 3 digits."],
    data: paymentForm,
}

const printValidationResult = <T>(result: ValidationResult<T>): void => {
    const isValid: boolean = result.valid;
    const errors: string[] = result.errors;

    if (isValid) {
        console.log("Validation Successful");
    } else {
        for (let i = 0; i < errors.length; i++) {
            console.log(errors[i]);
        }
    }
    console.log(result.data);
}

printValidationResult(loginValidation)

printValidationResult<RegisterForm>(registerValidation)

printValidationResult(paymentValidation)
