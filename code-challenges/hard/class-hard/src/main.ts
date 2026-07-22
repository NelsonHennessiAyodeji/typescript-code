// Employee Payroll
class Employee {
    constructor(private id: number, public name: string, public salary: number, public department: string, 
        public yearsWorked: number) {
    }

    public giveRaise(percent: number): number {
        if ((percent > 0) && (percent < 51)) {
            this.salary += (percent * (100 / 1));
        } else {
            throw new Error("Invalid raise percentage. The percentage must be between 1% - 50%")
        }
        return this.salary;
    }

    public calculateYearlySalary(): number {
        const yearlySalary: number = this.salary * 12;
        return yearlySalary;
    }

    public displayEmployee(): void {
        console.log(`
            Employee #${this.id}
            Name: ${this.name}
            Salary: ${this.salary}
            Department: ${this.department}
        `);        
    }
}

const employee: Employee = new Employee(1, "James", 6000, "ICT", 3);

console.log(employee.giveRaise(40));
console.log(employee.calculateYearlySalary());
employee.displayEmployee();