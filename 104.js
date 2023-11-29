//二分木の最深層を返す
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
var maxDepth = function(root) {
    // ノードがnullの場合、深さは0
    if (!root) {
        return 0;
    }
    // 左右の部分木の最大深さ(maxDepthを再帰)を求め、そのうち大きい方(Math.maxで判定)に1を足す
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};