function Person(name) {
  Person.nrOfPersons++;
  this.name = name;
  this.speak = function () {
    console.log(`Hi! I'm ${this.name}`);
  };
}
Person.nrOfPersons = 0;

new Person("Adam");
new Person("Eve");

// class Person {
//   static nrOfPersons = 0;
//   name;

//   static {
//     new Person("Adam");
//     new Person("Eve");
//   }

//   constructor(name) {
//     Person.nrOfPersons++;
//     this.name = name;
//   }

//   speak() {
//     console.log(`Hi! I'm ${this.name}`);
//   }
// }

new Person("Frank").speak(); // Hi! I'm Frank
console.log(Person.nrOfPersons); // 3
