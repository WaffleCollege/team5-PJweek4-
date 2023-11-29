//pとqが同じ木か判定
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // 両方のノードがnullの場合は同じとみなす
    if (!p && !q) {
        return true;
    }
    // どちらかがnullであるか、値が異なる場合は同じでないとみなす
    if (!p || !q || p.val !== q.val) {
        return false;
    }
    // 左右の部分木に対して再帰的に同じ判定を行う
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};