export default class ProductManager {
    products = {};
    static instance = new ProductManager();
    constructor() { }
    getProduct(productId) {
        const prod = this.products[productId];
        return prod;
    }
    addProduct(product) {
        const prod = this.getProduct(product.id);
        if (!prod)
            this.products[product.id] = product;
        else {
            console.log("Product already exists.");
        }
    }
    removeProduct(productId) {
        const prod = this.getProduct(productId);
        if (prod)
            delete this.products[productId];
        else {
            console.log("Product not found.");
        }
    }
    getAllProducts() {
        let prodList = [];
        for (const key in this.products) {
            prodList.push(this.products[key]);
        }
        return prodList;
    }
    updateProduct(id, updates) {
        let prod = this.getProduct(id);
        if (prod)
            prod = { ...prod, ...updates };
        else {
            console.log("Product not found.");
        }
    }
    countProducts() {
        let count = 0;
        for (const key in this.products) {
            count++;
        }
        return count;
    }
    static getInstance() {
        return this.instance;
    }
}
//# sourceMappingURL=ProductManager.js.map