const s = "abcabcbb";

function longestSubstring(s: string) {
    let longestSubstring: number = 0;
    let stringArr: string[] = [];
    for (let i: number = 0; i < s.length; i++) {
        if (stringArr.includes(s.charAt(i))) stringArr = [];
        stringArr.push(s.charAt(i));
        longestSubstring = (longestSubstring < stringArr.length)? stringArr.length : longestSubstring;
    }

    return longestSubstring;
}

console.log(longestSubstring(s));
