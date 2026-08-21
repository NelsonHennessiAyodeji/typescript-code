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
    let carry = 0;
    // TODO: Try G0 through the last cycle, the current imolemenattion stops at the second to the last
    // not allow the code to repeat to calculate the last value for the last slots
    // Instead of manually adding them. Maybe start by removing or working around the break
    while ((current1 !== null) && (current2 !== null)) {
        // console.log(current1);
        // console.log(current2);
        // console.log(l3);
        // let carry = 0;
        let sum = current1.val + current2.val + carry;
        carry = Math.floor(sum / 10);
        current3.val = sum;
        current1 = current1.next;
        current2 = current2.next;
        current3.next = new ListNode();
        if ((current1?.next === null) && (current2?.next === null)) {
            if (carry === 1) {
                current3.next.next = new ListNode();
                current3.next.next.val = carry;
            }
            current3.next.val = sum;
            break;
        }
        else {
            current3 = current3.next;
        }
    }
    return l3;
}
const node = new ListNode(2, new ListNode(3, new ListNode(2)));
const node6 = new ListNode(9);
const node5 = new ListNode(1, node6);
const node4 = new ListNode(1, node5);
const node3 = new ListNode(9);
const node2 = new ListNode(1, node3);
const node1 = new ListNode(1, node2);
// console.log(node1.val)
// console.log(node1.next?.val)
// console.log(node1.next?.next?.val)
// console.log(node1.next?.next?.next?.val)
let node7 = addtwoNumbers(node1, node4);
console.log(node7);
while (node7 !== null) {
    console.log(node7.val);
    node7 = node7.next;
}
export {};
// console.log(Math.floor(9 / 10));
//# sourceMappingURL=main.js.map