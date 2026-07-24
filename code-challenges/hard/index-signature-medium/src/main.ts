// School Database
class Student {
    constructor(public id: number, public name: string, public grade: number) {}
}


const student1: Student = new Student(101, "Dave", 70);
const student2: Student = new Student(102, "John", 77);
const student3: Student = new Student(103, "Amy", 80);

type StudentObject = Record<number, Student>;

const studentDatabase: StudentObject = {
    101: student1,
    102: student2,
    103: student3
};

// Add students
const addStudent = (student: Student) => {
    studentDatabase[student.id] = student;
}

// Remove Student
const removeStudent = (id: number) => {
    delete studentDatabase[id];
}

// Find Students
const findStudent = (id: number) => {
    for (const stdKey in studentDatabase) {
        if (Number.parseInt(stdKey) === id) {
            return studentDatabase[stdKey];
        }
    }
}

// print all students
const printAllStudents = () => {
    for (const stdKey in studentDatabase) {
        console.log(`${stdKey}: ${studentDatabase[stdKey]?.name}`);
    }
}

addStudent(new Student(104, "Peter", 90));
removeStudent(102);
console.log(findStudent(103));
printAllStudents();


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Game Characters
class Character {
    constructor(public name: string, public health: number, public level: number, public weapon: string) {}
}

const character1: Character = new Character("Strongnor", 50, 15, "Great Sword");

type CharacterDatabase = {
    [index: number]: Character;
};

const characters: CharacterDatabase = {
    101: character1,
    102: new Character("Captain Cold", 40, 30, "Freeze Gun"),
    103: new Character("Superman", 100, 80, "Eye Lasers"),
    104: new Character("Batman", 70, 50, "Fist of Justice"),
}

// Upgrade Character
function upgradeCaracter<key extends keyof Character>(id: number, characterKey: key, upgrade: Character[key]) {
    const character = characters[id]!;
    character[characterKey] = upgrade;
    return character[characterKey];
}

console.log(upgradeCaracter(103, "health", 70));
console.log(upgradeCaracter(104, "level", 90));
console.log(upgradeCaracter(102, "name", "Dr Freeze"));
