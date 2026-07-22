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