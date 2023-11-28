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
 * @return {number}
 */
var minDepth = function(root) {
    if (root === null) {
        return 0;
    }

    // Initialize a queue for BFS and push the root node with its depth
    const queue = [{ node: root, depth: 1 }];

    while (queue.length > 0) {
        const { node, depth } = queue.shift();

        // Check if the current node is a leaf node
        if (node.left === null && node.right === null) {
            return depth; // Return the depth when the first leaf node is encountered
        }

        // Enqueue the left and right children with increased depth
        if (node.left !== null) {
            queue.push({ node: node.left, depth: depth + 1 });
        }
        if (node.right !== null) {
            queue.push({ node: node.right, depth: depth + 1 });
        }
    }

    // The code should not reach here for a non-empty tree, but return a fallback value
    return -1;
};
