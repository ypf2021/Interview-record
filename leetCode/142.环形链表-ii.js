/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (!head || !head.next) {
        return null
    }
    let slow = head.next;
    let fast = head.next.next
    while (fast && fast.next) {
        if (slow == fast) {
            slow = head
            while (slow != fast) {
                slow = slow.next
                fast = fast.next
            }
            return slow

        }
        slow = slow.next
        fast = fast.next.next
    }
    return null

};
// @lc code=end

