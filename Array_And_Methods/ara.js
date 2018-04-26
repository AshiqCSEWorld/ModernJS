// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruits = ['Apple', 'Banana', 'Orange'];
const mixed = [22, 'Hello', true, undefined, null, {
  a: 1,
  b: 1
}, new Date()];

let val;

// Get array length
val = numbers.length;

//check if is array
val = Array.isArray(numbers);

//Get single value
val = numbers[3];

//insert into array
numbers[2] = 100;

//Find index of value
val = numbers.indexOf(36);

//Mutating arrays

//add on to end
numbers.push(250);

//add on to front
numbers.unshift(120);

//take off from end
numbers.pop();

//take of from front
numbers.shift();

//Splice values
// numbers.splice(1, 1);
numbers.splice(1, 3);

//reverse
numbers.reverse();

//concatinate
val = numbers.concat(numbers2);

//Sorting arrays
val = fruits.sort();
val = numbers.sort();

val = numbers.sort((x, y) => {
  return x - y;
});

//Find
function under50(num) {
  return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);


