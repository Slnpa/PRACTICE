class Employee{
    constructor(name,salary){
        this.name=name;
        this.salary=salary;
    }
    yearSalary(){
        console.log(`${this.salary*12}`);
    }
}
class Manager extends Employee{
    constructor(name,salary,department){
        super(name,salary);
        this.department=department;
    }
    yearSalary(){
        console.log(`${this.salary*12*1.5}`);
    }
}
const man1 = new Manager("Павел",1600,"Электроника");
man1.yearSalary();
const man2 = new Manager("Роман",1200,"Бытовая техника");
man2.yearSalary();