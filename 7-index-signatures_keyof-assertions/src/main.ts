// Index signatures help look through objects dynamically
// interface TransactionObj {
//     Pizza: number;
//     Books: number;
//     Job: number;
// }

// [index: string]... (The keys would be strings)
// [index: string]: number (The values would be numbers)
// interface TransactionObj {
//     // we can add readonly so as to not let any more additons
//     readonly [index: string]: number // This is an index signature (yo can use union types here), kets are strings.
// }

interface TransactionObj {
    readonly [index: string]: number
    Pizza: number;
    Books: number;
    Job: number;
}

const todaysTransactions: TransactionObj = {
    Pizza: -3,
    Books: -4,
    Job: 78,
    Dave: 3, // Pizza, Books, and Job are required because of the readonly. Dave is not required.
}

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

// Let us examine it dynamically
let prop: string = "Pizza";
console.log(todaysTransactions[prop]);// It would give errors if we have not created index signatures


// Another example
const todaysNet = (transactions: TransactionObj): number => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction]!;
    }
    return total;
}

console.log(todaysNet(todaysTransactions)); // After the index signatuer, we can now dynamically refer work with the object

// todaysTransactions.Pizza = 2; after readonly, we cannot do this

console.log(todaysTransactions["Dave"]);// You will get undefined if it is not there, so be careful


////////////////////////////////////////////////////////////////////
interface Student {
    // The naming could be anything i guess
    // [key: string]: (string | number | number[] | undefined);// add undefined when one of the properties is optional
    name: string;
    GPA: number;
    Classes?: number[];
}

const student: Student = {
    name: "Doug",
    GPA: 3.5,
    Classes: [100, 200],
}

// console.log(student.test); // AFter adding an index signature, the error goes away because it could have "test".
// And note that this is a potential problem

// for (const key in student) {
//     console.log(`${key}: ${student[key]}`);// If we remove the index signature in the interface, we will get errors
// }

// We can use key of assertions as well when we have no Index Signature
for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student]);
    // Here we are saying that we do not know the type, but we need inference to get it
});


const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`);
}

logStudentKey(student, "GPA");


// interface Incomes {
//     [key: string]: number
// }

// An alternative of writing this Index Signature
// ALso for when we want to use literal types here
// We cannot use it for the initial way directly above
type Streams = 'salary' | 'bonus' | 'sidehustle';

// Record is a utility type
// Record<Streams,.... The Streams type is just in the place of the literal types,
// Record.... , number> This number represent the values that they will hold. It can be a union type for each e.g
// Reord<Streams, number | string> is fine
type Incomes = Record<Streams, number> 

const monthlyIncome: Incomes = {
    salary: 500,
    bonus: 300,
    sidehustle: 250
}

for (const revenue in monthlyIncome) {
    console.log(`revenue: ${monthlyIncome[revenue as keyof Incomes]}`);    
}