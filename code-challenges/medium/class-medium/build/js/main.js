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
export {};
//# sourceMappingURL=main.js.map