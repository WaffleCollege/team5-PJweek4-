'use strict'
// Please don't delete the 'use strict' line above

//問題1
var twoSum = function(nums, target) {

    let objindex = {};
    
    for(let i =0; i< nums.length;i++){

        let keisan = target-nums[i];

        if(keisan in objindex){
            return[objindex[keisan],i];
        }
        objindex[nums[i]]=i;

    }
    return[];
};

//問題9
var isPalindrome = function(x) {
    const motono=String(x);
    const kaibun=motono.split("").reverse().join("");
    return motono===kaibun;
};

//問題13
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    const roman={

        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000,

    }
    
    let result = 0;

    for(let i=0;i<s.length; i++){
        const currenti = s[i];//現在の位置であるiの文字を所得する
        const currentnumber=roman[currenti]; //現在の位置のiのローマ数字から実際の数字をを所得する
        const nexti=s[i+1];
        const nextnumber=roman[nexti];

        if(nextnumber>currentnumber){
            result -= currentnumber;
        }else{
            result+=currentnumber;
        }

    }
    return result;

}

//問題14
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    const roman={

        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000,

    }
    
    let result = 0;

    for(let i=0;i<s.length; i++){
        const currenti = s[i];//現在の位置であるiの文字を所得する
        const currentnumber=roman[currenti]; //現在の位置のiのローマ数字から実際の数字をを所得する
        const nexti=s[i+1];
        const nextnumber=roman[nexti];

        if(nextnumber>currentnumber){
            result -= currentnumber;
        }else{
            result+=currentnumber;
        }

    }
    return result;

}

//問題20

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const a = [];

   for (const b of s) {
       if (b === '(' || b === '[' || b === '{') {
           a.push(b);
       } else {
           const c = a.pop();

           if (
               (b === ')' && c !== '(') ||
               (b === ']' && c !== '[') ||
               (b === '}' && c !== '{')
           ) {
               return false;
           }
       }
   }

   return a.length === 0;



}
//問題21

//問題26
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let a = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[a]) {
            a++;
        
            nums[a] = nums[i];
        }
    }

    return a + 1;

}

//問題27
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 //
 var removeElement = function(nums, val) {
    let a =0;
    for(let i = 0;i<nums.length;i++ ){
        if(nums[i]!==val){
            nums[a]=nums[i];
            a++;
        }

    }return a;
    
};

//問題28
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if (i + needle.length > haystack.length) {
            break;
        }

        let a = true;
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                a = false;
                break;
            }
        }

        if (a) {
            return i;
        }
    }

    return -1;
};

//問題35
/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var searchInsert = function(nums, target) {

   let result = 0;

   if(!nums.includes(target)){
       nums.push(target);
       nums.sort((a,b)=>a-b);
   }

   for(let i=0;i<nums.length;i++){

       if(nums[i]===target){
           result=i;
       }

   }return result;

};

//問題58
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    s = s.trim();

    const words = s.split(' ');
    const lastWord = words[words.length - 1];

    return lastWord ? lastWord.length : 0;
};



