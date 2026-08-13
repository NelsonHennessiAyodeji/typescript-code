export enum OrderStatus {
    Pending,
    Processing,
    Shipped,
    Delivered,
    Cancelled,
    Refunded,
}

export interface OrderItem {
    productId: number;
    productName: string;
    price: number;
    quantity: number;
}

export default interface Order {
    id: number;
    userId: number;
    items: OrderItem[];
    total: number;
    status: OrderStatus;
    createdAt: string;
}
