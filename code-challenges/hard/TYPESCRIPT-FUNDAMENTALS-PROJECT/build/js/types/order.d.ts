export declare enum OrderStatus {
    Pending = 0,
    Processing = 1,
    Shipped = 2,
    Delivered = 3,
    Cancelled = 4,
    Refunded = 5
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
//# sourceMappingURL=order.d.ts.map