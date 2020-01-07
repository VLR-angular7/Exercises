// Todays class

// 1. Variables in typescript
// 2.Data types


// Two new types introduced in ES6 

// 1.let
// 2.constant

var empName="Virat";


let num:number;
num=200;
 // type annotation

let personName:string="rohit";

let isDone:boolean=true;



if(true){

}
function sayHi(){
    var num1=300;
    if(num1>200){
let EmpId:string="E101"
console.log("if block :"+EmpId);
    }

    else{
       // console.log("else block :"+EmpId);

    }

    // console.log(EmpId);

}

sayHi();


// scope 

// var
 //1.global level 
  // 2.local level / function level

  // let
  // block level scope


  {
// statements

  }



  // Redeclare


// var empAge:number=26;
// var empAge:number=35;

let empAge:number=30;
    empAge=45;

    console.log(empAge);


    // creating global objects


    var empSalary:number=1000;

    let empSalary1:number=2000;

    //console.log(window.empSalary);

    //console.log(window.empSalary1);




    // we can not read the varaiable until they declared

console.log(empId1);
    var empId1:number=10;
// console.log(empId2);
    let empId2:number;
        empId2=45;
        console.log(empId2);




// constant 

const PI:number=3.14;

const num4:number=250;

const EMPID:string="EMP111";

const ISIT:boolean=true;


// Constants with objects;



const employee={
    name:"Prem",
    age:25
}


// employee = {name:"venkat",age:35,phone:9985};

employee.name="venkat";
// employee.phone=99898


// constants with array


const cities=["HYD","BLR"];
 console.log(cities[0]);

 cities[0]="Pune";
 cities[2]="mumbi";

 console.log(cities[2]);











console.log(employee.name)




























console.log(empAge)




















