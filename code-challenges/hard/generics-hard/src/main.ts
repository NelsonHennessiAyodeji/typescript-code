// Generic Cache System
class Cache<T> {
    private dataStore = new Map<string, T>();

    public save(name: string, data: T): void {
        this.dataStore.set(name, data);
    }

    public get(name: string): (T | undefined) {
        return this.dataStore.get(name);
    }

    public remove(name: string): void {
        this.dataStore.delete(name);
    }

    public clear(): void {
        this.dataStore.clear();
    }

    public count(): number {
        return this.dataStore.size;
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

const user1: User = {
    id: 1,
    name: "Dave",
    age: 20,
}

const userCache: Cache<User> = new Cache();
userCache.save("user1", user1);
// console.log(userCache.get("user1"));
// // userCache.remove("user1");
// console.log(userCache.get("user1"));


//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Generic Event Bus
type OrderCreated = {
    food: string,
    price: number,
}

type PaymentSuccessful = {
    card: string,
    food: string,
    amount: number,
}

type DriverAssigned = {
    driver: string,
    destination: string,
    distance: number,
}

class Events<T> {
    constructor(public eventName: string, public payload: T, public createdAt: string) {
    }

    public publish() {
        console.log(`
        Event ${this.eventName} created at ${this.createdAt}
        Info:
        ${JSON.stringify(this.payload, null, 2)}
        `);
    }
}

const event1 = new Events<OrderCreated>(
    "Order Created",
    {
        food: "Burger",
        price: 3500,
    },
    "2026-07-30 16:45"
);

const event2 = new Events<OrderCreated>(
    "Order Created",
    {
        food: "Pepperoni Pizza",
        price: 7000,
    },
    "2026-07-30 16:50"
);

const event3 = new Events<PaymentSuccessful>(
    "Payment Successful",
    {
        card: "**** **** **** 4521",
        food: "Burger",
        amount: 3500,
    },
    "2026-07-30 16:46"
);

const event4 = new Events<PaymentSuccessful>(
    "Payment Successful",
    {
        card: "**** **** **** 9876",
        food: "Pepperoni Pizza",
        amount: 7000,
    },
    "2026-07-30 16:51"
);

const event5 = new Events<DriverAssigned>(
    "Driver Assigned",
    {
        driver: "Michael Johnson",
        destination: "Victoria Island",
        distance: 8.2,
    },
    "2026-07-30 16:47"
);

const event6 = new Events<DriverAssigned>(
    "Driver Assigned",
    {
        driver: "Sarah Williams",
        destination: "Lekki Phase 1",
        distance: 12.5,
    },
    "2026-07-30 16:52"
);

// Store all events
const eventBus: Events<OrderCreated | PaymentSuccessful | DriverAssigned>[] = [
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
class DataTable<T> {
    private rows: T[] = [];

    public addRow(row: T): void {
        this.rows.push(row);
    }

    public removeRow(row: T): void {
        this.rows.filter(r => r !== row);
    }

    public getRows(row: T): (T | undefined) {
        const r = this.rows.find(r => r === row);
        return r;
    }

    public clear(): void {
        this.rows = [];
    }

    public count(): number {
        return this.rows.length;
    }
}

type Student = {
    name: string,
    grade: number,
}

type Teachers = {
    name: string,
    course: string,
}

const student1: Student = {
    name: "Dave",
    grade: 6,
}

const student2: Student = {
    name: "John",
    grade: 3,
}

const student3: Student = {
    name: "Tayo",
    grade: 5,
}

const student4: Student = {
    name: "Ben",
    grade: 10,
}

const studentTable: DataTable<Student> = new DataTable<Student>();
studentTable.addRow(student1);
// console.log(studentTable.getRows(student1));



//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Generic E-commerce Service
interface Entity {
    id: number;
    name?: string
}

type Product = {
    id: number,
    name: string,
}

type Customer = {
    id: number,
    name: string,
}

type Order = {
    id: number,
    product: string,
}

type Category = {
    id: number,
    name: string,
}

type Review = {
    id: number,
    msg: string,
}

class StoreService<T extends Entity> {
    private items: T[] = [];

    public create(item: T): void {
        this.items.push(item);
        console.log("Created: " + (item.name? item.name : "Order Item"));
    }

    public findById(id: number): (T | undefined) {
        const item = this.items.find(i => i.id === id);
        if (item) {
            return item
        }
        throw new Error("Item Not Found");
    }

    public update(id: number, updatedItem: T): void {
        const item = this.findById(id);
        const index = this.items.indexOf(item!, 0);
        this.items[index] = updatedItem;
        console.log(`Updated: ${typeof updatedItem} #${item!.id}`);
    }

    public delete(id: number): void {
        console.log(typeof this.items);
        
        const item = this.findById(id);
        const index = this.items.indexOf(item!, 0);
        this.items.splice(index, 1);
        console.log(`Deleted: ${typeof this.items[0]} #${id}`);
    }

    public getAll(): string {
        return `
        Remaining ${typeof this.items}s:
        ${console.log(this.items)}`;
    }

    public count(): number {
        return this.items.length;
    }
}

const productService: StoreService<Product> = new StoreService<Product>();

const customerService: StoreService<Customer> = new StoreService<Customer>();

const orderService: StoreService<Order> = new StoreService<Order>();

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
productService.update(3, { id: 3, name: "Cookie Cutter"});
console.log(customerService.findById(3));
orderService.delete(7);
console.log(productService.getAll());
console.log(customerService.getAll());
console.log(orderService.getAll());
console.log(`
    Products: ${productService.count()}
    Customers: ${customerService.count()}
    Orders: ${orderService.count()}
    Total Amount: ${productService.count() + customerService.count() + orderService.count()}`
);
