class Student {
    id: number;
    name: string;
    course: string;
    score: number;

    constructor(id: number, name: string, course: string, score: number) {
        this.id = id;
        this.name = name;
        this.course = course;
        this.score = score;
    }
}

const student1: Student = new Student(1, "Jake", "Computer Science", 82);
const student2: Student = new Student(2, "Paul", "Computer Science", 77);
const student3: Student = new Student(3, "Logan", "Computer Science", 69);
const student4: Student = new Student(4, "Finn", "Computer Science", 90);
const student5: Student = new Student(5, "Plum", "Computer Science", 79);

let students: Student[] = [student1, student2, student3, student4, student5];

// Print each student info
for (let i: number = 0; i < students.length; i++) {
    console.log(`
        Student #${students[i]?.id}
        Name: ${students[i]?.name}
        Course: ${students[i]!.course}
        Score: ${students[i]?.score}`
    );
}