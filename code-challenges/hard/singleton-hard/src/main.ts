// User Session Manager
class SessionManager {
    private currentUser: string = "";
    private token: string = '';
    private loggedIn: boolean = false;
    private static instance: SessionManager = new SessionManager();
    private constructor(){}

    public login(user: string): string {
        if (user === this.currentUser) return "Already logged in";
        this.currentUser = user;
        this.loggedIn = true;
        return (user + " has logged in");
    }

    public logout(): string {
        if (!this.loggedIn) return "Already logged out";
        const u = this.currentUser;
        this.currentUser = "";
        this.loggedIn = false;
        return (u + " has logged out");
    }

    public isLoggedIn(user?: string): boolean {
        if (user) return (user === this.currentUser);
        else return this.loggedIn;
    }

    public getCurrentUser(): string {
        if (this.currentUser) return this.currentUser;
        else return "There is no current user";
    }

    public static getInstnace(): SessionManager {
        return this.instance;
    }
}

const session: SessionManager = SessionManager.getInstnace();
// console.log(session.login("Dave"));
// console.log(session.isLoggedIn());
// console.log(session.isLoggedIn("Dan"));
// console.log(session.isLoggedIn("Dave"));
// console.log(session.login("Dave"));
// console.log(session.login("Dan"));
// console.log(session.getCurrentUser());
// console.log(session.logout());



///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Shopping Cart Manager
type Item = {
    id: number,
    name: string,
    price: number,
    quantity: number,
}

class CartManager {
    private items: Item[] = [];
    private static instance: CartManager = new CartManager();
    private constructor(){}

    addItem(item: Item): void {
        this.items.push(item);
    }

    public removeItem(itemId: number): void {
        this.items = this.items.filter(item => item.id !== itemId);
    }

    public getItem(itemId: number): (Item | undefined) {
        // const item = this.items.find(item => item.id);
        const item = this.items.find(item => item.id === itemId);
        if (item) return item;
        else console.log("Item not found!");
    }

    public increaseQuantity(itemId: number, quantityAmount: number): void {
        const item = this.items.find(item => item.id === itemId);
        if (item) item.quantity += quantityAmount;
    }

    public decreaseQuantity(itemId: number, quantityAmount: number): void {
        const item = this.items.find(item => item.id === itemId);
        if (item && ((item?.quantity?? 0) >= quantityAmount)) {
            item.quantity -= quantityAmount;
            if (item.quantity === 0) {
                this.removeItem(itemId);
            }
        } else {
            console.log("The item does not have this amount of quantities or does not exists");
        }
    }

    public calculateTotal(): number {
        let total: number = 0;
        this.items.forEach(item => total += (item.price * item.quantity));
        return total;
    }

    public showCart(): void {
        this.items.forEach(item => console.log(item));
    }

    public clearCart(): void {
        this.items = [];
    }

    public static getInstance(): CartManager {
        return this.instance;
    }
}

const item1: Item = {
    id: 1,
    name: "Soda",
    price: 20,
    quantity: 10,
}

const item2: Item = {
    id: 2,
    name: "Mayo",
    price: 10,
    quantity: 20,
}

const item3: Item = {
    id: 3,
    name: "Pizza",
    price: 5,
    quantity: 10,
}

const item4: Item = {
    id: 4,
    name: "Burger",
    price: 10,
    quantity: 20,
}

const cart: CartManager = CartManager.getInstance();
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



///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Cache Manager
class CacheManager {
    private cache: Map<string, unknown> = new Map();
    private static instance: CacheManager = new CacheManager();
    private constructor(){}

    public set(id: string, item: unknown): void {
        this.cache.set(id, item);
    }

    public get(id: string): void {
        this.cache.get(id);
    }

    public remove(id: string): void {
        this.cache.delete(id);
    }

    public clear(): void {
        this.cache.clear();
    }

    public count(): void {
        this.cache.size;
    }

    public static getInstance(): CacheManager {
        return this.instance;
    }
}

const cache: CacheManager = CacheManager.getInstance();

// cache.set("user", {name: "James"});
// cache.set("products", {name: "products"});



///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Authentication System
class AuthManager {
    private users: string[] = [];
    private loggedInUser: string = "";
    private token: string = "";
    private static instance: AuthManager = new AuthManager();
    private constructor(){};

    // register()

    // login()

    // logout()

    // changePassword()

    // showUsers()
}
