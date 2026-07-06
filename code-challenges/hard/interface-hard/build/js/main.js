const employee1 = {
    id: 1,
    name: "John Doe",
    department: "Engineering",
    salary: 8000,
    yearsWorked: 5
};
// Give Raise
const giveRaise = (employee, raiseAmount) => {
    employee.salary += raiseAmount;
    return employee;
};
// transfer Deparrment
const transferDepartment = (employee, department) => {
    employee.department = department;
    return employee;
};
// Calculate Yearly Salary
const calculateYearlySalary = (employee) => {
    console.log(employee.salary * 12);
};
console.log(employee1);
console.log(giveRaise(employee1, 500));
console.log(transferDepartment(employee1, "Art"));
calculateYearlySalary(employee1);
export {};
//# sourceMappingURL=main.js.map