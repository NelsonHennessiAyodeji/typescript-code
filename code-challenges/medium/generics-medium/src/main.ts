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
    name: string,
    salary: number,
}

type Book = {
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
    { name: "Tyler", salary: 2000 },
    { name: "Grace", salary: 3500 },
    { name: "Michael", salary: 4200 },
    { name: "Sophia", salary: 3900 },
    { name: "Daniel", salary: 5100 },
]);

const bookRepository = new Repository<Book>([
    { title: "Harry Potter", author: "J.K. Rowling" },
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
]);

userRepository.remove("id", 2);
userRepository.getAll();
employeeRepository.getAll();
bookRepository.getAll();

