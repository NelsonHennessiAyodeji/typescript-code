// Generic Cache System
class Cache {
    dataStore = new Map();
    save(name, data) {
        this.dataStore.set(name, data);
    }
    get(name) {
        return this.dataStore.get(name);
    }
    remove(name) {
        this.dataStore.delete(name);
    }
    clear() {
        this.dataStore.clear();
    }
    count() {
        return this.dataStore.size;
    }
}
const user1 = {
    id: 1,
    name: "Dave",
    age: 20,
};
const userCache = new Cache();
userCache.save("user1", user1);
class Events {
    eventName;
    payload;
    createdAt;
    constructor(eventName, payload, createdAt) {
        this.eventName = eventName;
        this.payload = payload;
        this.createdAt = createdAt;
    }
    publish() {
        console.log(`
        Event ${this.eventName} created at ${this.createdAt}
        Info:
        ${JSON.stringify(this.payload, null, 2)}
        `);
    }
}
const event1 = new Events("Order Created", {
    food: "Burger",
    price: 3500,
}, "2026-07-30 16:45");
const event2 = new Events("Order Created", {
    food: "Pepperoni Pizza",
    price: 7000,
}, "2026-07-30 16:50");
const event3 = new Events("Payment Successful", {
    card: "**** **** **** 4521",
    food: "Burger",
    amount: 3500,
}, "2026-07-30 16:46");
const event4 = new Events("Payment Successful", {
    card: "**** **** **** 9876",
    food: "Pepperoni Pizza",
    amount: 7000,
}, "2026-07-30 16:51");
const event5 = new Events("Driver Assigned", {
    driver: "Michael Johnson",
    destination: "Victoria Island",
    distance: 8.2,
}, "2026-07-30 16:47");
const event6 = new Events("Driver Assigned", {
    driver: "Sarah Williams",
    destination: "Lekki Phase 1",
    distance: 12.5,
}, "2026-07-30 16:52");
// Store all events
const eventBus = [
    event1,
    event2,
    event3,
    event4,
    event5,
    event6,
];
// event4.publish();
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Generic Data Table
class DataTable {
    rows = [];
    addRow(row) {
        this.rows.push(row);
    }
    removeRow(row) {
        this.rows.filter(r => r !== row);
    }
    getRows(row) {
        const r = this.rows.find(r => r === row);
        return r;
    }
    clear() {
        this.rows = [];
    }
    count() {
        return this.rows.length;
    }
}
const student1 = {
    name: "Dave",
    grade: 6,
};
const student2 = {
    name: "John",
    grade: 3,
};
const student3 = {
    name: "Tayo",
    grade: 5,
};
const student4 = {
    name: "Ben",
    grade: 10,
};
const studentTable = new DataTable();
studentTable.addRow(student1);
class StoreService {
    items = [];
    create(item) {
        this.items.push(item);
        console.log("Created: " + (item.name ? item.name : "Order Item"));
    }
    findById(id) {
        const item = this.items.find(i => i.id === id);
        if (item) {
            return item;
        }
        throw new Error("Item Not Found");
    }
    update(id, updatedItem) {
        const item = this.findById(id);
        const index = this.items.indexOf(item, 0);
        this.items[index] = updatedItem;
        console.log(`Updated: ${typeof updatedItem} #${item.id}`);
    }
    delete(id) {
        console.log(typeof this.items);
        const item = this.findById(id);
        const index = this.items.indexOf(item, 0);
        this.items.splice(index, 1);
        console.log(`Deleted: ${typeof this.items[0]} #${id}`);
    }
    getAll() {
        return `
        Remaining ${typeof this.items}s:
        ${console.log(this.items)}`;
    }
    count() {
        return this.items.length;
    }
}
const productService = new StoreService();
const customerService = new StoreService();
const orderService = new StoreService();
productService.create({ id: 1, name: "Cookies" });
productService.create({ id: 2, name: "Laptop" });
productService.create({ id: 3, name: "Smartphone" });
productService.create({ id: 4, name: "Wireless Mouse" });
productService.create({ id: 5, name: "Mechanical Keyboard" });
productService.create({ id: 6, name: "Gaming Headset" });
productService.create({ id: 7, name: "USB Flash Drive" });
productService.create({ id: 8, name: "Portable Charger" });
customerService.create({ id: 1, name: "Stan" });
customerService.create({ id: 2, name: "Sarah" });
customerService.create({ id: 3, name: "Michael" });
customerService.create({ id: 4, name: "Emily" });
customerService.create({ id: 5, name: "David" });
orderService.create({ id: 1, product: "Laptop" });
orderService.create({ id: 2, product: "Cookies" });
orderService.create({ id: 3, product: "Smartphone" });
orderService.create({ id: 4, product: "Gaming Headset" });
orderService.create({ id: 5, product: "Mechanical Keyboard" });
orderService.create({ id: 6, product: "Portable Charger" });
orderService.create({ id: 7, product: "USB Flash Drive" });
orderService.create({ id: 8, product: "Wireless Mouse" });
orderService.create({ id: 9, product: "Laptop" });
orderService.create({ id: 10, product: "Smartphone" });
productService.create({ id: 9, name: "Electric Iron" });
productService.delete(1);
productService.update(3, { id: 3, name: "Cookie Cutter" });
console.log(customerService.findById(3));
orderService.delete(7);
console.log(productService.getAll());
console.log(customerService.getAll());
console.log(orderService.getAll());
console.log(`
    Products: ${productService.count()}
    Customers: ${customerService.count()}
    Orders: ${orderService.count()}
    Total Amount: ${productService.count() + customerService.count() + orderService.count()}`);
export {};
//# sourceMappingURL=main.js.map