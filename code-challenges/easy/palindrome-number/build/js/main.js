const int = 101;
function isPalindrome(x) {
    let letterStore = "";
    let stringedNumber = x.toString();
    for (let i = stringedNumber.length - 1; i >= 0; i--) {
        letterStore += stringedNumber.charAt(i);
    }
    return letterStore === stringedNumber;
}
;
console.log(isPalindrome(int));
export {};
//# sourceMappingURL=main.js.map