// Example1

let players = [
  'kohli',
  'rohit',
  'DhaWan',
  'pant'
];

// ES5 function
players.map(function(element) {
  return element.length;                     // it will prints output as [5,5,6,4]
});

// write Arrow function for above code

//Example 2
var scores = [80,100,75,45];

// ES5 function
scores.reduce(function(total,value) {
  return total+value;                          // it will prints output as 300
});

// write Arrow function for above code

// Example 3
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// ES5 function 
let numbercheck=numbers.filter(function(number) {
return number > 4;                                 // it will print numbers greater than 4
}

// write Arrow function for above code

