const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;

function hello() {
  return 'Hello';
}

// Without template strings(es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: ' + job + '</li> <li>City: ' + city + ' </li></ul > '

document.body.innerHTML = html;

// with template strings(es6)
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>${2+2}</li>
    <li>${hello()}</li>
    <li${age>30 ? 'Over 30' : 'Under 30'}></li>
  </ul>
`;

document.body.innerHTML = html;