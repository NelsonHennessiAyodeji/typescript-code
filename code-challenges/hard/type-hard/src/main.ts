type Order = {
    customerName: string,
    orderId: number;
    items: string[];
    totalPrice: number,
    paid: boolean
}

const order1: Order = {
    customerName: "Raul",
    orderId: 101,
    items: ["Cup", "Spoon"],
    totalPrice: 200,
    paid: false,
}

const order2: Order = {
    customerName: "Paul",
    orderId: 102,
    items: ["Tea", "Ropes"],
    totalPrice: 120,
    paid: false,
}

const orderList: Order[] = [order1, order2];

// Mark order as paid
const markPaid = (order: Order) => {
    order.paid = true;
}

// Calculate Total
const calculateTotal = (orders: Order[]) => {
    let total: number = 0;
    for (let i: number = 0; i < orders.length; i++) {
        total += (orderList[i]?.totalPrice ?? 0);
    }

    console.log(total);    
}

// Print receipt
const printReceipt = (order: Order) => {
    console.log(order);
}

markPaid(order1);
printReceipt(order1);
calculateTotal(orderList);
printReceipt(order2);