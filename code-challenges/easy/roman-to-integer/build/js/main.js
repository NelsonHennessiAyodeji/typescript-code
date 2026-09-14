function romanToInt(s) {
    let result = 0;
    let prevVal = 0;
    let numerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    for (let i = 0; i < s.length; i++) {
        let currentVal = numerals[s.charAt(i)];
        if ((i !== 0) && (prevVal < currentVal)) {
            result -= prevVal;
            result += (currentVal - prevVal);
            continue;
        }
        result += currentVal ?? 0;
        prevVal = currentVal;
    }
    return result;
}
;
console.log(romanToInt("MCMXCIV"));
export {};
//# sourceMappingURL=main.js.map