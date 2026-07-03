const names: string[] = ["John", "Sarah", "Micheal", "James", "David", "Sophia"];

let newNames: string[] = [];

// Store names with more than 5 letters
for (let i: number = 0; i < names.length; i++) {
    let name: string = names[i] ?? "NaN";
    if((names.at(i)?.length ?? 0) > 5) {
        newNames.push(name);
    }
}

console.log(newNames.toString());