// Shopping Cart
// type Cart = {
//     [keys: string]: number;
let shoppingCart = {
    Rice: 4,
    Beans: 2,
    Milk: 1,
};
// Add items to cart
function addItem(keyName, value) {
    shoppingCart[keyName] = value;
}
// Remove an item
function removeItem(keyName) {
    delete shoppingCart[keyName];
}
// Print cart
function printCart() {
    for (const key in shoppingCart) {
        console.log(`${key}: ${shoppingCart[key]}`);
    }
}
// Count total 
function totalItems() {
    let total = 0;
    for (const key in shoppingCart) {
        total++;
    }
    console.log(total);
}
addItem("Coke", 89);
removeItem("Milk");
totalItems();
printCart();
const country = {
    NGA: 10,
    USA: 20,
    BRT: 40,
    IND: 49,
    CND: 84,
    RSA: 38,
    CNA: 50
};
// Largest population
const largetPopulation = () => {
    let largest = 0;
    for (const count in country) {
        if (country[count] >= largest) {
            largest = country[count];
        }
    }
    return largest;
};
// Smallest population
const smallestPopulation = () => {
    let smallest = 100;
    for (const count in country) {
        if (country[count] <= smallest) {
            smallest = country[count];
        }
    }
    return smallest;
};
// Average population
const averagePopulation = () => {
    let average = 0;
    let length = 0;
    for (const count in country) {
        average += country[count];
        length++;
    }
    average = average / length;
    return average;
};
console.log(largetPopulation());
console.log(smallestPopulation());
console.log(averagePopulation());
export {};
//# sourceMappingURL=main.js.map