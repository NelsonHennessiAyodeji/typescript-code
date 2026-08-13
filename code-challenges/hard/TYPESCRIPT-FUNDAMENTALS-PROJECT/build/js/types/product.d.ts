export declare enum ProductCategory {
    Electronics = 0,
    Clothing = 1,
    Food = 2,
    Drink = 3,
    Books = 4,
    Other = 5
}
export default interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    category: ProductCategory;
}
//# sourceMappingURL=product.d.ts.map