// Gender option
enum Gender {
    Male,
    Female,
    PreferNotToSay
}

// Student level option
enum StudentLevel {
    hundred = 100,
    twoHundred = 200,
    threeHundred = 300,
    fourHundred = 400,
    Graduate = 500,
}

// Course Model
interface Course {
    courseCode: string;
    courseTitle: string;
    units: number
}

// Adress model
type Address = {
    street: string,
    city: string,
    state: string,
    country: string,
}

// Name, Relationship, Phone
const emergency: [string, string, number] = ["Tammy", "Single", 986468];

// Student Model
interface Student {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: Gender;
    level: StudentLevel;
    address: Address;
    courses: Course[];
    emergencyContact: [string, string, number];
    isActive: boolean;
    cgpa: number;
}

// Store 20 students in an array
const students: Student[] = [
    {
        id: 114, firstName: "Grace", lastName: "Hopper", age: 21, gender: Gender.Female, 
        level: StudentLevel.hundred, address: {street: "12 Pine Rd", city: "Boston", 
        state: "Massachusetts", country: "USA"}, courses: [{courseCode: "MAT201", 
        courseTitle: "Linear Algebra", units: 3}], emergencyContact: ["Sarah", "Mother", 555014], 
        isActive: true, cgpa: 3.9
    },
    {
        id: 101, firstName: "Jay", lastName: "Dyer", age: 23, gender: Gender.Male, 
        level: StudentLevel.Graduate, address: {street: "7th Street", city: "Long Beach", 
        state: "California", country: "USA"}, courses: [{courseCode: "COM101", 
        courseTitle: "Intro to computer", units: 2}], emergencyContact: ["Tammy", "Single", 986468], 
        isActive: false, cgpa: 3
    },
    {
        id: 108, firstName: "Diana", lastName: "Prince", age: 22, gender: Gender.Female, 
        level: StudentLevel.fourHundred, address: {street: "742 Evergreen Tce", city: "Springfield", 
        state: "Illinois", country: "USA"}, courses: [{courseCode: "HIS105", 
        courseTitle: "World History", units: 3}], emergencyContact: ["Hippolyta", "Mother", 444123], 
        isActive: true, cgpa: 3.8
    },
    {
        id: 119, firstName: "Rachel", lastName: "Green", age: 23, gender: Gender.Female, 
        level: StudentLevel.Graduate, address: {street: "45 Broad St", city: "New York", 
        state: "New York", country: "USA"}, courses: [{courseCode: "MKT301", 
        courseTitle: "Principles of Marketing", units: 3}], emergencyContact: ["Sandra", "Sister", 901234], 
        isActive: false, cgpa: 2.9
    },
    {
        id: 105, firstName: "Charlie", lastName: "Brown", age: 20, gender: Gender.Male, 
        level: StudentLevel.threeHundred, address: {street: "321 Pine St", city: "Minneapolis", 
        state: "Minnesota", country: "USA"}, courses: [{courseCode: "PSY101", 
        courseTitle: "Intro to Psychology", units: 3}], emergencyContact: ["Sally", "Sister", 111222], 
        isActive: true, cgpa: 2.5
    },
    {
        id: 111, firstName: "Kevin", lastName: "Mitnick", age: 25, gender: Gender.Male, 
        level: StudentLevel.Graduate, address: {street: "404 Cyber Way", city: "Las Vegas", 
        state: "Nevada", country: "USA"}, courses: [{courseCode: "SEC401", 
        courseTitle: "Network Security", units: 4}], emergencyContact: ["Lewis", "Father", 777888], 
        isActive: true, cgpa: 3.7
    },
    {
        id: 103, firstName: "Alice", lastName: "Smith", age: 21, gender: Gender.Female, 
        level: StudentLevel.fourHundred, address: {street: "123 Maple Ave", city: "Seattle", 
        state: "Washington", country: "USA"}, courses: [{courseCode: "BIO201", 
        courseTitle: "General Biology", units: 4}], emergencyContact: ["John", "Father", 555123], 
        isActive: true, cgpa: 3.6
    },
    {
        id: 116, firstName: "Quincy", lastName: "Jones", age: 24, gender: Gender.Male, 
        level: StudentLevel.Graduate, address: {street: "88 Melody Lane", city: "Los Angeles", 
        state: "California", country: "USA"}, courses: [{courseCode: "MUS101", 
        courseTitle: "Music Theory", units: 2}], emergencyContact: ["Peggy", "Wife", 777016], 
        isActive: true, cgpa: 3.5
    },
    {
        id: 112, firstName: "Laura", lastName: "Croft", age: 22, gender: Gender.Female, 
        level: StudentLevel.twoHundred, address: {street: "10 Manor Rd", city: "London", 
        state: "England", country: "UK"}, courses: [{courseCode: "ARC302", 
        courseTitle: "Archaeology", units: 4}], emergencyContact: ["Winston", "Butler", 888999], 
        isActive: false, cgpa: 3.9
    },
    {
        id: 106, firstName: "Eva", lastName: "Long", age: 24, gender: Gender.Female, 
        level: StudentLevel.Graduate, address: {street: "654 Birch Blvd", city: "Miami", 
        state: "Florida", country: "USA"}, courses: [{courseCode: "CHM102", 
        courseTitle: "Organic Chemistry", units: 4}], emergencyContact: ["Carlos", "Spouse", 333444], 
        isActive: false, cgpa: 3.2
    },
    {
        id: 117, firstName: "Sam", lastName: "Wilson", age: 22, gender: Gender.Male, 
        level: StudentLevel.hundred, address: {street: "56 Falcon Dr", city: "Washington", 
        state: "DC", country: "USA"}, courses: [{courseCode: "POL205", 
        courseTitle: "Political Science", units: 3}], emergencyContact: ["Sarah", "Sister", 888017], 
        isActive: true, cgpa: 3.1
    },
    {
        id: 110, firstName: "Janice", lastName: "Litman", age: 23, gender: Gender.Female, 
        level: StudentLevel.Graduate, address: {street: "555 Oh My Rd", city: "Newark", 
        state: "New Jersey", country: "USA"}, courses: [{courseCode: "ENG202", 
        courseTitle: "Creative Writing", units: 3}], emergencyContact: ["Morris", "Ex-Husband", 666777], 
        isActive: false, cgpa: 2.8
    },
    {
        id: 104, firstName: "Bob", lastName: "Johnson", age: 22, gender: Gender.Male, 
        level: StudentLevel.fourHundred, address: {street: "456 Oak Dr", city: "Austin", 
        state: "Texas", country: "USA"}, courses: [{courseCode: "ENG102", 
        courseTitle: "Literature", units: 3}], emergencyContact: ["Mary", "Mother", 444555], 
        isActive: false, cgpa: 3.1
    },
    {
        id: 120, firstName: "Tony", lastName: "Stark", age: 21, gender: Gender.Male, 
        level: StudentLevel.threeHundred, address: {street: "10880 Malibu Point", city: "Malibu", 
        state: "California", country: "USA"}, courses: [{courseCode: "PHY301", 
        courseTitle: "Quantum Mechanics", units: 4}], emergencyContact: ["Pepper", "Fiancee", 123456], 
        isActive: true, cgpa: 4.0
    },
    {
        id: 115, firstName: "Peter", lastName: "Parker", age: 19, gender: Gender.Male, 
        level: StudentLevel.twoHundred, address: {street: "20 Ingram St", city: "Queens", 
        state: "New York", country: "USA"}, courses: [{courseCode: "PHY101", 
        courseTitle: "Intro to Physics", units: 4}], emergencyContact: ["May", "Aunt", 666015], 
        isActive: true, cgpa: 3.4
    },
    {
        id: 107, firstName: "Frank", lastName: "Castle", age: 26, gender: Gender.Male, 
        level: StudentLevel.Graduate, address: {street: "789 Walnut St", city: "Brooklyn", 
        state: "New York", country: "USA"}, courses: [{courseCode: "CRJ201", 
        courseTitle: "Criminal Justice", units: 3}], emergencyContact: ["Micro", "Friend", 555666], 
        isActive: true, cgpa: 3.4
    },
    {
        id: 113, firstName: "Miles", lastName: "Morales", age: 18, gender: Gender.Male, 
        level: StudentLevel.twoHundred, address: {street: "44 Brooklyn Ave", city: "Brooklyn", 
        state: "New York", country: "USA"}, courses: [{courseCode: "ART105", 
        courseTitle: "Fine Arts", units: 2}], emergencyContact: ["Rio", "Mother", 999013], 
        isActive: true, cgpa: 3.6
    },
    {
        id: 118, firstName: "Tina", lastName: "Turner", age: 25, gender: Gender.Female, 
        level: StudentLevel.fourHundred, address: {street: "99 River Rd", city: "Nutbush", 
        state: "Tennessee", country: "USA"}, courses: [{courseCode: "PER101", 
        courseTitle: "Performing Arts", units: 3}], emergencyContact: ["Ike", "Manager", 999018], 
        isActive: false, cgpa: 3.3
    },
    {
        id: 109, firstName: "Ethan", lastName: "Hunt", age: 24, gender: Gender.Male, 
        level: StudentLevel.threeHundred, address: {street: "12 IMF Way", city: "Arlington", 
        state: "Virginia", country: "USA"}, courses: [{courseCode: "GOV301", 
        courseTitle: "International Relations", units: 3}], emergencyContact: ["Luther", "Colleague", 555777], 
        isActive: true, cgpa: 3.2
    },
    {
        id: 102, firstName: "Bruce", lastName: "Wayne", age: 24, gender: Gender.Male, 
        level: StudentLevel.threeHundred, address: {street: "1007 Mountain Dr", city: "Gotham", 
        state: "New Jersey", country: "USA"}, courses: [{courseCode: "BUS202", 
        courseTitle: "Corporate Finance", units: 3}], emergencyContact: ["Alfred", "Butler", 987654], 
        isActive: true, cgpa: 3.5
    }
];


// Add a student
const addStudent = (firstName: string, lastName: string, age: number, gender: Gender, 
    level: StudentLevel, address: Address, courses: Course[], emergencyContact: [string, string, number], 
    isActive: boolean, cgpa: number) => {
    const id = 100 + students.length + 1;
    const newStudent: Student = {
        id,
        firstName,
        lastName,
        age,
        gender,
        level,
        address,
        courses,
        emergencyContact,
        isActive,
        cgpa,
    }

    students.push(newStudent);
}

// Remove Student
const removeStudent = (id: number) => {
    const student = students.find(st => st.id === id);
    if (student) {
        students.splice(students.indexOf(student), 1);
    } else {
        console.log("No student with this id exists");            
    }
}

// Find student by ID
const findStudentById = (id: number): (Student | undefined) => {
    let student = students.find(st => st.id === id);
    if (student) {
        return student;
    }
    else {
        console.log("No student with this id exists");
    }
}

// Find student by last name
const findStudentByLastname = (lastName: string): Student | undefined => {
    const student = students.find(s => s.lastName.toLowerCase() === lastName.toLowerCase());
    if (student) {
        return student;
    } else {
        console.log(`No student with this last name of ${lastName} exists`);
    }
}

// List all 200 level Students
const listAllSecondYearStudents = (): (Student[] | undefined) => {
    let secondYears = students.filter(s => s.level === StudentLevel.twoHundred);
    if (secondYears) {
        return secondYears;
    } else {
        console.log("No student in the 200 level program exists");
    }
}

// List all studenst with CGPA of 3.0 or higher
const listCgpaAboveThree = (): (Student[] | undefined) => {
    let aboveThreeStudents = students.filter(s => s.cgpa >= 3.0);
    if (aboveThreeStudents) {
        return aboveThreeStudents;
    } else {
        console.log("Well.... Unfortunately, no student have a cgpa of 3.0");
    }
}

// Register a course 
const registerCourse = (id: number, courseCode: string, courseTitle: string, units: number): (Student | undefined) => {
    const student = findStudentById(id);
    if (student) {
        student.courses.push({courseCode, courseTitle, units});
        return student;
    } else {
        console.log("No student with this id exists");
    }
}

// Drop a course
const dropCourse = (id: number, courseCode: string): (Student | undefined) => {
    const student = findStudentById(id);
    if (student) {
        const course = student.courses.find(c => c.courseCode === courseCode);
        if (course) {
            const courseIndex = student.courses.indexOf(course);
            student.courses.splice(courseIndex, 1);
            return student;
        } else {
            console.log("Course is not registered at all");            
        }
    } else {
        console.log("No student with this id exists");            
    }
}

// Count total students
const countTotalStudents = (): (number | undefined) => {
    return students.length;
}

// Count male students
const countMaleStudents = (): Student[] => {
    const maleStudents = students.filter(s => s.gender === Gender.Male);
    return maleStudents;
}

// Count female students
const countFemaleStudents = (): Student[] => {
    const femaleStudents = students.filter(s => s.gender === Gender.Female);
    return femaleStudents;
}

// Find highest CGPA
const findHighestCgpa = (): Student[] => {
    let highestCgpa = 0;
    for (let i: number = 0; i < students.length; i++) {
        if ((students[i]?.cgpa ?? 0) >= highestCgpa) {
            highestCgpa = (students[i]?.cgpa ?? 0);
        }
    }

    const highestCgpaStudents = students.filter(s => s.cgpa === highestCgpa);
    return highestCgpaStudents;
}

// Find lowest CGPA
const findLowestCpa = (): Student[] => {
    let lowestCgpa = 4;
    for (let i: number = 0; i < students.length; i++) {
        if ((students[i]?.cgpa ?? 0) <= lowestCgpa) {
            lowestCgpa = (students[i]?.cgpa ?? 0);
        }
    }

    const lowestCgpaStuednts = students.filter(s => s.cgpa === lowestCgpa);
    return lowestCgpaStuednts;
}

// Calculate average CGPA
const findAverageCgpa = () => {
    const numberOfStudents = countTotalStudents();
    let averageCgpa = 0;
    for (let i: number = 0; i < students.length; i++) {
        averageCgpa += students[i]?.cgpa as number;
    }

    averageCgpa = averageCgpa / (numberOfStudents as number);
    return averageCgpa;
}

// Sort students by CGPA


// Sort students alphabetically

// Print a student's full profile

// Change student level

// Graduate a student

// Deactivate a student