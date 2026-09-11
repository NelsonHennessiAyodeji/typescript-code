const int: number = 101;

function isPalindrome(x: number): boolean {
    let letterStore: string = "";
    let stringedNumber: string = x.toString();
    for (let i: number = stringedNumber.length - 1; i >= 0; i--) {
        letterStore += stringedNumber.charAt(i);
    }

    return letterStore === stringedNumber;
};

console.log(isPalindrome(int));
