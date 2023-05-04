/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

const { null } = require("check-types");

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    const travelTree = function (root, p, q) {
        if (root === null || root === p || root === q) {
            return root
        }

        let left = travelTree(root.left, p, q)
        let right = travelTree(root.right, p, q)

        if (left === null && right !== null) {
            return right
        }

        if (right === null && left !== null) {
            return left
        }

        // left && right
        return (left && right) ? root : null

    }
    return travelTree(root, p, q)

};
// @lc code=end

