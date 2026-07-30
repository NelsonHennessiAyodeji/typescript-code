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
console.log(studentTable.getRows(student1));
class StoreService {
    items = [];
    create(item) {
        this.items.push(item);
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
    }
    delete(id) {
        const item = this.findById(id);
        const index = this.items.indexOf(item, 0);
        delete this.items[index];
    }
    getAll() {
        return this.items;
    }
    count() {
        return this.items.length;
    }
}
const productService = new StoreService();
const customerService = new StoreService();
const orderService = new StoreService();
productService.create({ id: 1, name: "Cookies" });
export {};
//# sourceMappingURL=main.js.map