// School Management System
class Student {
    id;
    name;
    age;
    grade;
    constructor(id, name, age, grade) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    display() {
        console.log(`${this.name} is of age ${this.age} and is in the ${this.grade} grade`);
    }
    promote() {
        this.grade++;
    }
}
class Teacher {
    id;
    name;
    department;
    salary;
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    display() {
        console.log(`${this.name} is in the department of ${this.department} and earns ${this.salary}`);
    }
    increaseSalary(byAmount) {
        this.salary += byAmount;
    }
}
class Course {
    courseCode;
    title;
    teacher;
    constructor(courseCode, title, teacher) {
        this.courseCode = courseCode;
        this.title = title;
        this.teacher = teacher;
    }
    displayCourse() {
        console.log(`${this.title} is the title of ${this.courseCode} and is taught by ${this.teacher.name}`);
    }
}
// =====================
// Students
const student1 = new Student(101, "John Doe", 15, 10);
const student2 = new Student(102, "Sarah Johnson", 14, 9);
const student3 = new Student(103, "Michael Brown", 16, 11);
const student4 = new Student(104, "Grace Williams", 15, 10);
const student5 = new Student(105, "David Wilson", 17, 12);
const student6 = new Student(106, "Emma Taylor", 13, 8);
const student7 = new Student(107, "Daniel Thomas", 14, 9);
const student8 = new Student(108, "Sophia Anderson", 16, 11);
const student9 = new Student(109, "James White", 15, 10);
const student10 = new Student(110, "Olivia Harris", 17, 12);
// =====================
// Teachers
const teacher1 = new Teacher(201, "Mr. Smith", "Mathematics", 55000);
const teacher2 = new Teacher(202, "Mrs. Carter", "English", 52000);
const teacher3 = new Teacher(203, "Dr. Johnson", "Science", 60000);
const teacher4 = new Teacher(204, "Ms. Brown", "History", 50000);
const teacher5 = new Teacher(205, "Mr. Wilson", "Computer Science", 65000);
// =====================
// Courses
const course1 = new Course(301, "Algebra I", teacher1);
const course2 = new Course(302, "English Literature", teacher2);
const course3 = new Course(303, "Physics", teacher3);
const course4 = new Course(304, "World History", teacher4);
const course5 = new Course(305, "Introduction to Programming", teacher5);
const course6 = new Course(306, "Geometry", teacher1);
const students = [
    student1,
    student2,
    student3,
    student4,
    student5,
    student6,
    student7,
    student8,
    student9,
    student10
];
const teachers = [
    teacher1,
    teacher2,
    teacher3,
    teacher4,
    teacher5
];
const courses = [
    course1,
    course2,
    course3,
    course4,
    course5,
    course6
];
let studentDatabase = {};
const populateStudentObj = () => {
    for (let i = 0; i < students.length; i++) {
        studentDatabase[students[i].id] = students[i];
    }
};
let teacherDatabase = {};
const populateTeacherObj = () => {
    for (let i = 0; i < teachers.length; i++) {
        teacherDatabase[teachers[i].id] = teachers[i];
    }
};
let courseDatabase = {};
const populateCourseObj = () => {
    for (let i = 0; i < courses.length; i++) {
        courseDatabase[courses[i].courseCode] = courses[i];
    }
};
populateStudentObj();
populateTeacherObj();
populateCourseObj();
function printProperty(object, objectKey) {
    console.log(object[objectKey]);
}
// Add a student.
const addAStudent = (student) => {
    studentDatabase[student.id] = student;
};
// Remove a student by ID.
const removeStudentById = (studentId) => {
    const student = findStudentById(studentId);
    delete studentDatabase[studentId];
};
// Find a student by ID.
const findStudentById = (studentId) => {
    const student = students.find(std => std.id === studentId);
    if (student) {
        return student;
    }
    else {
        throw new Error("Student not found");
    }
};
// Promote a student to the next grade.
const promoteStudent = (student) => {
    student.promote();
    return student;
};
// Increase a teacher's salary by a percentage.
const increaseTeacherSalary = (teacher) => {
    teacher.increaseSalary(200);
    return teacher;
};
// Assign a teacher to a course.
const assignTeacherToCourse = (course, teacher) => {
    course.teacher = teacher;
};
// Print every student.
const printAllStudents = () => {
    for (const key in studentDatabase) {
        console.log(studentDatabase[key]);
    }
};
// Print every teacher.
const printAllTeachers = () => {
    for (const key in teacherDatabase) {
        console.log(teacherDatabase[key]);
    }
};
// Print every course.
const printAllCourse = () => {
    for (const key in courseDatabase) {
        console.log(courseDatabase[key]);
    }
};
printProperty(student1, "name");
printProperty(teacher1, "salary");
printProperty(course1, "title");
addAStudent(new Student(111, "David", 20, 8));
removeStudentById(108);
promoteStudent(student1);
increaseTeacherSalary(teacher1);
// printAllStudents();
// printAllTeachers();
assignTeacherToCourse(course1, teacher2);
printAllCourse();
export {};
//# sourceMappingURL=main.js.map