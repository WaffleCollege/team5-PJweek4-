/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    // Base case: If the root is null, return false
    if (root === null) {
        return false;
    }

    // If the current node is a leaf and its value matches the remaining targetSum, return true
    if (root.left === null && root.right === null && targetSum - root.val === 0) {
        return true;
    }

    // Recursively check the left and right subtrees with the updated targetSum
    return (
        hasPathSum(root.left, targetSum - root.val) ||
        hasPathSum(root.right, targetSum - root.val)
    );
};
