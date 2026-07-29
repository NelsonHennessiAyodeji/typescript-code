// Generic Package Tracker
type Electronic = {
    name: string,
    warranty: number,
}

type Food = {
    name: string,
    expiryDate: string,
}

type Clothing = {
    name: string,
    size: string,
}

class Package<T> {
    private item: T;

    constructor(public trackingNumber: string, public destination: string, packageLoad: T) {
        this.item = packageLoad;
    }

    private getItems<I extends T>(item: I): string {
        let obj: string = "";
        for (const K in item) {
            obj += "\n" + K + " = " + item[K as keyof I];
        }
        return obj;
    }

    public displayPackage() {
        console.log(`
            Tracking Number: ${this.trackingNumber}
            Destination: ${this.destination}
            Item: {${this.getItems(this.item)}}
        `);
    }
}


const package1: Package<Food> = new Package<Food>("93F093H", "Lagos", {name: "Rice", expiryDate: "Monday, 2023"});
const package2: Package<Food> = new Package<Food>("76F093H", "Ibadan", {name: "Beans", expiryDate: "Monday, 2025"});

const package3: Package<Electronic> = new Package("36F093H", "Abuja", {name: "Fan", warranty: 1});
const package4: Package<Electronic> = new Package("46F093H", "Lagos", {name: "Charger", warranty: 4});

const package5: Package<Clothing> = new Package<Clothing>("19F093H", "Ogun", {name: "Gucci Bag", size: "2M"});
const package6: Package<Clothing> = new Package("28F093H", "Abuja", {name: "Versace Shoes", size: "S40"});

// package1.displayPackage();
// package3.displayPackage();
// package5.displayPackage();


//////////////////////////////////////////
// Generic API Response
interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T
}

type User = {
    name: string,
    age: number,
}

type Product = {
    name: string,
    price: number,
}

type Order = {
    address: string,
    product: Product,
}

const userResponse: ApiResponse<User> = {
    success: true,
    message: "User Successful",
    data: {name: "Jake", age: 4}
}

const productResponse: ApiResponse<Product> = {
    success: true,
    message: "Product Successful",
    data: {name: "Cup", price: 200}
}

const orderResponse: ApiResponse<Order> = {
    success: true,
    message: "Order Success",
    data: {address: "Lagos", product: productResponse.data}
}

const printEachResponse = <T>(data: ApiResponse<T>) => {
    for (const key in data) {
        console.log(data[key as keyof ApiResponse<T>]);
    }
}

printEachResponse(userResponse);
printEachResponse(productResponse);
printEachResponse(orderResponse);
