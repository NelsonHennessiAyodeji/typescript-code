// School Database
class Student {
    id;
    name;
    grade;
    constructor(id, name, grade) {
        this.id = id;
        this.name = name;
        this.grade = grade;
    }
}
const student1 = new Student(101, "Dave", 70);
const student2 = new Student(102, "John", 77);
const student3 = new Student(103, "Amy", 80);
const studentDatabase = {
    101: student1,
    102: student2,
    103: student3
};
// Add students
const addStudent = (student) => {
    studentDatabase[student.id] = student;
};
// Remove Student
const removeStudent = (id) => {
    delete studentDatabase[id];
};
// Find Students
const findStudent = (id) => {
    for (const stdKey in studentDatabase) {
        if (Number.parseInt(stdKey) === id) {
            return studentDatabase[stdKey];
        }
    }
};
// print all students
const printAllStudents = () => {
    for (const stdKey in studentDatabase) {
        console.log(`${stdKey}: ${studentDatabase[stdKey]?.name}`);
    }
};
addStudent(new Student(104, "Peter", 90));
removeStudent(102);
console.log(findStudent(103));
printAllStudents();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Game Characters
class Character {
    name;
    health;
    level;
    weapon;
    constructor(name, health, level, weapon) {
        this.name = name;
        this.health = health;
        this.level = level;
        this.weapon = weapon;
    }
}
const character1 = new Character("Strongnor", 50, 15, "Great Sword");
const characters = {
    101: character1,
    102: new Character("Captain Cold", 40, 30, "Freeze Gun"),
    103: new Character("Superman", 100, 80, "Eye Lasers"),
    104: new Character("Batman", 70, 50, "Fist of Justice"),
};
// Upgrade Character
function upgradeCaracter(id, characterKey, upgrade) {
    const character = characters[id];
    character[characterKey] = upgrade;
    return character[characterKey];
}
console.log(upgradeCaracter(103, "health", 70));
console.log(upgradeCaracter(104, "level", 90));
console.log(upgradeCaracter(102, "name", "Dr Freeze"));
export {};
//# sourceMappingURL=main.js.map