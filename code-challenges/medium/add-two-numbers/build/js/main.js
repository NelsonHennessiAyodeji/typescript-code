// Definition for singly-linked list.
class ListNode {
    val;
    next;
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function addtwoNumbers(l1, l2) {
    let l3 = new ListNode();
    let current1 = l1;
    let current2 = l2;
    let current3 = l3;
    while ((current1 !== null) && (current2 !== null)) {
        // console.log(current1);
        // console.log(current2);
        // console.log(l3);
        let sum = current1.val + current2.val;
        // console.log(sum);
        // console.log(l3.val);
        if (sum >= 10) {
            l3.val = 0;
        }
        else {
            l3.val = sum;
        }
        current1 = current1.next;
        current2 = current2.next;
        current3.next = new ListNode();
        current3 = current3.next;
    }
    return l3;
}
const node = new ListNode(2, new ListNode(3, new ListNode(2)));
const node6 = new ListNode(1);
const node5 = new ListNode(1, node6);
const node4 = new ListNode(1, node5);
const node3 = new ListNode(1);
const node2 = new ListNode(1, node3);
const node1 = new ListNode(1, node2);
// console.log(node1.val)
// console.log(node1.next?.val)
// console.log(node1.next?.next?.val)
// console.log(node1.next?.next?.next?.val)
let node7 = addtwoNumbers(node1, node4);
export {};
// console.log(node7);
// while (node7 !== null) {
//     console.log(node7.val);
//     node7 = node7.next;
// }
//# sourceMappingURL=main.js.map