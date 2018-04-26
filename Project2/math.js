const num1 = 100;
const num2 = 50;
let val;

//Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

//Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.2);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-2);
val = Math.pow(4, 2);
val = Math.min(2, 33, 4, 1, 5);
val = Math.max(33, 55, 4);

//random number between 1 and 20
val = Math.floor(Math.random() * 20 + 1);



console.log(val);
