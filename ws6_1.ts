class Employee {
    constructor(
        private _firstName: string,
        private _lastName: string
    ) {}

    get fullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }

    set fullName(name: string) {
        const parts = name.trim().split(" ");
        if (parts.length >= 2) {
            this._firstName = parts[0];
            this._lastName = parts[1];
        } else {
            throw new Error("กรุณากรอกทั้งชื่อและนามสกุล");
        }
    }
}

const emp1 = new Employee("Banky", "SANTA");
console.log(emp1.fullName);

emp1.fullName = "Burna BOY";
console.log(emp1.fullName);

const emp2 = new Employee("Burna", "BOY");
console.log(emp2.fullName);
