class Package {
    trackingNumber;
    destination;
    item;
    constructor(trackingNumber, destination, packageLoad) {
        this.trackingNumber = trackingNumber;
        this.destination = destination;
        this.item = packageLoad;
    }
    getItems(item) {
        let obj = "";
        for (const K in item) {
            obj += "\n" + K + " = " + item[K];
        }
        return obj;
    }
    displayPackage() {
        console.log(`
            Tracking Number: ${this.trackingNumber}
            Destination: ${this.destination}
            Item: {${this.getItems(this.item)}}
        `);
    }
}
const package1 = new Package("93F093H", "Lagos", { name: "Rice", expiryDate: "Monday, 2023" });
const package2 = new Package("76F093H", "Ibadan", { name: "Beans", expiryDate: "Monday, 2025" });
const package3 = new Package("36F093H", "Abuja", { name: "Fan", warranty: 1 });
const package4 = new Package("46F093H", "Lagos", { name: "Charger", warranty: 4 });
const package5 = new Package("19F093H", "Ogun", { name: "Gucci Bag", size: "2M" });
const package6 = new Package("28F093H", "Abuja", { name: "Versace Shoes", size: "S40" });
const userResponse = {
    success: true,
    message: "User Successful",
    data: { name: "Jake", age: 4 }
};
const productResponse = {
    success: true,
    message: "Product Successful",
    data: { name: "Cup", price: 200 }
};
const orderResponse = {
    success: true,
    message: "Order Success",
    data: { address: "Lagos", product: productResponse.data }
};
const printEachResponse = (data) => {
    for (const key in data) {
        console.log(data[key]);
    }
};
printEachResponse(userResponse);
printEachResponse(productResponse);
printEachResponse(orderResponse);
export {};
//# sourceMappingURL=main.js.map