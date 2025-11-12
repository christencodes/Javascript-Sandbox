`use strict `;

//Arrays------------------------------------
// //Array Add Methods
// const testArray = ["Joe", 1, true, 25.5];

// //pushes parameter to the end
// testArray.push(9);
// //returns the amount of elements in the array
// console.log(testArray.push(10));

// //pushes parameter to the start
// testArray.unshift("a");
// //returns the amount of elements in the array
// console.log(testArray.unshift("b"));

// //Array Remove Methods

// //removes the last element from the array
// console.log(testArray.pop());
// //returns the element removed
// console.log(testArray);

// //removes the first element from the array
// console.log(testArray.shift());
// //returns the element removed
// console.log(testArray);

// //returns the index of an element if it's in the array
// console.log(testArray.indexOf("a"));
// console.log(testArray.indexOf(true));

// //returns falsey value if element not in array
// //this returns -1
// console.log(testArray.indexOf("nothing"));

// //returns true or false if element is in array or not
// //this is true
// console.log(testArray.includes("a"));
// //this is false
// console.log(testArray.includes("nothing"));

//Objects------------------------------------

//Objects are similar to arrays, but unlike arrays they contain key-value pairs also referred to as properties
// const person = {
//   firstName: "Jason",
//   lastName: "Johnson",
//   birthYear: 1991,
//   hasDriversLicense: true,
// };

// //values can be accessed by bracket or "." (dot notation)

// //bracket notation
// //note - when using bracket notation, a string must be placed inside the brackets
// console.log(person["birthYear"]);
// //expressions are inserted into the brackets
// console.log(person["birth" + "Y" + "ear"]);

// //dot notation
// console.log(person.firstName);

// //Properties can be added to objects

// //This adds a property to the person object with a key of friends and an array as the value;
// person.friends = ["Timothy", "John", "Angela"];
// console.log(person);

// //Objects can also have methods

// //test: can I add a function to an object?
// //result: a function can be added to an object after it's been declared

// //the this keyword points to the object itself
// person.calcAge = function () {
//   return 2025 - this.birthYear;
// };

// console.log(person);
// console.log(person.calcAge());

// //an example of this in action

// person.currentName = function () {
//   return this.firstName + " " + this.lastName;
// };

// person.currentPerson = function () {
//   return this;
// };

// console.log(person);
// console.log(person.currentName());

// //returning this
// //this returns the object
// //this points to the object!
// console.log(person.currentPerson());

// //Challenge
// //lets return the summary "Jason is a 34-year old teacher, and he has a driver's license"

// person.summaryOf = function () {
//   return `${this.firstName} is a ${this.calcAge()}-year old teacher, and he ${
//     this.hasDriversLicense ? "has" : "does not have"
//   } a driver's license! `;
// };

// console.log(person.summaryOf());

//lecture challenge
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    mark.bmi = this.mass / (this.height * this.height);
    return mark.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    john.bmi = this.mass / (this.height * this.height);
    return john.bmi;
  },

  summaryOf: function () {
    console.log(this);
  },
};

const higherBMI = (markBMI, johnBMI) => {
  if (markBMI > johnBMI) {
    console.log(
      `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${
        john.fullName
      }'s (${john.calcBMI()})!`
    );
  } else if (johnBMI > markBMI) {
    console.log(
      `${john.fullName}'s BMI (${john.bmi}) is higher than ${
        mark.fullName
      }'s (${mark.calcBMI()})!`
    );
  } else {
    console.log("Nobody wins!");
  }
};

higherBMI(mark.calcBMI(), john.calcBMI());

john.summaryOf();
