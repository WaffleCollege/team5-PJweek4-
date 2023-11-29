/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i=digits.length-1;i>=0;i--) {
        if(digits[i]<9) {          
            // １を足しても繰り上がらない時はプラス１した数に置き換えるだけ。ここでreturnする        
            digits.splice(i,1,digits[i]+1)  //置き換える
            return digits; //returnで返す
        } else {
            // １を足すと繰り上がる時は０に置き換える
            digits.splice(i,1,0)
        }
     }  digits.unshift(1); //forで回して全部elseにいった時（全要素が9だった時）、配列の最初に１を入れる
        return digits;
 }