// FUNCTION DECLARATION
function greet(firstName='John', lastName=' Doe') {
  // firstName = firstName || 'John '
  // lastName= lastName || 'Doe'
  // firstName = firstName || 'John';
  // console.log('Hello');
  return 'Hello ' + firstName + lastName;

}

console.log(greet());

//FUNCTION EXPRESSIONS
const square = function (x=3) {
  return x * x;
};
console.log(square(8));

//IIFE
(function () {
  console.log('IIFE RAN...');
  
})();

// Another IIFE
(function (name) {
  console.log(`Hello ${name}`);
  
})('Ashik');

//PROPERTY METHODS
const todo = {
  add() {
    console.log('Add todo...');
    
  },

  edit(id) {
    console.log(`Edit todo ${id}`);
    
  }
}

todo.delete = function () {
  console.log('Delete todo...');
  
}

todo.add();
todo.edit(22);
todo.delete();