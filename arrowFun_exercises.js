// Example1

let players = [
  'kohli',
  'rohit',
  'DhaWan',
  'pant'
];

// ES5 function
let length =players.map(function(element) {
  return element.length;                     
});
console.log(length)      // it will prints output as [5,5,6,4]

// write Arrow function for above code

----------------------------------------------------------------------------------------------------

//Example 2
var scores = [80,100,75,45];

// ES5 function
let total = scores.reduce(function(total,value) {
  return total+value;                          
});

console.log(total);  // it will prints output as 300

// write Arrow function for above code
-----------------------------------------------------------------------------------------------------------
// Example 3
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// ES5 function 
let numberCheck=numbers.filter(function(number) {
return number > 4;                                 
}
 console.log(numberCheck)  // it will print numbers greater than 4

// write Arrow function for above code
 -----------------------------------------------------------------------------------------                    
// Example 4
 let movies = [{name: "Kabali"}, {name: 'Darbar'}];
// ES5 function 
let printMovieName = movies.map(function(movie) {
  return movie.name;                                
});
console.log(printMovieName)  // it will prints output as ["Kabali","Darbar"]

// write Arrow function for above code
------------------------------------------------------------------------------------------------------

// Example 5

var sayHello=function(){
  console.log("Hello World")
}
console.log(sayHello());  // it will prints "Hello World" in console

// write Arrow function for above code
------------------------------------------------------------------------------------------------------

