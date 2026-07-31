// We will not require all the props, just the one we want to pass in
// This allows us to not pass in all the props, but the one we want to change/pass in
const updateAssignment = (assing, propsToUpdate) => {
    // this allows us to not pass all the props, but declare that they
    //  are props of assignment
    return { ...assing, ...propsToUpdate };
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
// We are overriding the grade prop
console.log(updateAssignment(assign1, { grade: 95 }));
const assingGraded = updateAssignment(assign1, { grade: 95 });
// Required and Readonly Utility Type
// Required means all the props are required by force
const recordAssignment = (assign) => {
    // send to database etc.
    return assign;
};
// Readonly Means you cannot override any of the properties
const assignVerified = { ...assingGraded, verified: true };
// assignVerified.grade = 20; // Cannot chnage it anymore beacuse of readonly property.
// recordAssignment(assingGraded); // Will not work beacuse the function needs all the props to be filled out as per the 
// Required Utility Type
// But we could correctly do this
recordAssignment({ ...assingGraded, verified: true }); // Is correct
// Record Utility Type
// We are creating a set type with keys being string as well as the values
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
};
const finalGrades = {
    sara: "B",
    kelly: "U"
};
const gradeData = {
    sara: { assign1: "A", assign2: "C" },
    kelly: { assign1: "C", assign2: "A" },
};
// we have provided both of the properties that we picked from score
const score = {
    studentId: "k123",
    grade: 85,
};
// It will only omit props that are not specified
const preview = {
    studentId: "k123",
    title: "Final Project,"
};
// Return Utility Type
// type newAssign = {title: string, points: number}
// const createNewAssign = (title: string, points: number): newAssign => {
//     return {title, points}; 
// }
// The code above looks fine but... 
const createNewAssign = (title, points) => {
    return { title, points };
};
// The NewAssign always retrun the correct type that is being reurned in any function
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
// We also can use it to dynamically hold parameters in variables 
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
};
fetchUsers().then(users => console.log(users));
export {};
//# sourceMappingURL=main.js.map