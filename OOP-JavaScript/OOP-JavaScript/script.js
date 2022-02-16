'use strict';

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never create a method inside of a constructor function
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// const max = new Person('Max', 1997);
// console.log(max);

// const andressa = new Person('Andressa', 1998);
// const pet = new Person('Petterson', 1997);

// console.log(max instanceof Person);

///////// Prototypes ///////////
// console.log(Person.prototype);

// Esse prototype aqui, se refere a todos os objetos instanciados a partir da classe Person
// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };

// Each object that was created will get access to this prototype property "Person"

// max.calcAge();

// console.log(max.__proto__);
// console.log(max.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(max));
// console.log(Person.prototype.isPrototypeOf(andressa));
// console.log(Person.prototype.isPrototypeOf(Person));

// .pototypeOfLinkedObjects

// Setting properties on the prototype
// Person.prototype.species = 'Homo Sapiens'; // They will be in the [[Prototype]]: Object

// console.log(max.species);
// console.log(max.hasOwnProperty('firstName'));

//////// Prototypal Inheritance on Built-In Objects //////////
// Prototypal Inheritance on Built-In Objects
// console.log(max.__proto__);

// Object.prototype (top of prototype chain)
// console.log(max.__proto__.__proto__);
// console.log(max.__proto__.__proto__.__proto__);

// Inspecting the function itself
// console.dir(Person.prototype.constructor);

// Prototype of arrays
const arr = [3, 6, 5, 6, 7, 3, 2]; // new array === []
// Each array will not contain all of these methods but instead, each array will inherit these methods from its prototype.
// console.log(arr.__proto__);
// console.log(arr.__proto__ == Array.prototype);

// adding new properties/methods to Array.prototype
Array.prototype.unique = function () {
  return [...new Set(this)]; // THIS is going to be the array on which this method will be called
};

// console.log(arr.unique());

// Getting the prototype of DOM
const h1 = document.querySelector('h1');

// console.dir(h1);

///////////////////////////////////////
// Codding Challenge
/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.breake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.breake();

// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.breake();

///////////// ES6 Classes /////////////

// Class expression
// const PersonCL = class { }

// Class declaration
class PersonCL {
  // First thing to do is add a constructor method
  constructor(
    // We pass in arguments for the properties that we want the object to have
    firstName,
    birthYear
  ) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  } // works similar as the constructor function, but this one is a method of this class

  // All of these methods that we write in the class, so outside of the constructor will be on the prototype of the objects. And not on the objects themselves.
  calcAge() {
    console.log(2022 - this.birthYear);
  }
}

const maxuel = new PersonCL('Maxuel', 1975);
// console.log(maxuel);

// maxuel.calcAge();

// Adding a method manually to the prototype
PersonCL.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};

// maxuel.greet();

// 1. Classes are NOT hoisted (we can use them before they are declared in the code)
// 2.  Class are first-class citizes (we can pass them into functions and also return them from functions)
// 3. Classes are executed in stric mode. The body of a class is always executed in strict mode. (even if we didn't  active it for our entire script, all the code that is in the class will be executed in strict mode)

/////////////  Setters and Getters //////////////
const account = {
  owner: 'Max',
  movements: [200, 530, 500],

  // to transform in to a getter we prepend get
  get latest() {
    return this.movements.slice(-1).pop();
  },

  // Any setter method needs to have one parameter
  set latest(mov) {
    this.movements.push(mov);
  },
};

////// GETTER
// We will use it like a property, we don't call the method, but instead we write it as if it was just a property
// console.log(account.latest);

////// SETTER
// Any setter method needs to have one parameter
account.latest = 50;
// console.log(account.latest);

class PersonCL2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Instance methods
  calcAge() {
    console.log(2022 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  // We can read the age of any object using a property.
  get age() {
    return 2022 - this.birthYear;
  }

  // Testing validation with Getter/Setter
  // Set a property that already exists
  set fullName(name) {
    // console.log(name);
    if (name.includes(' ')) this._fullName = name;
    // When we have a setter which is trying to set a property that does already exist, than as convenction we add underscore.
    // When we do this we are actually creating a new variable
    else alert(`${name} is not a full name!`);
  }
  // We need to create this getter to be able to access the fullName property
  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there CL');
  }
}

const maria = new PersonCL2('Maria Célia', 1971);
// console.log(maria.age);
// console.log(maria.fullName);

////////// Static Methods //////////

// Adding a static method

// Person.hey = function () {
//   // Não pode ser herdado, pois não utilizamos o prototype !!
//   console.log('Hey there');
//   // The this keyword here is the entire constructor, and the reason for that is because, that is exactly the object that is calling the method.
// };

// Person.hey();
// andressa.hey(); // Uncaught TypeError: andressa.hey is not a function

// Creating a static method on Classes

// static hey() {
//     console.log('Hey there');
//   }

// PersonCL2.hey();

////////// Object.create //////////

// This object will be literally the prototype of all the person objects.
const PersonProto = {
  calcAge() {
    // console.log(2037 - this.birthYear);
  },

  // Creating new method
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto); // Here we pass the object that we want to be the prototype of the new object.
// This will now return a brand new object that is linked to the prototype that we passed in here.

// console.log(steven);
// Wrong way of setting properties
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

// console.log(steven.__proto__ === PersonProto); // TRUE

const sarah = Object.create(PersonProto);

// Setting properties
sarah.init('Sarah', 1979);
// sarah.calcAge();

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.
DATA CAR 1: 'Ford' going at 120 km/h
GOOD LUCK 😀
*/

class CarClass {
  constructor(maker, speed) {
    this.maker = maker;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.maker} is going at ${this.speed} km/h`);
  }

  breake() {
    this.speed -= 5;
    console.log(`${this.maker} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarClass('Ford', 120);

// console.log(ford.speedUS);
ford.speedUS = 30;
// console.log(ford);

/////////// Inheritance Between "Classes": Constructor Functions ////////////

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

// Wrong way
// const Student = function (firstName, birthYear, course) {
//   Person(firstName, birthYear);
//   this.course = course;
// };

// We have to set manually the this keyword and call the function
// Here we want the this keyword inside the Person function to be the this keyword inside the Student's Person
// Because the this keyword is gonna be in the beginning, this empty object that  is being created by the new operator.
// And so it is on that new object where we want to set the firstName and the birthYear property
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Student.prototype should be object.create(Person.prototype)
// And with this, the student.prototype object is now an object that inherits from Person.prototype.

// We have to create this connection before we add any more methods to the prototype object of student. Because object.create will return an empty object
Student.prototype = Object.create(Person.prototype); // So at this point student.prototype is empty

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2000, 'Computer Science');

// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

//////////////////////////////////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉
DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/

const CarCH3 = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

CarCH3.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

CarCH3.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

// EV Constructor
const EV = function (make, speed, charge) {
  CarCH3.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(CarCH3.prototype);

// Adding methods
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);

// console.log(tesla);
// tesla.accelerate();
// tesla.chargeBattery(90);
// tesla.brake();
// tesla.accelerate();

///////////// Inheritance Between "Classes": ES6 Classes ///////////////
// We need extent keywords and we need the super function.

class StudentCL extends PersonCL2 {
  constructor(fullName, birthYear, course) {
    // This always needs to happens first
    // Here we pass the arguments for the constructor of the parent class.
    super(fullName, birthYear); // Is basically the constructor function of the parent class.
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  // Overwriting one method of the parent class.
  // Because this methodd appears first in the prototype chain, it will overring the method coming from the parent class. "Its shadowing the one that is in the parent class"
  calcAge() {
    console.log(
      `I'm ${
        2022 - this.birthYear
      } years old, but as a student I feel more like ${
        2022 - this.birthYear - 10
      }`
    );
  }
}

const martha = new StudentCL('Martha Jones', 1980, 'Computer Science');
// martha.introduce();
// martha.calcAge();

////////// Inheritance Between “Classes”: Object.create ////////////
const PersonProtoIn = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const roberto = Object.create(PersonProtoIn);

const StudentProtoIn = Object.create(PersonProtoIn);
// adding an init method to StudentProto
StudentProtoIn.init = function (firstName, birthYear, course) {
  PersonProtoIn.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProtoIn.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProtoIn);
jay.init('Jay', 1999, 'Computer Science');
// console.log(jay);
// jay.introduce();
// jay.calcAge();

////////////////// Another Class Example //////////////////
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = []; // We can create even more properties on any instance and properties that are not based on any inputs.
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${this.owner}`);
  }
  // Public inteface of our objects
  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    // We still need to use the this keyword to be able to access this other method
    this.deposit(-val); // We can call other methods inside of a certain method
  }

  // We need data encapsulation and data privacy.
  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

// const acc1 = new Account('Max', 'BR', 2222);
// console.log(acc1);

// Its better to create methods that interact with our properties
// Now we are actually using this public interface (the methods that we create are basically the interface to our objects, and we also call this API)
// acc1.deposit(250);
// acc1.withdraw(140);

// console.log(acc1);

//////////////// Encapsulation: Protected Properties and Methods ////////////

class AccountFakeEncap {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this._pin = pin;
    this._movements = []; // first step is add underscore here
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${this.owner}`);
  }
  // Public interface
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    // Protected property | Underscore movement
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  // Protected method | Underscore movement
  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

///////// Encapsulation: Private Class Fields and Methods //////////

class AccountPrivate {
  // 1) Public Fields (instances)
  locale = navigator.language; // are also referenceable by the this keyword

  // 2) Private fields (instances)
  #movements = []; // The hash(#) makes a field private
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this.#pin = pin;
    // this._movements = []; // first step is add underscore here
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${this.owner}`);
  }
  // 3) Public methods
  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    // Protected property | Underscore movement
    this.#movements.push(val);
    return this;
  }

  // Protected method | Underscore movement
  _approveLoan(val) {
    return true;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  // 4) Private methods | Browsers doesn't support
  // #approveLoan(val) {
  //   return true;
  // }
}

// console.log(AccountPrivate);
const acc1 = new AccountPrivate('Max', 'BR', 2222);
// console.log(acc1);

////////////// Chaining Methods ///////////////
// We have to return the object itself at the end of a method that we want to be chainable.

// We create return this in all methods
// Returning THIS will essentially make the method chainable. And this makes more sense in methods  that actually set some property
acc1.deposit(300).deposit(300).withdraw(35).requestLoan(25000).withdraw(4000);

console.log(acc1.getMovements());

//////////////////////////////////////////////////////////////////////
/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!
DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/
class EVCL extends CarClass {
  // Private
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `Tesla going at ${this.speed} km/h, with a charge of ${this.#charge}%`
    );
    return this;
  }
}

const rivian = new EVCL('Rivian', 120, 23);
// console.log(rivian.#charge);

rivian.accelerate().accelerate().accelerate().breake().chargeBattery(50);

console.log(rivian.speedUS);
