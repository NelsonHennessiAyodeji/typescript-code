type Product = {
    name: string,
    quantity: number,
    price: number
}

const product1: Product = {
    name: "Toys",
    quantity: 20,
    price: 10
}

const product2: Product = {
    name: "Drinks",
    quantity: 20,
    price: 10
}

const product3: Product = {
    name: "Food",
    quantity: 20,
    price: 10
}

// Calculate the total of all
const createInvoice = (customerName: string, ...products: Product[]): number => {
    customerName;
    let total: number = 0;
    for (let i: number = 0; i < products.length; i++) {
        total += products[i]!.price * products[i]!.quantity;
    }
    return total;
}

console.log(createInvoice("Steven", product1, product2, product3));
