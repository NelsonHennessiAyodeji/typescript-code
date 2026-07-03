const student1 = {
    name: "Jake",
    age: 17,
    course: "Science",
    score: 89
};
const student2 = {
    name: "Peter",
    age: 20,
    course: "Science",
    score: 75
};
const student3 = {
    name: "Timmy",
    age: 19,
    course: "Science",
    score: 65
};
// Students withs score 70 and above
const students = [student1, student2, student3];
for (let i = 0; i < students.length; i++) {
    if ((students[i]?.score ?? 0) >= 70) {
        console.log(((students[i] ?? {})));
    }
}
export {};
//# sourceMappingURL=main.js.map