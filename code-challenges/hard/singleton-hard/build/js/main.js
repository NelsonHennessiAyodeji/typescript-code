// User Session Manager
class SessionManager {
    currentUser = "";
    token = '';
    loggedIn = false;
    static instance = new SessionManager();
    constructor() { }
    login(user) {
        if (user === this.currentUser)
            return "Already logged in";
        this.currentUser = user;
        this.loggedIn = true;
        return (user + " has logged in");
    }
    logout() {
        if (!this.loggedIn)
            return "Already logged out";
        const u = this.currentUser;
        this.currentUser = "";
        this.loggedIn = false;
        return (u + " has logged out");
    }
    isLoggedIn(user) {
        if (user)
            return (user === this.currentUser);
        else
            return this.loggedIn;
    }
    getCurrentUser() {
        if (this.currentUser)
            return this.currentUser;
        else
            return "There is no current user";
    }
    static getInstnace() {
        return this.instance;
    }
}
const session = SessionManager.getInstnace();
class CartManager {
    items = [];
    static instance = new CartManager();
    constructor() { }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
    }
    getItem(itemId) {
        // const item = this.items.find(item => item.id);
        const item = this.items.find(item => item.id === itemId);
        if (item)
            return item;
        else
            console.log("Item not found!");
    }
    increaseQuantity(itemId, quantityAmount) {
        const item = this.items.find(item => item.id === itemId);
        if (item)
            item.quantity += quantityAmount;
    }
    decreaseQuantity(itemId, quantityAmount) {
        const item = this.items.find(item => item.id === itemId);
        if (item && ((item?.quantity ?? 0) >= quantityAmount)) {
            item.quantity -= quantityAmount;
            if (item.quantity === 0) {
                this.removeItem(itemId);
            }
        }
        else {
            console.log("The item does not have this amount of quantities or does not exists");
        }
    }
    calculateTotal() {
        let total = 0;
        this.items.forEach(item => total += (item.price * item.quantity));
        return total;
    }
    showCart() {
        this.items.forEach(item => console.log(item));
    }
    clearCart() {
        this.items = [];
    }
    static getInstance() {
        return this.instance;
    }
}
const item1 = {
    id: 1,
    name: "Soda",
    price: 20,
    quantity: 10,
};
const item2 = {
    id: 2,
    name: "Mayo",
    price: 10,
    quantity: 20,
};
const item3 = {
    id: 3,
    name: "Pizza",
    price: 5,
    quantity: 10,
};
const item4 = {
    id: 4,
    name: "Burger",
    price: 10,
    quantity: 20,
};
const cart = CartManager.getInstance();
// cart.addItem(item1);
// cart.addItem(item2);
// cart.addItem(item3);
// cart.addItem(item4);
// cart.showCart();
// cart.removeItem(4);
// cart.showCart();
// cart.increaseQuantity(3, 10);
// cart.showCart();
// cart.decreaseQuantity(2, 10);
// console.log(cart.calculateTotal());
// cart.clearCart();
// cart.showCart();
///////////////////////////////////////////////////////////////////////////////////////////////////////
// Cache Manager
class CacheManager {
    cache = new Map();
    static instance = new CacheManager();
    constructor() { }
    set(id, item) {
        this.cache.set(id, item);
    }
    get(id) {
        this.cache.get(id);
    }
    remove(id) {
        this.cache.delete(id);
    }
    clear() {
        this.cache.clear();
    }
    count() {
        this.cache.size;
    }
    static getInstance() {
        return this.instance;
    }
}
const cache = CacheManager.getInstance();
cache.set("user", { name: "James" });
cache.set("products", { name: "products" });
export {};
//# sourceMappingURL=main.js.map