// Employee Payroll
class Employee {
    id;
    name;
    salary;
    department;
    yearsWorked;
    constructor(id, name, salary, department, yearsWorked) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.department = department;
        this.yearsWorked = yearsWorked;
    }
    giveRaise(percent) {
        if ((percent > 0) && (percent < 51)) {
            this.salary += (percent * (100 / 1));
        }
        else {
            throw new Error("Invalid raise percentage. The percentage must be between 1% - 50%");
        }
        return this.salary;
    }
    calculateYearlySalary() {
        const yearlySalary = this.salary * 12;
        return yearlySalary;
    }
    displayEmployee() {
        console.log(`
            Employee #${this.id}
            Name: ${this.name}
            Salary: ${this.salary}
            Department: ${this.department}
        `);
    }
}
const employee = new Employee(1, "James", 6000, "ICT", 3);
console.log(employee.giveRaise(40));
console.log(employee.calculateYearlySalary());
employee.displayEmployee();
export {};
//# sourceMappingURL=main.js.map