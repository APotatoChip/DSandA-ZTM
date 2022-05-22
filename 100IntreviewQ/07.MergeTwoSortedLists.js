/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2;
    }

    if (l2 === null) {
        return l1;
    }

    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1;

    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2;
    }
};
// let list1 = [];
// let list2 = [];
let list1 = [1, 2, 4];
let list2 = [1, 3, 4];
mergeTwoLists(list1, list2);