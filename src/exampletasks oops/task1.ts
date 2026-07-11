class Employee {
    name : string;
    id : number;
    department : string;
    dailysalary : number;
    workingdays : number;

    constructor (name:string,id:number,department:string,salary:number,workingdays:number){
        this.name = name;
        this.id = id;
        this.department = department;
        this.dailysalary =  salary;
        this.workingdays = workingdays
    } 


 calculatesalary() : number{

    // const salary = this.dailysalary * this.workingdays;
 
    //    return salary;
    
    if(this.dailysalary > 0 && this.workingdays > 0){
        return(this.dailysalary*this.workingdays);
    
        }
    
    
    else{
        console.log("invalid salary and working days")
        return 0;
        }
    
 }


 
displayDetails() : void {
    console.log(`Employee Name: ${this.name}`);
    console.log(`Employee ID: ${this.id}`);
    console.log(`Employee dailysalary: ${this.dailysalary}`);
    console.log(`Employee Department: ${this.department}`);
    console.log(`Employee workingdays: ${this.workingdays}`);
    console.log(`EmployeeSalary: ${this.calculatesalary()}`);
    console.log('\n--------------------------------------------')
}
}

const emp1 = new Employee("John Doe", 101,"Engineering",0,4);
const emp2 = new Employee("Jane Smith", 102, "Marketing",2000,25);
const emp3 = new Employee("Bob Johnson", 103,"Sales",1500,28);

emp1.displayDetails();
emp2.displayDetails();
emp3.displayDetails();