// Mini E-Commerce Admin System
type Product = {
    id: number,
    name: string,
    price: number,
    stock: number,
    category: string,
    destination: string,
}

type Customer = {
    id: number,
    name: string,
    age: number,
    email: string,
    phone: number,
    address: string,
    createdAt: string,
    updatedAt: string,
}

type Order = {
    id: string,
    quantity: number,
    customer: Customer,
    product: Product,
    totalPrice: number,
    status: string,
}

type Admin = {
    id: number,
    name: string,
    age: number,
    email: string,
    phone: string,
    department: string
}

type PublicCustomer = Pick<Customer, "id" | "name">;

type RegistrationForm = Omit <Customer, "id" | "createdAt" | "updatedAt">

type Config = {
    appName: string,
    version: number,
    apiURL: string,
}

type ReadonlyConfig = Readonly<Config>;


class Repository <T extends {id: number}> {
    private repo: Map<number, T> = new Map();

    public add(object: T): void {
        const id = this.repo.size + 1;
        this.repo.set(id, object);
    }

    public remove(id: number): void {
        this.repo.delete(id);
    }

    public update(id: number, updates: Partial<T>): void {
        let object = this.repo.get(id)!;
        object = {...object, ...updates}
    }

    public getById(id: number): (T | undefined) {
        return this.repo.get(id);
    }

    public getAll(): T[] {
        let arr: T[] = [];
        this.repo.forEach(i => arr.push(i));

        return arr;
    }
}

const config: ReadonlyConfig = {appName: "Whatapp", version: 2.5, apiURL: "somthing.com"};

const mergeUpdates = <T>(original: T, updates: Partial<T>): T => {
    return {...original, ...updates};
}

const user: Customer = {
    id: 1,
    name: "James",
    age: 20,
    email: "something@gmail.com",
    address: "Lagos, Nigeria",
    phone: 9999999,
    createdAt: "now",
    updatedAt: "now",
}

console.log(user);
console.log(mergeUpdates(user, {id: 2, name: "Dniel"}));
