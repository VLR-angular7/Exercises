


// Syntax 

// Defining function

// function functionName () {
//     //statemnet1
//     // statement 2
// }

// calling function

//functionName();



function showMessage() {
    console.log("My first function");
    document.write("first function");
    var myObj={};
    myObj.name="Hello";

    console.log(myObj);
}

showMessage()


function sum(){
    var a=10;
    var b=20;
    var sum=a+b;
    console.log(sum);
}

sum();



// With parameters

function add (a,b){  // a,b parameters
    console.log(a);
    console.log(b);
    var sum=a+b;
    console.log("sum :"+sum);
};

// add(10,25);   // 10,5 arguments
// add(15,25); 
// add(20,35); 
// add(30,55); 

printName();


function printName(firstName,lastName){
    console.log(firstName);
     console.log(lastName);
    // var fullName= firstName +lastName;
    // console.log("name :"+fullName)
}

console.log("first :"+total)

var total=100;
console.log("last :"+total)




// function without name  // function expresiion

// myFunction(10,78);

// var myFunction=function(a,b){
// console.log(a);
// }

// console.log();


// Immediately invoked function
// (function(){
//     console.log("Hello");
// })()


// Varaible scope

// 1. Global scope 
// 2.Local scope

// JSON.stringify()


var number=100;

function sum(){
    var number=30;
    console.log("inside :"+number);
    // var sum= number+b;
    // console.log(sum);
}
sum();

// console.log("outside :"+b);
console.log(number);



var person={name:"hyd",age:21};

document.write(JSON.stringify(person))

















