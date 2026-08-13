export enum ProductCategory {
    Electronics,
    Clothing,
    Food,
    Drink,
    Books,
    Other,
}

export default interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    category: ProductCategory;
}
