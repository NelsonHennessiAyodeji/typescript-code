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
    let current3 = l3; // serve as a pointer for the return ListNode object
    let carry = 0;
    while ((current1 !== null) || (current2 !== null)) {
        // When there is a uneven lenght od numbers
        if (current1 === null) {
            current1 = new ListNode();
        }
        else if (current2 === null) {
            current2 = new ListNode();
        }
        let totalSum = (current1.val + current2.val + carry);
        let operationSum = totalSum % 10; // the leftover number
        carry = Math.floor(totalSum / 10);
        current3.val = operationSum;
        current1 = current1.next;
        current2 = current2.next;
        if ((current1 === null) && (current2 === null)) {
            // This code runs at the end of list node
            if (carry > 0) {
                current3.next = new ListNode();
                current3.next.val = carry;
            }
            break;
        }
        else {
            current3.next = new ListNode();
            current3 = current3.next;
        }
    }
    return l3;
}
const node = new ListNode(2, new ListNode(3, new ListNode(2)));
const node10 = new ListNode(9);
const node9 = new ListNode(9, node10);
const node8 = new ListNode(9, node9);
const node7 = new ListNode(9, node8);
const node6 = new ListNode(9, node7);
const node5 = new ListNode(9, node6);
const node4 = new ListNode(9, node5);
const node12 = new ListNode(9);
const node3 = new ListNode(9, node12);
const node2 = new ListNode(9, node3);
const node1 = new ListNode(9, node2);
let node11 = addtwoNumbers(node1, node4);
console.log(node11);
export {};
// while (node11 !== null) {
//     console.log(node11.val);
//     node11 = node11.next;
// }
//# sourceMappingURL=main.js.map