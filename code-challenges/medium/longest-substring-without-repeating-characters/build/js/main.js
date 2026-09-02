const s = "abcabcbb";
function longestSubstring(s) {
    let longestSubstring = 0;
    let stringArr = [];
    for (let i = 0; i < s.length; i++) {
        if (stringArr.includes(s.charAt(i)))
            stringArr = [];
        stringArr.push(s.charAt(i));
        longestSubstring = (longestSubstring < stringArr.length) ? stringArr.length : longestSubstring;
    }
    return longestSubstring;
}
console.log(longestSubstring(s));
export {};
//# sourceMappingURL=main.js.map