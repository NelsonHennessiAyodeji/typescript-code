import { type OrderItem } from "../types/order";
import { OrderStatus } from "../types/order";
import type Order from "../types/order";
export default class OrderManager {
    private orderRepository;
    private static instance;
    private constructor();
    createOrder(id: number, userId: number, items: OrderItem[], total: number, status: OrderStatus, createdAt: string): void;
    getOrder(orderId: number): (Order | undefined);
    cancelOrder(orderId: number): void;
    addOrder(order: Order): void;
    removeOrder(orderId: number): void;
    getAllOrders(): Order[];
    updateOrder(id: number, updates: Partial<Order>): void;
    countOrders(): number;
    static getInstance(): OrderManager;
}
//# sourceMappingURL=OrderManager.d.ts.map