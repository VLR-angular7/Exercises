

// class is blueprint to craete objects

// interface is group of related properties and methods which describes an object


interface IEmployee{
    name:string;
    age:number;
}

interface Ideveloper extends IEmployee{
    empDepartment:string;
}
class Employee implements IEmployee{
     name;
     age;
}

let emp5:IEmployee=new Employee();

emp5.name="Dhawan";

console.log(emp5.name);




var developer:Ideveloper={
    empDepartment:"Angular",
    name:"rohit",
    age:31
}





// //  var emp2={
//     name:"sai",
//     getsalary:function(sal){
//         return sal;
//     }
// }

// emp2.getSalary(1000)

let emp1:IEmployee={
    name:"Rahul",
    age:39
}






// console.log(emp1.getSalary(1000));
// console.log(emp1.name)



