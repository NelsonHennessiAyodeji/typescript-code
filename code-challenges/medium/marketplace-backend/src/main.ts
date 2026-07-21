type Product = {
    id: number,
    name: string,
    price: number,
    category: Category,
}

type Customer = {
    firstName: string,
    lastName: string,
    address: Address,
}

type Order = {
    product: Product,
    quantity: number,
    orderStatus: OrderStatus,
}

type Address = {
    street: string,
    country: string,
}

type Role = "User" | "Admin";

interface Seller {
    firstName: string;
    lastName: string;
    brandName: string;
    address: Address;
}

interface Review {
    product: Product;
    stars: number;
}

enum Category {
    "Food",
    "Drink"
}

enum OrderStatus {
    "Successful",
    "Delivered",
    "Failed",
    "Pending"
}

let PaymentType: "Card" | "Cash" | "Transfer";
let UserRole: Role;

// [average rating, total review] of all
const ReviewSummary: [number, string] = [4.2, "10 Reviews"];




//////////////////////////////// Populated Data ////////////////////////////////////
// Products
const product1: Product = {
    id: 1,
    name: "Milk",
    price: 10,
    category: Category.Food,
};

const product2: Product = {
    id: 2,
    name: "Bread",
    price: 8,
    category: Category.Food,
};

const product3: Product = {
    id: 3,
    name: "Rice",
    price: 35,
    category: Category.Food,
};

const product4: Product = {
    id: 4,
    name: "Apple Juice",
    price: 15,
    category: Category.Drink,
};

const product5: Product = {
    id: 5,
    name: "Orange Juice",
    price: 18,
    category: Category.Drink,
};

const product6: Product = {
    id: 6,
    name: "Water",
    price: 5,
    category: Category.Drink,
};

const product7: Product = {
    id: 7,
    name: "Chicken",
    price: 40,
    category: Category.Food,
};

const product8: Product = {
    id: 8,
    name: "Coffee",
    price: 22,
    category: Category.Drink,
};

const product9: Product = {
    id: 9,
    name: "Tea",
    price: 12,
    category: Category.Drink,
};

const product10: Product = {
    id: 10,
    name: "Eggs",
    price: 16,
    category: Category.Food,
};

let products: Product[] = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9,
    product10
]

// Addresses
const address1: Address = {
    street: "12 Allen Avenue",
    country: "Nigeria",
};

const address2: Address = {
    street: "55 Admiralty Way",
    country: "Nigeria",
};

const address3: Address = {
    street: "101 Oxford Street",
    country: "United Kingdom",
};

const address4: Address = {
    street: "8 Main Street",
    country: "Canada",
};

const address5: Address = {
    street: "77 Victoria Island",
    country: "Nigeria",
};

// Customers
const customer1: Customer = {
    firstName: "John",
    lastName: "Doe",
    address: address1,
};

const customer2: Customer = {
    firstName: "Sarah",
    lastName: "Smith",
    address: address2,
};

const customer3: Customer = {
    firstName: "Michael",
    lastName: "Johnson",
    address: address3,
};

const customer4: Customer = {
    firstName: "Grace",
    lastName: "Williams",
    address: address4,
};

const customer5: Customer = {
    firstName: "David",
    lastName: "Brown",
    address: address5,
};

let customers: Customer[] = [
    customer1,
    customer2,
    customer3,
    customer4,
    customer5
];

// Sellers
const seller1: Seller = {
    firstName: "James",
    lastName: "Walker",
    brandName: "Fresh Mart",
    address: address1,
};

const seller2: Seller = {
    firstName: "Sophia",
    lastName: "Wilson",
    brandName: "Daily Foods",
    address: address2,
};

const seller3: Seller = {
    firstName: "Daniel",
    lastName: "Taylor",
    brandName: "Juicy Drinks",
    address: address3,
};

const seller4: Seller = {
    firstName: "Emma",
    lastName: "Thomas",
    brandName: "Coffee Hub",
    address: address4,
};

const seller5: Seller = {
    firstName: "Henry",
    lastName: "White",
    brandName: "Healthy Choice",
    address: address5,
};

let sellers: Seller[] = [
    seller1,
    seller2,
    seller3,
    seller4,
    seller5
];

// Orders
const order1: Order = {
    product: product1,
    quantity: 2,
    orderStatus: OrderStatus.Successful,
};

const order2: Order = {
    product: product2,
    quantity: 5,
    orderStatus: OrderStatus.Pending,
};

const order3: Order = {
    product: product3,
    quantity: 1,
    orderStatus: OrderStatus.Delivered,
};

const order4: Order = {
    product: product4,
    quantity: 4,
    orderStatus: OrderStatus.Successful,
};

const order5: Order = {
    product: product5,
    quantity: 6,
    orderStatus: OrderStatus.Failed,
};

const order6: Order = {
    product: product6,
    quantity: 8,
    orderStatus: OrderStatus.Pending,
};

const order7: Order = {
    product: product7,
    quantity: 2,
    orderStatus: OrderStatus.Delivered,
};

const order8: Order = {
    product: product8,
    quantity: 3,
    orderStatus: OrderStatus.Successful,
};

const order9: Order = {
    product: product9,
    quantity: 10,
    orderStatus: OrderStatus.Pending,
};

const order10: Order = {
    product: product10,
    quantity: 12,
    orderStatus: OrderStatus.Delivered,
};

let orders: Order[] = [
    order1,
    order2,
    order3,
    order4,
    order5,
    order6,
    order7,
    order8,
    order9,
    order10
];

// Reviews
const review1: Review = { product: product1, stars: 5 };
const review2: Review = { product: product2, stars: 4 };
const review3: Review = { product: product3, stars: 5 };
const review4: Review = { product: product4, stars: 3 };
const review5: Review = { product: product5, stars: 4 };
const review6: Review = { product: product6, stars: 5 };
const review7: Review = { product: product7, stars: 2 };
const review8: Review = { product: product8, stars: 5 };
const review9: Review = { product: product9, stars: 4 };
const review10: Review = { product: product10, stars: 5 };

let reviews: Review[] = [
    review1,
    review2,
    review3,
    review4,
    review5,
    review6,
    review7,
    review8,
    review9,
    review10
];

let shoppingCart: Product[] = [];


///////////////////////////// Functions //////////////////////////////
// Register customers
const registerCustomer = (firstName: string, lastName: string, address: Address): Customer[] => {
    const customer: Customer = {
        firstName,
        lastName,
        address
    }
    customers.push(customer);
    
    return customers;
}

// Register sellers
const registerSeller = (firstName: string, lastName: string, brandName: string, address: Address): Seller[] => {
    const seller: Seller = {
        firstName,
        lastName,
        brandName,
        address
    }
    sellers.push(seller);
    
    return sellers;
}

// Find Product by ID
// Note thta i am coding this part after coding other parts without it, and i am not refactoring
const findProductById = (productId: number): Product => {
    const product = products.find(p => p.id === productId);
    if (product) {
        return product;
    } else {
        throw new Error("Product not found");
    }
}

// Add products
const addProducts = (name: string, price: number, category: Category): Product[] => {
    const id: number = products.length + 1;
    const product: Product = {
        id,
        name,
        price,
        category
    }
    products.push(product);

    return products;
}

// Edit products
const editProduct = (id: number, name: string, price: number, category: Category): (Product[] | never) => {
    const product = products.find(p => p.id === id);
    const update = {
        name,
        price,
        category
    }

    if (product) {
        Object.assign(product, update);
        return products;
    } else {
        throw new Error(`Product of id ${id} cannot be found`);
    }
}
// AI These two
// Remove products
const removeProduct = (id: number): Product[] => {
    const productList = products.filter(p => p.id !== id);
    return productList;
}

// Search products by name
const searchProductByName = (productName: string): (Product | String) => {
    const product = products.find(p => p.name === productName);
    if (product!) {
        return product;
    } else {
        return `Product of name ${productName} cannot be found`;
    }
}

// Search products by category
const searchProductByCategory = (productCategory: Category): (Product[]) => {
    const productList = products.filter(p => p.category === productCategory);

    if (productList!) {
        return productList;
    } else {
        throw new Error(`no product of category ${productCategory} can be found`);
    }
}

// Search price range.
const searchProductByPriceRange = (priceFrom: number, priceTo: number): (Product[] | string) => {
    const productList = products.filter(p => (p.price >= priceFrom) && (p.price <= priceTo));

    if (productList!) {
        return productList;
    } else {
        return `Product with the prices of ${priceFrom} to ${priceTo} cannot be found`;
    }
}

// Add products to a shopping cart.
const addToCart = (...prodcuctIdList: number[]): Product[] => {
    for (let i: number = 0; i < prodcuctIdList.length; i++) {
        const id = prodcuctIdList[i];
        const product = products.find(p => (p.id === id));
        if (product!) {
            shoppingCart.push(product);
        }
    }

    return shoppingCart;
}

// Checkout with only valid payment methods (literal types) and 
// Allow gift messages using optional parameters
const checkOutValidPayment = (order: Order, paymentType: ("Card" | "Cash" | "Transfer"), giftMsg?: string) => {
    if (paymentType && order) {
        if (giftMsg) console.log(giftMsg);
        order.orderStatus = OrderStatus.Successful;
    } else {
        throw new Error("Error in payment");
    }
}

// Generate invoices using rest parameters
// const generateInvoice = (...odrer: [odrer: Product, quantity: number, orderStatus: OrderStatus][]): Order => {

// }
const generateInvoice = (...orderList: [Product, number, OrderStatus][]): Order[] => {
    for (let i: number = 0; i < orderList.length; i++) {
        const odrerObj = orderList[i]!;
        const newOrder: Order = Object.create(odrerObj);
        orders.push(newOrder);
    }

    return orders;
}

// Apply discounts with default parameters.
const applyDiscounts = (discount: number = 0, product: Product) => {
    product.price -= discount;
}

// Display sales statistics:
const getStatistics = (): void => {
    // Total products
    const totalProducts = products.length;

    // Total customers
    const totalCustomers = customers.length;

    // Total revenue
    const completedPayments = orders.filter(p => (p.orderStatus === OrderStatus.Successful) || (p.orderStatus === OrderStatus.Delivered));
    // const totalOrders = completedPayments.reduce((prev, curr) => prev.product.price + curr.product.price);
    let totalRevenue = 0;
    for (let i: number = 0; i < completedPayments.length; i++) {
        totalRevenue += (completedPayments[i]!.product.price * completedPayments[i]!.quantity);
    }

    // Best-selling product
    let bestSellingProducts: (Product[] | string) = [];
    let highest = reviews.filter(r => r.stars === 5);
    if (highest) {
        for (let i: number = 0; i < highest.length; i++) {
            bestSellingProducts.push(highest[i]?.product!);
        }
    } else if (highest === null) {
        highest = reviews.filter(r => r.stars === 4);
        if (highest) {
            for (let i: number = 0; i < highest.length; i++) {
            bestSellingProducts.push(highest[i]?.product!);
            }
        } else {
            bestSellingProducts = "No best seller... Whump Whump!!"
        }
    }

    // Average order value
}

