/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    return (BigInt("0b"+a) + BigInt("0b"+b)).toString(2);
    //　2進数を10進数になおす時に通常使うのはparaseInt
    //　だが2^53-1を超える数はJavaScriptでは正しく処理できない
    // BigIntは、値が2^53-1を超えることが合理的に予想される場合にのみ使用する
    // ０bで２進法であると伝える。ちなみに0oは8進法、0xは16進法
    //　to.Stringで10進法を2進法などになおせる
};