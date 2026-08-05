// Mini ORM
class DatabaseTable {
    items = new Map();
    insert(item) {
        this.items.set(item.id, item);
    }
    findById(id) {
        const item = this.items.get(id);
        if (item) {
            return item;
        }
        return;
    }
    findAll() {
        let arr = [];
        this.items.forEach(i => arr.push(i));
        return arr;
    }
    update(id, updates) {
        let item = this.findById(id);
        this.items.set(id, { ...item, ...updates });
    }
    delete(id) {
        this.items.delete(id);
    }
    exists(id) {
        let items = this.findById(id);
        if (items)
            return true;
        return false;
    }
    count() {
        return this.items.size;
    }
    clear() {
        this.items = new Map();
    }
}
const user1 = {
    id: 1,
    name: "Ayo",
    age: 20,
    email: "dirt@gmail.com",
    phone: 99999,
    address: "Nigeria",
};
const product1 = {
    id: 1,
    name: "Cheese Ball",
    price: 23000,
    stock: 20,
};
const order1 = {
    id: 1,
    quantity: 10,
    totalPrice: 200,
    status: "Paid"
};
const user = new DatabaseTable();
const product = new DatabaseTable();
const order = new DatabaseTable();
user.insert(user1);
product.insert(product1);
order.insert(order1);
user.update(1, { age: 50 });
console.log(product.exists(1));
console.log(order.exists(3));
product.delete(1);
console.log(user.findAll());
console.log(product.findAll());
console.log(order.findAll());
export {};
//# sourceMappingURL=main.js.map