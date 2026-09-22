const strs = ["flower", "flow", "flight"];
// Confused
function longestCommonPrefix(strs) {
    let p = [];
    let prefix = "";
    let check2 = [];
    let i = 0;
    let j = 0;
    do {
        for (i; i < strs.length; i++) {
            const currentLetter = strs[i]?.charAt(j);
            if (currentLetter) {
                p.push(currentLetter);
            }
            else {
                i = -1;
                break;
            }
        }
        if (i === strs.length && i !== -1) {
            i = 0;
            j++;
        }
        else if (i === -1) {
            break;
        }
        let check = equalLetterCheck(p);
        if (check[0]) {
            prefix += check[1];
        }
        p = [];
        check2 = check;
    } while (check2[0]);
    return prefix;
}
;
function equalLetterCheck(lts) {
    let letter = "";
    if (lts.length === 1) {
        return [true, lts[0]];
    }
    for (let i = 0; i < lts.length; i++) {
        if (i !== (lts.length - 1)) {
            if (lts[i] !== lts[i + 1]) {
                letter = "";
                break;
            }
            else {
                letter = lts[i];
            }
        }
    }
    if (letter) {
        return [true, letter];
    }
    else
        return [false];
}
console.log(longestCommonPrefix(strs));
export {};
//# sourceMappingURL=main.js.map