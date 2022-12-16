// class Employee{
//     //methods
//     //this keyword is used to access the class varibales in the scope
//     //constructor
//     constructor(entId,name1){
//     // initialize the entID using "this" keyword
//         this.entId = entId;
//         this.name1 = name1
//     }
//     //class method
//     display(){

//         console.log("Employee Ent ID is :"+ this.entId);
//         console.log("My name is :",this.name1)
//     }
// }
// //Object creation
// let empObj = new Employee('rhutuja.b.patil@accenture.com');
// let n=new Employee("Rhutuja")

// //call the class method
// empObj.display();
// n.display();



// class Product{
//     constructor(){
//         this.pid="abc";
//         this.pname="XYZ";
//         this.price=5000;
//     }
//     display(){
//         console.log("Product ID is :",this.pid)
//         console.log("Product ID is :",this.pname)
//         console.log("Product ID is :",this.price)
//     }
// }
// let a=new Product("ABD")
// let b=new Product("XYZ")
// let c=new Product("5000")
// a.display()
// b.display()
// c.display()







class Employee{
//methods
//this keyword is used to access the class varibales in the scope
//constructor
    constructor(ename,entId){
        // initialize the entID using "this" keyword
        this.entId = entId;
        this.ename= ename;
    }
    //class method
    display(){
        console.log("Employee Ent ID is :"+ this.entId);
        console.log("Employee Name :" + this.ename);
    }
}
//Object creation
let empObj = new Employee("Kalpana","abc");
// let empObj1 = new Employee("abc");
//call the class method
empObj.display();
// empObj1.display()