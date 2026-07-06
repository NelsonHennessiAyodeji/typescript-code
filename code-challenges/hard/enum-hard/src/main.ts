enum OrderStatus {
    Pending,
    Paid,
    Processing,
    Shipped,
    Delivered,
    Cancelled,
}

let order = [
    {name: "Taic", status: OrderStatus.Paid},
    {name: "Taic", status: OrderStatus.Delivered},
    {name: "Taic", status: OrderStatus.Cancelled},
    {name: "Taic", status: OrderStatus.Paid},
    {name: "Taic", status: OrderStatus.Pending},
    {name: "Taic", status: OrderStatus.Shipped},
    {name: "Taic", status: OrderStatus.Processing},
    {name: "Taic", status: OrderStatus.Shipped},
    {name: "Taic", status: OrderStatus.Cancelled},
    {name: "Taic", status: OrderStatus.Pending},
    {name: "Taic", status: OrderStatus.Paid},
    {name: "Taic", status: OrderStatus.Processing},
    {name: "Taic", status: OrderStatus.Cancelled},
    {name: "Taic", status: OrderStatus.Delivered},
    {name: "Taic", status: OrderStatus.Delivered},
    {name: "Taic", status: OrderStatus.Processing},
    {name: "Taic", status: OrderStatus.Paid},
    {name: "Taic", status: OrderStatus.Paid},
    {name: "Taic", status: OrderStatus.Delivered},
    {name: "Taic", status: OrderStatus.Cancelled},
];

let pending: number = 0;
let paid: number = 0;
let processing: number = 0;
let shipped: number = 0;
let delivered: number = 0;
let cancelled: number = 0;

for (let i: number = 0; i < order.length; i++) {
    if (order[i]?.status === OrderStatus.Cancelled) {
        cancelled++;
    } else if (order[i]?.status === OrderStatus.Delivered) {
        delivered++;
    } else if (order[i]?.status === OrderStatus.Paid) {
        paid++;
    } else if (order[i]?.status === OrderStatus.Pending) {
        pending++;
    } else if (order[i]?.status === OrderStatus.Processing) {
        processing++;
    } else if (order[i]?.status === OrderStatus.Shipped) {
        shipped++;
    }
}

console.log(`Pending: ${pending} \nPaid: ${paid} \nProcessing: ${processing} \nShipped: ${shipped} \nDelivered: ${delivered} \nCancelled: ${cancelled}`);