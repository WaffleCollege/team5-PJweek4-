//nums1のm個の値とnums2のn個の値をnums1に昇順で格納
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 *///何も返さず代わりにnums1を変更する(void=返り値無し)
 var merge = function(nums1, m, nums2, n) {
    let i = m - 1; // nums1要素の最大インデント
    let j = n - 1; // nums2要素の最大インデント
    let k = m + n - 1; // nums1の最終的な結果を格納するためのインデント
    // nums1とnums2の有効な要素を比較しながら、大きい方から順に結果を格納
    while (i >= 0 && j >= 0) {
        // nums1とnums2の有効な要素を比較し、大きい方をnums1の結果として格納
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        // 結果を格納したインデントを更新
        k--;
    }
    // nums2に要素が残っている場合、それをnums1にコピー
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};