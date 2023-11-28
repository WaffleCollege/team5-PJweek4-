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
 * @return {boolean}
 */
var isBalanced = function(root) {
    // Helper function to calculate the height of a tree
    const getHeight = function(node) {
        if (node === null) {
            return 0;
        }
        return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
    };

    // Helper function to check if a tree is balanced
    const isBalancedHelper = function(node) {
        if (node === null) {
            return true;
        }

        // Check if the left and right subtrees are balanced
        let leftHeight = getHeight(node.left);
        let rightHeight = getHeight(node.right);

        if (
            Math.abs(leftHeight - rightHeight) <= 1 &&
            isBalancedHelper(node.left) &&
            isBalancedHelper(node.right)
        ) {
            return true;
        }

        return false;
    };

    return isBalancedHelper(root);
};
