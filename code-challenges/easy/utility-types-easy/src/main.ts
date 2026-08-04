// Update User Profile
type User = {
    id: number;
    username: string;
    email: string;
    age: number;
    verified: boolean;
}

const user1: User = {id: 1, username: "Jay", email: "something1@gmail.com", age: 20, verified: true};
const user2: User = {id: 2, username: "Dan", email: "something2@gmail.com", age: 23, verified: false};
const user3: User = {id: 3, username: "Ben", email: "something3@gmail.com", age: 25, verified: true};

let users: User[] = [user1, user2, user3];

// This is wrong because I am only modifying the parameter object. 
// Oh and I am not really doing anything with the representing paramter (user).
// const updateUser = (user: User, update: Partial<User>) => {
//     user = {...user, ...update};
// }

const updateUser = (user: User, update: Partial<User>) => {
    Object.assign(user, update);
}

updateUser(user1, {age: 50});
updateUser(user2, {email: "super@gmail.com"});
updateUser(user3, {username: "Mike"});

// for (let i = 0; i < 3; i++) { 
//     console.log(users[i]);
// }



/////////////////////////////////////////////////////////////////////////////////////////////////
// Public API Response
type PublicUser = Pick<User, "email" | "username">;

const publicUser1: PublicUser = {username: "Jay", email: "something1@gmail.com"};
const publicUser2: PublicUser = {username: "Dan", email: "something2@gmail.com"};
const publicUser3: PublicUser = {username: "Ben", email: "something3@gmail.com"};

let publicUsers: PublicUser[] = [publicUser1, publicUser2, publicUser3];

for (let i = 0; i < 3; i++) { 
    console.log(publicUsers[i]);
}



/////////////////////////////////////////////////////////////////////////////////////////////////
// Registration Form
type User2 = {
    id: number;
    username: string;
    email: string;
    age: number;
    verified: boolean;
    createdAt: string;
    updatedAt: string;
}

type RegistrationForm = Omit<User2, "id" | "createdAt" | "updatedAt">;

const regUser: RegistrationForm = {username: "Dave", email: "Something@gmail.com", age: 24, verified: true};



/////////////////////////////////////////////////////////////////////////////////////////////////
// Employee Dashboard
type Employee = {
    id:number;
    name:string;
    department?:string;
    phone?:string;
}

type RequiredEmployee = Required<Employee>;
const reqEmp: RequiredEmployee = {id: 1, name: "Ayo", department: "ICT", phone: "999999"};



/////////////////////////////////////////////////////////////////////////////////////////////////
// Readonly Configuration
type Config = {
    appName: string,
    version: number,
    apiURL: string,
}

type ReadonlyConfig = Readonly<Config>;

const config: ReadonlyConfig = {appName: "Whatapp", version: 2.5, apiURL: "somthing.com"};

// config.apiURL = "";      // Cannot modify anymore



/////////////////////////////////////////////////////////////////////////////////////////////////
// Product Inventory
type ProductInventory = Record<string, number>;

let inventory: ProductInventory = {
    milk: 20,
    toys: 10,
    drinks: 30,
    food: 40,
    snacks: 23,
}

const addStock = (productName: string, productStock: number) => {
    inventory[productName] = productStock;
}

const removeStock = (productName: string) => {
    delete inventory[productName];
}

const printInventory = () => {
    for (const key in inventory) {
        console.log(`${key}: ${inventory[key]}`);
    }
}

// addStock("Coke", 20);
// addStock("Man", 20);
// addStock("Cake", 20);
// printInventory();
// removeStock("Man");
// removeStock("Cake");
// printInventory();



/////////////////////////////////////////////////////////////////////////////////////////////////
// Product Categories
type Category =
"Food"
|"Drink"
|"Medicine"
|"Electronics";

const cat1: Category = "Electronics";

type ExcludedCategory = Exclude<Category, "Medicine">;

// const cat2: ExcludedCategory = "Medicine"; Works no more



/////////////////////////////////////////////////////////////////////////////////////////////////
// Payment Methods
type Payment =
"Cash"
|"Card"
|"Transfer"
|"Crypto";

const pay1: Payment = "Cash";

type ExtractedPayment = Extract<Payment, "Card" | "Transfer">;

const pay2: ExtractedPayment = "Transfer";
// const pay3: ExtractedPayment = "Cash"; // Does not work


/////////////////////////////////////////////////////////////////////////////////////////////////
// ReturnType<T>
function createUser() {
    return {id: 2, name: "Free"};
}

function createProduct() {
    return {id: 1, productName: "Coke", price: 20};
}

function createOrder() {
    return {id: 1, orderStatus: "Sent", quantity: 20};
}

type UserType = ReturnType<typeof createUser>;
type ProductType = ReturnType<typeof createProduct>;
type OrderType = ReturnType<typeof createOrder>;



/////////////////////////////////////////////////////////////////////////////////////////////////
// NonNullable
type Customer =
string
|null
|undefined;

type NoNullCustomer = NonNullable<Customer>;
// const cus: NoNullCustomer = null; // Cannot work



/////////////////////////////////////////////////////////////////////////////////////////////////
// Parameters<T>
function createInvoice(customer:string, amount:number, paid:boolean){
    console.log(`${customer} has contributed ${amount} and is ${paid} that she has paid`);
}

type InvoiceArguments = Parameters<typeof createInvoice>
const invArgs: InvoiceArguments = ["Tay", 200, true];

createInvoice(...invArgs);



/////////////////////////////////////////////////////////////////////////////////////////////////
// ConstructorParameters
class Students {
    constructor(public id: number, public name: string, public course: string) {}
}

type StudentsConstructor = ConstructorParameters<typeof Students>;

const studeConst: StudentsConstructor = [2, "James", "Accounting"];



/////////////////////////////////////////////////////////////////////////////////////////////////
// InstanceType<T>
class Product {
    constructor() {}
}

type ProductType2 = InstanceType<typeof Product>;

const p1: ProductType2 = new Product();



/////////////////////////////////////////////////////////////////////////////////////////////////
// String Utility Types
type Role = "admin";
type CapitalRole = Capitalize<Role>;

const t: CapitalRole = "Admin";

console.log(t);

