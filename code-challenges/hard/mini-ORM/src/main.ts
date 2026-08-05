// Mini ORM
class DatabaseTable<T extends {id: number}> {
    private items: Map<number, T> = new Map();

    public insert(item: T): void {
        this.items.set(item.id, item);
    }

    public findById(id: number): (T | undefined) {
        const item = this.items.get(id);
        if (item) {
            return item;
        }
        return;
    }

    public findAll(): T[] {
        let arr: T[] = [];
        this.items.forEach(i => arr.push(i));
        return arr;
    }

    public update(id: number, updates: Partial<T>): void {
        let item = this.findById(id)!;
        this.items.set(id, {...item, ...updates});
    }

    public delete(id: number): void {
        this.items.delete(id);
    }

    public exists(id: number): boolean {
        let items = this.findById(id);
        if (items) return true;
        return false
    }

    public count(): number {
        return this.items.size;
    }

    public clear(): void {
        this.items = new Map();
    }
}

type User = {
    id: number,
    name: string,
    age: number,
    email: string,
    phone: number,
    address: string,
}

type Product = {
    id: number,
    name: string,
    price: number,
    stock: number,
}

type Order = {
    id: number,
    quantity: number,
    totalPrice: number,
    status: string,
}

const user1: User = {
    id: 1,
    name: "Ayo",
    age: 20,
    email: "dirt@gmail.com",
    phone: 99999,
    address: "Nigeria",
}

const product1: Product = {
    id: 1,
    name: "Cheese Ball",
    price: 23000,
    stock: 20,
}

const order1: Order = {
    id: 1,
    quantity: 10,
    totalPrice: 200,
    status: "Paid"
}

const user: DatabaseTable<User> = new DatabaseTable<User>();
const product: DatabaseTable<Product> = new DatabaseTable<Product>();
const order: DatabaseTable<Order> = new DatabaseTable<Order>();

user.insert(user1);
product.insert(product1);
order.insert(order1);

user.update(1, {age: 50});

console.log(product.exists(1));
console.log(order.exists(3));

product.delete(1);

console.log(user.findAll());
console.log(product.findAll());
console.log(order.findAll());
