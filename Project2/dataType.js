//var, let, const

var name = "John Doe";
console.log(name);
name = "Ashik";
console.log(name);


// Init var;
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);


//lettets, numbers, _, $
// can not start with number

//Multi word vars
var firstName = 'John'; //camel Case
var FirstName = 'Tom' //Pascal case

//const
//const name = 'Max';
//can't reassign
// name = 'Sara'
// Have to assign a value
// const greeting;

const person = {
  name: 'John',
  age: 30
}

console.log(person);


person.name = 'Stephen';
person.age = 34;

console.log(person);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);
