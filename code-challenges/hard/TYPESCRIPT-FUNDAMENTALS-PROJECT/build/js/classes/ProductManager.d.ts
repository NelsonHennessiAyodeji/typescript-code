import type Product from "../types/product";
export default class ProductManager {
    private products;
    private static instance;
    private constructor();
    getProduct(productId: number): (Product | undefined);
    addProduct(product: Product): void;
    removeProduct(productId: number): void;
    getAllProducts(): Product[];
    updateProduct(id: number, updates: Partial<Product>): void;
    countProducts(): number;
    static getInstance(): ProductManager;
}
//# sourceMappingURL=ProductManager.d.ts.map