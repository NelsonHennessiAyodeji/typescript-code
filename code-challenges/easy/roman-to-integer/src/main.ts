// LVIII = 58
type RomanType = Record<string, number>;

function romanToInt(s: string): number {
    let result: number = 0;
    let prevVal = 0;
    let numerals: RomanType = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    for (let i: number = 0; i < s.length; i++) {
        let currentVal = numerals[s.charAt(i)]!;
        if ((i !== 0) && (prevVal < currentVal)) {
            result -= prevVal;
            result += (currentVal - prevVal);
            continue;
        }
        result += currentVal ?? 0;
        prevVal = currentVal;
    }
    return result;
};

console.log(romanToInt("MCMXCIV"));
