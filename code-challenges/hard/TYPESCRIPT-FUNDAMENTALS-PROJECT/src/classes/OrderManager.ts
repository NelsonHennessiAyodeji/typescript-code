import {type OrderItem } from "../types/order";
import { OrderStatus } from "../types/order";
import type Order from "../types/order";
import Repository from "./Repository";

export default class OrderManager {
    private orderRepository: Repository<Order> = new Repository<Order>();
    private static instance: OrderManager = new OrderManager();
    private constructor(){}

    public createOrder(
        id: number, 
        userId: number, 
        items: OrderItem[], 
        total: number, 
        status: OrderStatus, 
        createdAt: string): void {
        this.addOrder({id, userId, items, total, status, createdAt});
    }

    public getOrder(orderId: number): (Order | undefined) {
        const prod = this.orderRepository.findById(orderId);
        return prod;
    }

    public cancelOrder(orderId: number): void {
        const order = this.getOrder(orderId);
        if (order) {
            if ((order?.status === OrderStatus.Pending) || 
            (order?.status === OrderStatus.Processing)) {
                order.status = OrderStatus.Cancelled;
            }
        }
    }

    public addOrder(order: Order): void {
        const ord = this.getOrder(order.id);
       if (!ord) this.orderRepository.add(order);
       else {console.log("Order already exists.");}
    }

    public removeOrder(orderId: number): void {
        const ord = this.getOrder(orderId);
        if (ord) this.orderRepository.remove(orderId);
        else {console.log("Order not found.");}
    }

    public getAllOrders(): Order[] {
        return this.orderRepository.getAll();
    }

    public updateOrder(id: number, updates: Partial<Order>): void {
        let ord = this.getOrder(id);
        if (ord) ord = {...ord, ...updates};
        else {console.log("Order not found.");}
    }

    public countOrders(): number {
        return this.orderRepository.count();
    }

    public static getInstance(): OrderManager {
        return this.instance;
    }
}
