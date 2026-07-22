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