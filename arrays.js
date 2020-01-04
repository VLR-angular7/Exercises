

// 1.Array Literal 
// 2. Array constructor (new keyword)

var arr=[]; //Array literal or empty array
var obj={} // object 

var house=["1bhk","2bhk","3bhk"]  // array with two elements (strings)

var person=[,"sai"];
console.log(person[0]);
console.log(person[1]);
console.log(house.length);



console.log(house[2]);

var mixedArr= [10,"HYD",true,{name:"hyd",age:100}]


var numbers= new Array(10,20,30,40);
console.log(numbers)

var num=new Array(2)

var house=new Array("1bhk");
console.log(house);

var matrix=[
[1,2,3],
[4,5,6],
[7,8,9]

]

matrix[1][2]=10;
console.log(matrix[1][2]);


var numbersArr=[];

numbersArr[1]=25;
numbersArr[4]=50;

console.log(numbersArr.length);


// length property -- no of elements present in array or array higher index +1


// Array methods 

// 1. push and pop

var cities=["hyd","Blr"];

cities.push(25,86)  // it will adds at the end of the array

cities.pop();
cities.pop();

console.log(cities);




// 2. unshift and shift 


var letters=["b","c","d"];
letters.unshift("a");
letters.shift();
console.log(letters)



// 3. remove 
var letters=["a","b","c","d"];
// delete letters[3];
// console.log(letters)


// Array iteration

// for(var i=0;i<letters.length;i++){
//     document.write(letters[i] +"<br>")
//     console.log(letters[i]);
// }


// splice method 


var days=["mon","tue","wed","thu"];


days.splice(4,0,"fri","sat");

console.log(days);

var index=days.indexOf("sat11");

console.log(index)



// indexOf


var numbers=[10,20,30,40]  // sum of array 



function submit(){
    var name =document.getElementsByClassName("name")[0].value;
    var age =document.getElementsByClassName("name")[1].value;

    console.log(name);
    console.log(age);


    var contact={};
    contact.name=name;
    console.log(contact)

    var users=[];
    users.push(contact)
    // alert(name)
}

// submit();


// Slice method

var numbersArr=[10,20,30,45];

var newArr=numbersArr.slice(1,4) // 
console.log(numbersArr)

console.log(newArr);


// reverse

var letters=['a','b','c']
var reverseArr=letters.reverse();

console.log(reverseArr);



// concat or merge 


var cities=["HYD","pune"];

var cities2 =["delhi","mumbai"];
var cities3 =["Indore","Bhopal"]

var allCities=cities.concat(cities2,cities3);

console.log(allCities)




// to string


var numArr=[1,2,3];

console.log(typeof(numArr.toString()))



// Map


var evennumbers=[2,4,6] 


// new arr=[2,4,6,8]


var evenArr=evennumbers.map(testFunction);
console.log("map output"+evenArr);
console.log("old arr"+evennumbers);


function testFunction(value){
    return value*value;
}



// Filter method
var oddNumbers=[1,3,5,21,34,56,78];

var output=oddNumbers.filter(filterFunction);
console.log(output)


function filterFunction(value){
    return value<35;
}



// reduce 



var reduceArr=[10,20,30,45];


var sum=reduceArr.reduce(sumAll);

console.log(sum)


function sumAll(total,value){
    return total+value;
}



// sort 


var letters=['f','c,','r'];

var numSort=[20,15,35,10,100];

var sortArr=numSort.sort(function(a,b){
    return b-a;  // 

});

console.log(sortArr);








var arr=[];

var newArr=[10,30,40]; // output  [];

//newArr=[];

newArr.length=0;

console.log(newArr)


var arr1=[1,2,3]  // output arr2=[1,2,3];

arr2=arr1;
arr1.push(5);
console.log(arr1)
console.log(arr2)
























































