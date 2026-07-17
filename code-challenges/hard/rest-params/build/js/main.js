const product1 = {
    name: "Toys",
    quantity: 20,
    price: 10
};
const product2 = {
    name: "Drinks",
    quantity: 20,
    price: 10
};
const product3 = {
    name: "Food",
    quantity: 20,
    price: 10
};
// Calculate the total of all
const createInvoice = (customerName, ...products) => {
    customerName;
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i].price * products[i].quantity;
    }
    return total;
};
console.log(createInvoice("Steven", product1, product2, product3));
export {};
//# sourceMappingURL=main.js.map