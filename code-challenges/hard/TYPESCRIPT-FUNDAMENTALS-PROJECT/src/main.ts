import Repository from "./classes/Repository.js";
import type User from "./types/user";
import {UserRole, UserStatus} from "./types/user.js";
import type Product from "./types/product";
import {ProductCategory} from "./types/product.js";
import type Order from "./types/order.js";
import { OrderStatus } from "./types/order.js";

const userRepository: Repository<User> = new Repository<User>();
const productRepository: Repository<Product> = new Repository<Product>();

const user1: User = {
    id: 1,
    name: "James",
    email: "Something@gmail.com",
    role: UserRole.Customer,
    status: UserStatus.Active,
    createdAt: new Date().toISOString(),
}

const user2: User = {
    id: 2,
    name: "Sarah",
    email: "sarah@gmail.com",
    role: UserRole.Customer,
    status: UserStatus.Active,
    createdAt: new Date().toISOString(),
};

const user3: User = {
    id: 3,
    name: "Michael",
    email: "michael@gmail.com",
    role: UserRole.Admin,
    status: UserStatus.Active,
    createdAt: new Date().toISOString(),
};

const user4: User = {
    id: 4,
    name: "Daniel",
    email: "daniel@gmail.com",
    role: UserRole.Customer,
    status: UserStatus.Inactive,
    createdAt: new Date().toISOString(),
};

const user5: User = {
    id: 5,
    name: "Emily",
    email: "emily@gmail.com",
    role: UserRole.Customer,
    status: UserStatus.Active,
    createdAt: new Date().toISOString(),
};

const product1: Product = {
    id: 1,
    name: "Coke",
    price: 20,
    quantity: 10,
    description: "Drink by Coca Cola",
    category: ProductCategory.Food,
}

const product2: Product = {
    id: 2,
    name: "Sprite",
    price: 20,
    quantity: 15,
    description: "Lemon-lime soft drink by Coca Cola",
    category: ProductCategory.Drink,
};

const product3: Product = {
    id: 3,
    name: "Bread",
    price: 15,
    quantity: 25,
    description: "Freshly baked bread",
    category: ProductCategory.Food,
};

const product4: Product = {
    id: 4,
    name: "Fanta",
    price: 20,
    quantity: 12,
    description: "Orange flavored soft drink by Coca Cola",
    category: ProductCategory.Drink,
};

const product5: Product = {
    id: 5,
    name: "Biscuits",
    price: 10,
    quantity: 30,
    description: "Crunchy chocolate biscuits",
    category: ProductCategory.Food,
};

userRepository.add(user1);
userRepository.add(user2);
userRepository.add(user3);
userRepository.add(user4);
userRepository.add(user5);

productRepository.add(product1);
productRepository.add(product2);
productRepository.add(product3);
productRepository.add(product4);
productRepository.add(product5);

console.log(userRepository.count());
console.log(productRepository.count());
