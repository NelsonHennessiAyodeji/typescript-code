import Repository from "./classes/Repository.js";
import { UserRole, UserStatus } from "./types/user.js";
import { ProductCategory } from "./types/product.js";
import { OrderStatus } from "./types/order.js";
const userRepository = new Repository();
const productRepository = new Repository();
const user1 = {
    id: 1,
    name: "James",
    email: "Something@gmail.com",
    role: UserRole.Customer,
    status: UserStatus.Active,
    createdAt: new Date().toISOString(),
};
const user2 = {
    id: 2,
    name: "Sarah",
    email: "sarah@gmail.com",
    role: UserRole.Customer,
    status: UserStatus.Active,
    createdAt: new Date().toISOString(),
};
const user3 = {
    id: 3,
    name: "Michael",
    email: "michael@gmail.com",
    role: UserRole.Admin,
    status: UserStatus.Active,
    createdAt: new Date().toISOString(),
};
const user4 = {
    id: 4,
    name: "Daniel",
    email: "daniel@gmail.com",
    role: UserRole.Customer,
    status: UserStatus.Inactive,
    createdAt: new Date().toISOString(),
};
const user5 = {
    id: 5,
    name: "Emily",
    email: "emily@gmail.com",
    role: UserRole.Customer,
    status: UserStatus.Active,
    createdAt: new Date().toISOString(),
};
const product1 = {
    id: 1,
    name: "Coke",
    price: 20,
    quantity: 10,
    description: "Drink by Coca Cola",
    category: ProductCategory.Food,
};
const product2 = {
    id: 2,
    name: "Sprite",
    price: 20,
    quantity: 15,
    description: "Lemon-lime soft drink by Coca Cola",
    category: ProductCategory.Drink,
};
const product3 = {
    id: 3,
    name: "Bread",
    price: 15,
    quantity: 25,
    description: "Freshly baked bread",
    category: ProductCategory.Food,
};
const product4 = {
    id: 4,
    name: "Fanta",
    price: 20,
    quantity: 12,
    description: "Orange flavored soft drink by Coca Cola",
    category: ProductCategory.Drink,
};
const product5 = {
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
//# sourceMappingURL=main.js.map