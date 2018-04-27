const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear() {
    return 2018 - this.age;
  }
}

let val;
val = person;
val = person.firstName;
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.getBirthYear();
console.log(val);

// Array of Objects
const people = [{
    name: 'John',
    age: 30
  },
  {
    name: 'Mike',
    age: 23
  },
  {
    name: 'Nancy',
    age: 19
  }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);

}