// Partial Utility Type
interface Assignment {
    studentId: string;
    title: string;
    grade: number;
    verified?: boolean;
}

// We will not require all the props, just the one we want to pass in
// This allows us to not pass in all the props, but the one we want to change/pass in
const updateAssignment = (assing: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    // this allows us to not pass all the props, but declare that they
    //  are props of assignment
    return {...assing, ...propsToUpdate};
}

const assign1: Assignment = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
}

// We are overriding the grade prop
console.log(updateAssignment(assign1, {grade: 95}));

const assingGraded: Assignment = updateAssignment(assign1, {grade: 95});




// Required and Readonly Utility Type
// Required means all the props are required by force
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to database etc.
    return assign;
}

// Readonly Means you cannot override any of the properties
const assignVerified: Readonly<Assignment> = {...assingGraded, verified: true};

// assignVerified.grade = 20; // Cannot chnage it anymore beacuse of readonly property.

// recordAssignment(assingGraded); // Will not work beacuse the function needs all the props to be filled out as per the 
// Required Utility Type

// But we could correctly do this
recordAssignment({...assingGraded, verified: true}); // Is correct



// Record Utility Type
// We are creating a set type with keys being string as well as the values
const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
}

// Using Literal Types Wirt Record Type
type Students = "sara" | "kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
    sara: "B",
    kelly: "U"
}

// Also with interfaces
interface Grades {
    assign1: LetterGrades;
    assign2: LetterGrades;
}

const gradeData: Record<Students, Grades> = {
    sara: {assign1: "A", assign2: "C"},
    kelly: {assign1: "C", assign2: "A"},
}


// Pick and Omit Utility Type
// We are picking props that we want to use from an object or type or interface
type AssignResult = Pick<Assignment, "studentId" | "grade">

// we have provided both of the properties that we picked from score
const score: AssignResult = {
    studentId: "k123",
    grade: 85,
}

// Omit will do the opposite
type AssignPreview = Omit<Assignment, "grade" | "verified">

// It will only omit props that are not specified
const preview: AssignPreview = {
    studentId: "k123",
    title: "Final Project,"
}



// Exclude and Extract Utility Type
// They work with string literal union types... I think
// now we only get everything except U
type adjustedGrade = Exclude<LetterGrades, "U">
// we get A and B only
type highGrades = Extract<LetterGrades, "A" | "B">



// Nonnullable Utility Type
type AllPossibleGrades = "Dave" | "John" | null | undefined;
// It excluded every null or undefined types from the type
type NamesOnly = NonNullable<AllPossibleGrades>




// Return Utility Type
// type newAssign = {title: string, points: number}

// const createNewAssign = (title: string, points: number): newAssign => {
//     return {title, points}; 
// }
// The code above looks fine but... 

const createNewAssign = (title: string, points: number) => {
    return {title, points}; 
}

// But what if we do not have the newAssign type and we want to change thee types and the return types,
//  we would have to be doing that manually, which is where the Utility Type comes in

type NewAssign = ReturnType<typeof createNewAssign>;

// The NewAssign always retrun the correct type that is being reurned in any function
const tsAssign: NewAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign);



// Parameter Utility Type
// Similar to ReturnType, but deriving a type from parameters
// They retrun tuples
type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 100];

// We also can use it to dynamically hold parameters in variables 
const tsAssign2: NewAssign = createNewAssign(...assignArgs);

console.log(tsAssign2);



// Awaited Utility Type
// Helps us with the ReturnType of a Promise
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error) console.log(err.message);        
    })
    return data;
}

// it returns a promise if we do not add the Awaited retrun type
// If we add awaited, we get the type of the promise
type FetchuserreturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users));
