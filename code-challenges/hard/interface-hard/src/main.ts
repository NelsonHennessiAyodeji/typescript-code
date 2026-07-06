interface Employee {
    id: number;
    name: string;
    department: string;
    salary: number;
    yearsWorked: number;
}

const employee1: Employee = {
    id: 1,
    name: "John Doe",
    department: "Engineering",
    salary: 8000,
    yearsWorked: 5
}

// Give Raise
const giveRaise = (employee: Employee, raiseAmount: number): Employee => {
    employee.salary += raiseAmount;
    return employee;
}

// transfer Deparrment
const transferDepartment = (employee: Employee, department: string): Employee => {
    employee.department = department;
    return employee;
}

// Calculate Yearly Salary
const calculateYearlySalary = (employee: Employee) => {
    console.log(employee.salary * 12);
}

console.log(employee1);
console.log(giveRaise(employee1, 500));
console.log(transferDepartment(employee1, "Art"));
calculateYearlySalary(employee1);
