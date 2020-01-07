// Number

let num:number=100;
let price:number=10.50;

console.log(typeof(price))

// String --> Sequence of characters 

let movieName:string="SVSC";


let lang:string="Type script";

// Split --> it will converts to array
let lang1=lang.split("");

console.log(lang1);

// Index of

var pIndex=lang.indexOf("p");
console.log(pIndex)

// Array data type

 //let cities1=["HYD","BLR",1,2,true,null];

let cities:any[]=["HYD","BLR",100,300,true];
let numbers1:Array<number>=[100,200,300];
numbers1.push(500);
// numbers1.push("hi");

console.log(numbers1);


// Any


let movie:any="F2";
    movie=100;



    // Tuple  --> special kind of array data type


    var empId=123;
    var empName="Srinivas";






    let employee:[number,string]=[123,"Srinivas"];

    console.log(employee[0]);




    // void   



    function sayHi():void {
        console.log("Hello world")
    }

    let msg=sayHi();

    console.log(msg);

function add():number{
    return 10+20;
}

let value=add();

console.log(value);






// Union  



let empId6:(string | number) ="Emp123";

empId6=7685;
empId6=null;


// null


let movieName1:string="test";
movieName1=undefined;


let nothing:null=null;


// undefined 


let not :undefined=undefined





// enum and never   


























let employees:number[];

employees=["hi",1,2]













