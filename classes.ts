// Todays class 

// classes and inheritance


// two types oop
// 1. class based Oop --- java, C#
// 2. prototype based oop-- js



// what is a class

// class is a blueprint/ model for creating the objects

// How to create class in typescript


// syntax

// class className {

// }



class Employee{
    static phone:number;
       name:string;  // property or member variable of employee class
       age:number;

        constructor(name:string,age:number){
            this.name=name;
            this.age=age;
        }


       getAge(){
           return this.age;
       }
}

let emp1= new Employee("Virat",32);
 emp1.name="Dhawan";
 Employee.phone
 console.log(emp1.name);

// emp1.age=32;

// console.log(emp1.getAge());

let emp2=new Employee("rohit",39);
console.log(emp2.name);

// emp2.name="Rohit";
// emp2.age=35;
// console.log(emp2.age);
// console.log(emp2.getAge());


// instance is process of making an object based on class(blueprint)



// person class  -- base class
// student class
// teacher class



// class Person{
// name:string;
// age:number;
// mobile:number;
// }


// class Student{
//     name:string;
//     age:number;
//     grade:number;
//     marks:number;
// }


// class Teacher{
//     name:string;
//     age:number;
//     subject:string
// }



  abstract class Person{
    name:string;   // Base class
    age:number;
    speak(){
        console.log("Person is speaking");
    }
}

let person1= new Person();



 //let emp11= new Person();

class Student extends Person{    // Derived class
  marks:number;
  speak(){
      super.speak();
    console.log("Student is speaking");
  }
}

let student1= new Student();
let student2= new Student();

student1.name="Bumrah";
student1.marks=100;
console.log(student1.speak());

console.log("std name "+student1.name)
console.log("std marks  "+student1.marks)


class Bank{
    name:string;
    private ifsc:number;
     constructor(name:string,ifsc:number){
         this.name=name;
         this.ifsc=ifsc;

     }
}

let bank2=new Bank("HDFC",2525);

class Sbi extends Bank{
constructor(name:string,ifsc:number){
    super(name,ifsc);
}
}

let bank1= new Sbi("sbi",28898);

console.log(bank1.name)


// Public, private, protected,readonly,static




























