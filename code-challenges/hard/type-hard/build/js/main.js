const order1 = {
    customerName: "Raul",
    orderId: 101,
    items: ["Cup", "Spoon"],
    totalPrice: 200,
    paid: false,
};
const order2 = {
    customerName: "Paul",
    orderId: 102,
    items: ["Tea", "Ropes"],
    totalPrice: 120,
    paid: false,
};
const orderList = [order1, order2];
// Mark order as paid
const markPaid = (order) => {
    order.paid = true;
};
// Calculate Total
const calculateTotal = (orders) => {
    let total = 0;
    for (let i = 0; i < orders.length; i++) {
        total += (orderList[i]?.totalPrice ?? 0);
    }
    console.log(total);
};
// Print receipt
const printReceipt = (order) => {
    console.log(order);
};
markPaid(order1);
printReceipt(order1);
calculateTotal(orderList);
printReceipt(order2);
export {};
//# sourceMappingURL=main.js.map