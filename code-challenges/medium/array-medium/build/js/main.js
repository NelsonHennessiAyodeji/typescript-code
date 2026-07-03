const names = ["John", "Sarah", "Micheal", "James", "David", "Sophia"];
let newNames = [];
// Store names with more than 5 letters
for (let i = 0; i < names.length; i++) {
    let name = names[i] ?? "NaN";
    if ((names.at(i)?.length ?? 0) > 5) {
        newNames.push(name);
    }
}
console.log(newNames.toString());
export {};
//# sourceMappingURL=main.js.map