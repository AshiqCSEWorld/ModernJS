const firstName = "William";
const lastName = "Johnson";
const age = 36;
const str = 'Hello there my name is Ashik';
const tags = 'Web design, web development, programming';

let val;
val = firstName + lastName;

//Concatenation
val = firstName + ' ' + lastName;

//Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age + ' years old!'

//Escaping
val = 'That\'s awesome, I can\'t wait;';

//Length
val = firstName.length;

//concat
val = firstName.concat(' ', lastName);

//Change Case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

//indexof()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

//charAt()
val = firstName.charAt(3);

//getLastCharacter
val = firstName.charAt(firstName.length - 1);

//substring()
val = firstName.substring(0, 4);

//slice()
val = firstName.slice(0, 3);
val = firstName.slice(-3);

//split()
val = str.split(' ');
val = tags.split(',');

//replace();
val = str.replace('Ashik', 'Brad');

//includes();
val = str.includes('Hello');


console.log(val);




