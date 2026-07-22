// Product Inventory
class Product {
    id;
    name;
    price;
    quantity;
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    increaseStock(amount) {
        this.quantity += amount;
        return this.quantity;
    }
    decreaseStock(amount) {
        if (this.quantity > amount) {
            this.quantity -= amount;
            return this.quantity;
        }
        else {
            throw new Error("The stock size is smaller than the decreasing size");
        }
    }
    InventoryValue() {
        return this.price * this.quantity;
    }
}
const product1 = new Product(1, "Coke", 20, 50);
const product2 = new Product(2, "Fanta", 15, 30);
const product3 = new Product(1, "Cheese", 10, 20);
const product4 = new Product(1, "Cake", 30, 15);
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
    accountNumber;
    owner;
    balance;
    constructor(accountNumber, owner, balance) {
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = balance;
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
        else {
            throw new Error("Must deposit more than 0");
        }
    }
    withdraw(amount) {
        if ((amount > 0) && !(amount > this.balance)) {
            this.balance -= amount;
        }
        else {
            throw new Error("Can only withdraw available funds");
        }
    }
    checkBalance() {
        return this.balance;
    }
}
const accoutn1 = new BankAccount(2415416278, "Dave", 200000);
const accoutn2 = new BankAccount(2455416278, "Tims", 80000);
const accoutn3 = new BankAccount(2425416278, "Ty", 140000);
accoutn1.withdraw(100000);
accoutn2.deposit(20000);
accoutn3.withdraw(40000);
console.log(accoutn1.checkBalance());
console.log(accoutn2.checkBalance());
console.log(accoutn3.checkBalance());
///////////////////////////////////////////////////////////////////////////////////////////
// Library System
class Book {
    id;
    title;
    author;
    available;
    static bookList = [];
    constructor(id, title, author, available) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.available = available;
        Book.bookList.push(this);
    }
    borrowBook(id) {
        const book = Book.bookList.find(b => b.id === id);
        if (book?.available) {
            book.available = false;
            return `You have now rented the book: ${book.title}`;
        }
        else if (!book?.available) {
            return `The book has been rented`;
        }
        else {
            return "Book deos not exist";
        }
    }
    returnBook(id) {
        const book = Book.bookList.find(b => b.id === id);
        if (book?.available) {
            return `The book has not been rented`;
        }
        else if (!book?.available) {
            book.available = true;
            return `You have returned the book: ${book?.title}`;
        }
        else {
            throw new Error("Book nto found");
        }
    }
    displayInfo(id) {
        if (!id) {
            for (let i = 0; i < Book.bookList.length; i++) {
                console.log(`
                    Title: ${Book.bookList[i].title}
                    Author: ${Book.bookList[i].author}
                    Available: ${Book.bookList[i].available ? "Yes" : "No"}
                    `);
            }
        }
        else if (id) {
            const book = Book.bookList.find(b => b.id === id);
            if (book) {
                console.log(`
                    Title: ${book.title}
                    Author: ${book.author}
                    Available: ${book.available ? "Yes" : "No"}
                    `);
            }
            else {
                throw new Error("Book nto found");
            }
        }
    }
}
const book1 = new Book(1, "Macky", "NT Wright", true);
const book2 = new Book(2, "Sunday", "Chris Jericho", false);
const book3 = new Book(3, "Ice Cream", "Steven Rogers", true);
const book4 = new Book(4, "Religion", "Saint Basil The Great", false);
const book5 = new Book(5, "Minds", "MAcky Marrison", false);
const book6 = new Book(6, "Musicology", "Sam Shamoun", true);
const book7 = new Book(7, "Students Of Old", "Jay Dyer", false);
const book8 = new Book(8, "Raised", "Kelly Power", true);
console.log(book1.borrowBook(4));
console.log(book2.borrowBook(1));
console.log(book1.returnBook(1));
console.log(book3.borrowBook(1));
book8.displayInfo(3);
export {};
//# sourceMappingURL=main.js.map