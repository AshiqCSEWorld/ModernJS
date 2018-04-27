const id = 1000;

//equal
if (id == 1000) {
  console.log('Correct');
} else {
  console.log('Incorrect');

}

//not equal to
if (id !== 101) {
  console.log('correct');
} else {
  console.log('Incorrect');

}

// equal to value and type
if (id === 1000) {
  console.log('Correct');
} else {
  console.log('Incorrect');

}

//Test id undefined
// if (typeof id !== 'undefined') {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log(`No ID`);

// }

if (id > 2000) {
  console.log('Correct');
} else {
  console.log('Incorrect');

}

const color = 'yellow';
//IF-ELSE
if (color === 'red') {
  console.log('Color is red');
  
} else if (color === 'blue') {
  console.log('Color is blue');
  
} else {
  console.log('Color is not red or blue');
  
}

//Logical Operator
const name = 'Steve';
const age = 20;

//AND &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
  
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
  
} else {
  console.log(`${name} is an adult`);
  
}

//OR ||
if (age < 16 || age > 65) {
  console.log(`${name} can't run in race`);
  
} else {
  console.log(`${name} is registers for the race`);
  
}

//TERNARY OPERATOR
console.log(id === 1000 ? 'CORRECT' : 'INCORRECT');
