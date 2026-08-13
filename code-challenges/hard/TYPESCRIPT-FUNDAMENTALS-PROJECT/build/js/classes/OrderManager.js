import {} from "../types/order";
import { OrderStatus } from "../types/order";
import Repository from "./Repository";
export default class OrderManager {
    orderRepository = new Repository();
    static instance = new OrderManager();
    constructor() { }
    createOrder(id, userId, items, total, status, createdAt) {
        this.addOrder({ id, userId, items, total, status, createdAt });
    }
    getOrder(orderId) {
        const prod = this.orderRepository.findById(orderId);
        return prod;
    }
    cancelOrder(orderId) {
        const order = this.getOrder(orderId);
        if (order) {
            if ((order?.status === OrderStatus.Pending) ||
                (order?.status === OrderStatus.Processing)) {
                order.status = OrderStatus.Cancelled;
            }
        }
    }
    addOrder(order) {
        const ord = this.getOrder(order.id);
        if (!ord)
            this.orderRepository.add(order);
        else {
            console.log("Order already exists.");
        }
    }
    removeOrder(orderId) {
        const ord = this.getOrder(orderId);
        if (ord)
            this.orderRepository.remove(orderId);
        else {
            console.log("Order not found.");
        }
    }
    getAllOrders() {
        return this.orderRepository.getAll();
    }
    updateOrder(id, updates) {
        let ord = this.getOrder(id);
        if (ord)
            ord = { ...ord, ...updates };
        else {
            console.log("Order not found.");
        }
    }
    countOrders() {
        return this.orderRepository.count();
    }
    static getInstance() {
        return this.instance;
    }
}
//# sourceMappingURL=OrderManager.js.map