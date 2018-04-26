let val;

//Number to string
val = String(5);
val = String(4 + 4);

//Boolean to String
val = String(true);

//Date to String
val = String(new Date());

//Array to String
val = String([1, 2, 3, 4]);

//toString()
val = (5).toString();
val = (true).toString();

//string to Number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number(undefined);
val = Number('Hello');

//parseInt
val = parseInt('100');
val = parseFloat('100.31');
//Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed(2));

//type coercion
const val1 = String(5);
const val2 = 6;
const sum = val1 + val2;
console.log(sum);
console.log(typeof sum);






