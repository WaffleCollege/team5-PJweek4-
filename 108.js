/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // Base case: If the array is empty, return null
    if (nums.length === 0) {
        return null;
    }

    // Find the middle index of the array
    var mid = Math.floor(nums.length / 2);

    // Create a new TreeNode with the middle element as the root
    var root = new TreeNode(nums[mid]);

    // Recursively build the left and right subtrees
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));

    return root;
    
};
