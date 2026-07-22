// Product Inventory
class Product {
    id: number;
    name: string;
    price: number;
    quantity: number;

    constructor(id: number, name: string, price: number, quantity: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    public increaseStock(amount: number): number {
        this.quantity += amount;
        return this.quantity;
    }

    decreaseStock(amount: number): number {
        if (this.quantity > amount) {
            this.quantity -= amount;
            return this.quantity;
        } else {
            throw new Error("The stock size is smaller than the decreasing size");
        }
    }

    InventoryValue(): number {
        return this.price * this.quantity;
    }
}

const product1: Product = new Product(1, "Coke", 20, 50);
const product2: Product = new Product(2, "Fanta", 15, 30);
const product3: Product = new Product(1, "Cheese", 10, 20);
const product4: Product = new Product(1, "Cake", 30, 15);

product1.decreaseStock(25);
product2.decreaseStock(5);
product3.increaseStock(5);
product4.increaseStock(10);

console.log(product1.InventoryValue());
console.log(product2.InventoryValue());
console.log(product3.InventoryValue());
console.log(product4.InventoryValue());


///////////////////////////////////////////////////////////////////////////////////////////
// Bank Account
class BankAccount {
    constructor(public accountNumber: number, public owner: string, public balance: number) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = balance;
    }

    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount
        } else {
            throw new Error("Must deposit more than 0");
        }
    }

    public withdraw(amount: number): void {
        if ((amount > 0) && !(amount > this.balance)) {
            this.balance -= amount;
        } else {
            throw new Error("Can only withdraw available funds");
        }
    }

    public checkBalance(): number {
        return this.balance;
    }
}

const accoutn1: BankAccount = new BankAccount(2415416278, "Dave", 200000);
const accoutn2: BankAccount = new BankAccount(2455416278, "Tims", 80000);
const accoutn3: BankAccount = new BankAccount(2425416278, "Ty", 140000);

accoutn1.withdraw(100000);
accoutn2.deposit(20000);
accoutn3.withdraw(40000);

console.log(accoutn1.checkBalance());
console.log(accoutn2.checkBalance());
console.log(accoutn3.checkBalance());




///////////////////////////////////////////////////////////////////////////////////////////
// Library System
class Book {
    private static bookList: Book[] = [];

    constructor(public id: number, public title: string, public author: string, public available: boolean) {
        Book.bookList.push(this);
    }

    public borrowBook(id: number) {
        const book = Book.bookList.find(b => b.id === id);
        if (book?.available) {
            book.available = false;
            return `You have now rented the book: ${book.title}`;
        } else if (!book?.available) {
            return `The book has been rented`;
        } else {
            return "Book deos not exist";
        }
    }

    public returnBook(id: number) {
        const book = Book.bookList.find(b => b.id === id);
        if (book?.available) {
            return `The book has not been rented`;
        } else if (!book?.available) {
            book!.available = true;
            return `You have returned the book: ${book?.title}`;
        } else {
            throw new Error("Book nto found");
        }
    }

    public displayInfo(id?: number) {
        if (!id) {
            for (let i: number = 0; i < Book.bookList.length; i++) {
                console.log(`
                    Title: ${Book.bookList[i]!.title}
                    Author: ${Book.bookList[i]!.author}
                    Available: ${Book.bookList[i]!.available? "Yes" : "No"}
                    `
                );                
            }
        } else if (id) {
            const book = Book.bookList.find(b => b.id === id);
            if (book) {
                console.log(`
                    Title: ${book.title}
                    Author: ${book.author}
                    Available: ${book.available? "Yes" : "No"}
                    `
                );  
            } else {
                throw new Error("Book nto found");
            }
        }
    }
}

const book1: Book = new Book(1, "Macky", "NT Wright", true);
const book2: Book = new Book(2, "Sunday", "Chris Jericho", false);
const book3: Book = new Book(3, "Ice Cream", "Steven Rogers", true);
const book4: Book = new Book(4, "Religion", "Saint Basil The Great", false);
const book5: Book = new Book(5, "Minds", "MAcky Marrison", false);
const book6: Book = new Book(6, "Musicology", "Sam Shamoun", true);
const book7: Book = new Book(7, "Students Of Old", "Jay Dyer", false);
const book8: Book = new Book(8, "Raised", "Kelly Power", true);

console.log(book1.borrowBook(4));
console.log(book2.borrowBook(1));
console.log(book1.returnBook(1));
console.log(book3.borrowBook(1));
book8.displayInfo(3);