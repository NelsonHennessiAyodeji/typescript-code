let cart = [];
// Add Item
function addItem(item) {
    cart.push(item.toLowerCase());
    console.log(`Added ${item}`);
}
// Remove Item
function removeItem(item) {
    const index = cart.indexOf(item.toLowerCase());
    if (index !== -1) {
        cart.splice(index, 1);
        console.log(`${item} removed`);
    }
    else {
        console.log(`${item} not found`);
    }
}
// Check if Item Exists
function itemExists(item) {
    return (cart.includes(item.toLowerCase()));
}
// Display Cart
function displayCart() {
    console.log(cart);
}
// Empty Cart
function emptyCart() {
    cart = [];
    console.log("Cart emptied...");
    displayCart();
}
addItem("Soda");
addItem("Cabbage");
addItem("Dates");
displayCart();
removeItem("Cabbage");
displayCart();
console.log(itemExists("Soda"));
emptyCart();
export {};
//# sourceMappingURL=main.js.map