class Student {
    id;
    name;
    course;
    score;
    constructor(id, name, course, score) {
        this.id = id;
        this.name = name;
        this.course = course;
        this.score = score;
    }
}
const student1 = new Student(1, "Jake", "Computer Science", 82);
const student2 = new Student(2, "Paul", "Computer Science", 77);
const student3 = new Student(3, "Logan", "Computer Science", 69);
const student4 = new Student(4, "Finn", "Computer Science", 90);
const student5 = new Student(5, "Plum", "Computer Science", 79);
let students = [student1, student2, student3, student4, student5];
// Print each student info
for (let i = 0; i < students.length; i++) {
    console.log(`
        Student #${students[i]?.id}
        Name: ${students[i]?.name}
        Course: ${students[i].course}
        Score: ${students[i]?.score}`);
}
export {};
//# sourceMappingURL=main.js.map