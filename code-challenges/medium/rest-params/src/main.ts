// Find the Highest Number
const findHighest = (...num: number[]) => {
    let highest: number = 0;

    for (let i: number = 0; i < num.length; i++) {
        if(num[i]! >= highest) {
            highest = num[i]!;
        }
    }

    return highest;
}

console.log((findHighest(10, 98, 65, 83, 43, 38, 42, 39, 53, 73, 82, 73, 64)));

// 2 Print all Courses
const registerCourses = (studentName: string, ...courses: string[]) => {
    studentName;

    for (let i: number = 0; i < courses.length; i++) {
        console.log(courses[i]);        
    }

    return studentName;
}


console.log(registerCourses("Jason", "COM111", "MTH101", "GNS202"));
