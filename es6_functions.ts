
//1.Named function
//2.Anonymous function


// 1.All the arrow functions are anonymous


// ES5 version

// scenario 1:  when you want accept two params and return value from it.


var sum=function(a:number,b:number){
    return a+b;
}

console.log(sum(5,10));



//Es6 
var sumArrow= (a,b) =>  a+b;

console.log("Arrow :"+sumArrow(25,35));

// NOTE:

// 1. Function keyword is not required
//2. => is required
//3.{} is not required
//4. return is not required // return is implicitly added




// Scenario 2

//when you want pass only one parameter and reutn value from it

// ES5

var double=function(x) {
    return x*2;
}

console.log(double(3));

var doubleArrow = x => x*2;

console.log(doubleArrow(5));

// Note : we can ignore parenthesis 



// Sceneraio 3

// When you dont want pass any value and dont want return anything

//ES5

var sayHi=function(){
    console.log("Hello");
}

console.log(sayHi())
//ES6

var sayHiArrow =()=>{
    console.log("Hi");
}

console.log(sayHiArrow());




// Scenario 5


// We can use return explicitly


var multiplyArrow =(a,b)=>{
    // console.log(arguments);
    return a*b;
}

console.log(multiplyArrow(10,20));

// function multiply(a,b){
//     var test =()=> {
//         return arguments[0];
//     };
//     test();
// }

// multiply(300,25);

// scenario 6
// Arrow functions dont have their own arguments but it will depend on outer context

// scenario 7 

// Arrow functions dont have their own this reference


// This is referes to an object.

function employee(){
    console.log(this);
}

employee();


var person={
    name:"karthik",
    sayHi:function(){
        var f1=function(){
            console.log(this.name)
        }
        f1();
    }
}

person.sayHi();

//es5


var personArrow={
    name:"Vlr",
    sayHi:function(){
        var f1=()=>{
            console.log(this.name);
        }
        f1();
        
    }

}

personArrow.sayHi();





































