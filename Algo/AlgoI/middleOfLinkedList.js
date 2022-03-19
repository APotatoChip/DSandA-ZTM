/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var middleNode = function(head) {
    let arr = [head];
    while (arr[arr.length - 1].next != null) {
        arr.push(arr[arr.length - 1].next);

    }

    return arr[Math.trunc(arr.length / 2)];
};

middleNode([
    [1, 2, 3, 4, 5]
])