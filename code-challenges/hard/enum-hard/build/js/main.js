var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Paid"] = 1] = "Paid";
    OrderStatus[OrderStatus["Processing"] = 2] = "Processing";
    OrderStatus[OrderStatus["Shipped"] = 3] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 4] = "Delivered";
    OrderStatus[OrderStatus["Cancelled"] = 5] = "Cancelled";
})(OrderStatus || (OrderStatus = {}));
let order = [
    { name: "Taic", status: OrderStatus.Paid },
    { name: "Taic", status: OrderStatus.Delivered },
    { name: "Taic", status: OrderStatus.Cancelled },
    { name: "Taic", status: OrderStatus.Paid },
    { name: "Taic", status: OrderStatus.Pending },
    { name: "Taic", status: OrderStatus.Shipped },
    { name: "Taic", status: OrderStatus.Processing },
    { name: "Taic", status: OrderStatus.Shipped },
    { name: "Taic", status: OrderStatus.Cancelled },
    { name: "Taic", status: OrderStatus.Pending },
    { name: "Taic", status: OrderStatus.Paid },
    { name: "Taic", status: OrderStatus.Processing },
    { name: "Taic", status: OrderStatus.Cancelled },
    { name: "Taic", status: OrderStatus.Delivered },
    { name: "Taic", status: OrderStatus.Delivered },
    { name: "Taic", status: OrderStatus.Processing },
    { name: "Taic", status: OrderStatus.Paid },
    { name: "Taic", status: OrderStatus.Paid },
    { name: "Taic", status: OrderStatus.Delivered },
    { name: "Taic", status: OrderStatus.Cancelled },
];
let pending = 0;
let paid = 0;
let processing = 0;
let shipped = 0;
let delivered = 0;
let cancelled = 0;
for (let i = 0; i < order.length; i++) {
    if (order[i]?.status === OrderStatus.Cancelled) {
        cancelled++;
    }
    else if (order[i]?.status === OrderStatus.Delivered) {
        delivered++;
    }
    else if (order[i]?.status === OrderStatus.Paid) {
        paid++;
    }
    else if (order[i]?.status === OrderStatus.Pending) {
        pending++;
    }
    else if (order[i]?.status === OrderStatus.Processing) {
        processing++;
    }
    else if (order[i]?.status === OrderStatus.Shipped) {
        shipped++;
    }
}
console.log(`Pending: ${pending} \nPaid: ${paid} \nProcessing: ${processing} \nShipped: ${shipped} \nDelivered: ${delivered} \nCancelled: ${cancelled}`);
export {};
//# sourceMappingURL=main.js.map