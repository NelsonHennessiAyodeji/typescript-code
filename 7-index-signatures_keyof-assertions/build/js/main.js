// Index signatures help look through objects dynamically
// interface TransactionObj {
//     Pizza: number;
//     Books: number;
//     Job: number;
// }
const todaysTransactions = {
    Pizza: -3,
    Books: -4,
    Job: 78,
    Dave: 3, // Pizza, Books, and Job are required because of the readonly. Dave is not required.
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
// Let us examine it dynamically
let prop = "Pizza";
console.log(todaysTransactions[prop]); // It would give errors if we have not created index signatures
// Another example
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions)); // After the index signatuer, we can now dynamically refer work with the object
// todaysTransactions.Pizza = 2; after readonly, we cannot do this
console.log(todaysTransactions["Dave"]); // You will get undefined if it is not there, so be careful
const student = {
    name: "Doug",
    GPA: 3.5,
    Classes: [100, 200],
};
// console.log(student.test); // AFter adding an index signature, the error goes away because it could have "test".
// And note that this is a potential problem
// for (const key in student) {
//     console.log(`${key}: ${student[key]}`);// If we remove the index signature in the interface, we will get errors
// }
// We can use key of assertions as well when we have no Index Signature
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
    // Here we are saying that we do not know the type, but we need inference to get it
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "GPA");
const monthlyIncome = {
    salary: 500,
    bonus: 300,
    sidehustle: 250
};
for (const revenue in monthlyIncome) {
    console.log(`revenue: ${monthlyIncome[revenue]}`);
}
export {};
//# sourceMappingURL=main.js.map