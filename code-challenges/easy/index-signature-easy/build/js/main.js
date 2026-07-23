const phone = {
    Sarah: 8011111111,
    Peter: 8011111111,
    John: 8012345678,
    Jay: 8011111111,
    Dan: 8011111111,
    Brian: 8011111111,
    Cena: 8011111111,
    Bray: 8011111111,
};
console.log("John -> " + phone["John"]);
console.log("Sarah -> " + phone["Sarah"]);
const studentObj = {
    student1: 50,
    student2: 64,
    student3: 87,
    student4: 39,
    student5: 84,
    student6: 23,
    student7: 45,
    student8: 20,
    student9: 89,
    student10: 67,
};
// Print pass students
const printPassedStudents = () => {
    for (const std in studentObj) {
        if (studentObj[std] > 69) {
            console.log(`${std} - ${studentObj[std]}`);
        }
    }
};
printPassedStudents();
const car1 = {
    brand: "Toyota",
    model: 4932,
    year: 2018,
    electric: false,
};
// Get property
const getProperty = (car, property) => {
    return car[property];
};
// Update Property
function updateProperty(car, property, newValue) {
    car[property] = newValue;
}
updateProperty(car1, "brand", "Camry");
console.log(getProperty(car1, "brand"));
// change settings
function changeSettings(settings, key, newValue) {
    settings[key] = newValue;
}
const setting = {
    theme: "Dark",
    fontSize: 30,
    notifications: "Facebook",
    language: "English"
};
changeSettings(setting, "theme", "Light");
console.log(setting["theme"]);
export {};
//# sourceMappingURL=main.js.map