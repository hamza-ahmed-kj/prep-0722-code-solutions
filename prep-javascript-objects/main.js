var person = {
  firstName: 'Hamza',
  lastName: 'Ahmed',
  hobby: 'Playing Video Games'
};

console.log(person);

var fullName = `${person.firstName} ${person.lastName}`;
console.log(`This person's name is: ${fullName}`);

person.job = 'gaming';
console.log(`This person's current job is: ${person.job}`);

person.previousJob = 'studying';
console.log(`This person's previous job is: ${person.previousJob}`);

console.log(person);
