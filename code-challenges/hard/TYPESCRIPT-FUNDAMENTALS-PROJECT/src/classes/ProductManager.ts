import type Product from "../types/product";

type ProductObjType = {[key: number]: Product};

export default class ProductManager {
    private products: ProductObjType = {};
    private static instance: ProductManager = new ProductManager();
    private constructor(){}

    public getProduct(productId: number): (Product | undefined) {
        const prod = this.products[productId];
        return prod;
    }

    public addProduct(product: Product): void {
        const prod = this.getProduct(product.id);
       if (!prod) this.products[product.id] = product;
       else {console.log("Product already exists.");}
    }

    public removeProduct(productId: number): void {
        const prod = this.getProduct(productId);
        if (prod) delete this.products[productId];
        else {console.log("Product not found.");}
    }

    public getAllProducts(): Product[] {
        let prodList: Product[] = [];
        for (const key in this.products) {
            prodList.push(this.products[key]!);
        }
        return prodList;
    }

    public updateProduct(id: number, updates: Partial<Product>): void {
        let prod = this.getProduct(id);
        if (prod) prod = {...prod, ...updates};
        else {console.log("Product not found.");}
    }

    public countProducts(): number {
        let count: number = 0;
        for (const key in this.products) {
            count++;
        }
        return count;
    }

    public static getInstance(): ProductManager {
        return this.instance;
    }
}
