const user1 = { id: 1, username: "Jay", email: "something1@gmail.com", age: 20, verified: true };
const user2 = { id: 2, username: "Dan", email: "something2@gmail.com", age: 23, verified: false };
const user3 = { id: 3, username: "Ben", email: "something3@gmail.com", age: 25, verified: true };
let users = [user1, user2, user3];
// This is wrong because I am only modifying the parameter object. 
// Oh and I am not really doing anything with the representing paramter (user).
// const updateUser = (user: User, update: Partial<User>) => {
//     user = {...user, ...update};
// }
const updateUser = (user, update) => {
    Object.assign(user, update);
};
updateUser(user1, { age: 50 });
updateUser(user2, { email: "super@gmail.com" });
updateUser(user3, { username: "Mike" });
const publicUser1 = { username: "Jay", email: "something1@gmail.com" };
const publicUser2 = { username: "Dan", email: "something2@gmail.com" };
const publicUser3 = { username: "Ben", email: "something3@gmail.com" };
let publicUsers = [publicUser1, publicUser2, publicUser3];
for (let i = 0; i < 3; i++) {
    console.log(publicUsers[i]);
}
const regUser = { username: "Dave", email: "Something@gmail.com", age: 24, verified: true };
const reqEmp = { id: 1, name: "Ayo", department: "ICT", phone: "999999" };
const config = { appName: "Whatapp", version: 2.5, apiURL: "somthing.com" };
let inventory = {
    milk: 20,
    toys: 10,
    drinks: 30,
    food: 40,
    snacks: 23,
};
const addStock = (productName, productStock) => {
    inventory[productName] = productStock;
};
const removeStock = (productName) => {
    delete inventory[productName];
};
const printInventory = () => {
    for (const key in inventory) {
        console.log(`${key}: ${inventory[key]}`);
    }
};
const cat1 = "Electronics";
const pay1 = "Cash";
const pay2 = "Transfer";
// const pay3: ExtractedPayment = "Cash"; // Does not work
/////////////////////////////////////////////////////////////////////////////////////////////////
// ReturnType<T>
function createUser() {
    return { id: 2, name: "Free" };
}
function createProduct() {
    return { id: 1, productName: "Coke", price: 20 };
}
function createOrder() {
    return { id: 1, orderStatus: "Sent", quantity: 20 };
}
// const cus: NoNullCustomer = null; // Cannot work
/////////////////////////////////////////////////////////////////////////////////////////////////
// Parameters<T>
function createInvoice(customer, amount, paid) {
    console.log(`${customer} has contributed ${amount} and is ${paid} that she has paid`);
}
const invArgs = ["Tay", 200, true];
createInvoice(...invArgs);
/////////////////////////////////////////////////////////////////////////////////////////////////
// ConstructorParameters
class Students {
    id;
    name;
    course;
    constructor(id, name, course) {
        this.id = id;
        this.name = name;
        this.course = course;
    }
}
const studeConst = [2, "James", "Accounting"];
/////////////////////////////////////////////////////////////////////////////////////////////////
// InstanceType<T>
class Product {
    constructor() { }
}
const p1 = new Product();
const t = "Admin";
console.log(t);
export {};
//# sourceMappingURL=main.js.map