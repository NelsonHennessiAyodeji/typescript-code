export var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Processing"] = 1] = "Processing";
    OrderStatus[OrderStatus["Shipped"] = 2] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 3] = "Delivered";
    OrderStatus[OrderStatus["Cancelled"] = 4] = "Cancelled";
    OrderStatus[OrderStatus["Refunded"] = 5] = "Refunded";
})(OrderStatus || (OrderStatus = {}));
//# sourceMappingURL=order.js.map