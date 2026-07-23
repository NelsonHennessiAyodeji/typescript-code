// Phone Book
type PhoneBook = {
    readonly [index: string]: number;
    Sarah: number,
    Peter: number,
    John: number,
}

const phone: PhoneBook = {
    Sarah: 8011111111,
    Peter: 8011111111,
    John: 8012345678,
    Jay: 8011111111,
    Dan: 8011111111,
    Brian: 8011111111,
    Cena: 8011111111,
    Bray: 8011111111,
}

console.log("John -> " + phone["John"]);
console.log("Sarah -> " + phone["Sarah"]);


////////////////////////////////////////////////////////////////////////////////////////////////
// Student Scores
type StudentScores = {
    [studentName: string]: number;
    student1: number,
    student2: number;
    student3: number;
    student4: number;
    student5: number;
    student6: number;
    student7: number;
    student8: number;
    student9: number;
    student10: number;
}

const studentObj: StudentScores = {
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
}

// Print pass students
const printPassedStudents = () => {
    for (const std in studentObj) {
        if (studentObj[std]! > 69) {
            console.log(`${std} - ${studentObj[std]}`);
        }
    }
}

printPassedStudents();

////////////////////////////////////////////////////////////////////////////////////////////////////////
// Keyof
type Car = {
    brand: string,
    model: number,
    year: number,
    electric: boolean,
}

const car1: Car = {
    brand: "Toyota",
    model: 4932,
    year: 2018,
    electric: false,
}

// Get property
const getProperty = (car: Car, property: keyof Car) => {
    return car[property];
}

// Update Property
function updateProperty<K extends keyof Car> (car: Car, property: K, newValue: Car[K]) {
    car[property] = newValue;
}

updateProperty(car1, "brand", "Camry");
console.log(getProperty(car1, "brand"));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// User Settings
type Settings = {
    theme: 'Dark' | 'Light',
    fontSize: number,
    notifications: string,
    language: string,
}

// change settings
function changeSettings<K extends keyof Settings> (settings: Settings, key: K, newValue: Settings[K]) {
    settings[key] = newValue;
}

const setting: Settings = {
    theme: "Dark",
    fontSize: 30,
    notifications: "Facebook",
    language: "English"
}

changeSettings(setting, "theme", "Light")

console.log(setting["theme"]);