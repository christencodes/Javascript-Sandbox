"use strict";

// const shoppingList = document.querySelector(".shopping-list");

// //I need to gather all the lis in the shoppingList
// const items = shoppingList.getElementsByTagName("li");
// console.log(items);

// //this creates a HTML collection that can be looped overconsole.log(items);

// //loop over the element and change the background based on index

// //test

// const colorGreen = "hsl(120, 100%, 50%)";
// const colorBlue = "hsl(238, 100%, 50%)";

// //this works!
// // items[0].style.backgroundColor = colorBlue;

// //iterate over array of li

// for (reps = items.length - 1; reps >= 0; reps -= 1) {
//   if (reps % 2 == 0) {
//     items[reps].style.backgroundColor = colorBlue;
//   } else {
//     items[reps].style.backgroundColor = colorGreen;
//   }
// }

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// /* Write your code below. Good luck! 🙂 */

// const calcAverage = function (arr) {
//   let currentTotal = 0;
//   for (let reps = 1; reps <= arr.length - 1; reps++) {
//     currentTotal += arr[reps];
//   }

//   return currentTotal / arr.length;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

// for (let reps = 0; reps <= bills.length - 1; reps++) {
//   tips.push(calcTip(bills[reps]));
//   totals.push(tips[reps] + bill[reps]);
// }

// calcAverage(totals);

//JSON
//JSON.parse(jsonString) - json string to javascript object
//deserialization

//JSON.stringify(jsValue) - javascript to jason
//serialization

//the fetch api is asynchronous
//we need 'async' before the function
//we need 'await' before any ansynchronous functions

/*
 1. Place url in variable
 2. Create new Request Object with url
 3. Create response using fetch(request)
 4. Place the response.json() in a variable
 5. The variable now holds the JSON string as a JS Object or array
 */

//this function obtains the json and places it in a variable
// const populate = async () => {
//   //we are placing the request url in a const
//   const requestURL =
//     "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

//   //creating a new request object with the url as a argument
//   const request = new Request(requestURL);

//   //making a network request with a response object
//   const response = await fetch(request);
//   //converts the response into a js object - this is if it responds well...
//   const superHeroesText = await response.text();

//   const superHeroes = JSON.parse(superHeroesText);
//   //this prints out a js object with a type of object
//   console.log(superHeroes, typeof superHeroes);
//   console.log("--------------");

//   populateHeader(superHeroes);
//   populateSection(superHeroes);
// };

// //function to populate the header via the obj from populate!
// function populateHeader(obj) {
//   //placing header element inside const
//   const header = document.querySelector("header");
//   //creating an h1 that will be added to the header
//   const myH1 = document.createElement("h1");
//   //updating the created h1's text content with the squadName
//   myH1.textContent = obj.squadName;
//   //appending the h1 to the header
//   header.appendChild(myH1);

//   //---------------
//   //Creating Paragraph
//   const myPara = document.createElement("p");
//   //updating myPara's text content with obj data
//   //obj.hometown is the heroes hometown
//   //obj.formed is when the superhero team was formed
//   myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
//   //append myPara to the header
//   header.appendChild(myPara);
//   header.style.marginBottom = "20px";
//   header.appendChild(document.createElement("hr"));
// }

// function populateSection(obj) {
//   //select the section
//   const section = document.querySelector("section");
//   //place the members array into the const heroes
//   const heroes = obj.members;

//   //iterate over the heroes and create an article for each one
//   for (hero of heroes) {
//     //create article
//     const heroArticle = document.createElement("article");

//     //create h2 ; 3 paragraphs ; 1 unordered list
//     const heroH2 = document.createElement("h2");
//     const heroParagraph1 = document.createElement("p");
//     const heroParagraph2 = document.createElement("p");
//     const heroParagraph3 = document.createElement("p");
//     const heroPowersList = document.createElement("ul");

//     //h2 : hero name
//     //p1 : secret identity
//     //p2 : hero age
//     //p3 : Super powers

//     heroH2.textContent = hero.name;
//     heroParagraph1.textContent = `Secret Identity: ${hero.secretIdentity}`;
//     heroParagraph2.textContent = `Age: ${hero.age}`;
//     heroParagraph3.textContent = "Superpowers";

//     //create const to hold powers array
//     const superPowers = hero.powers;
//     //iterate over array and place powers in list items
//     //append li to heroPowersList
//     for (power of superPowers) {
//       const heroListItem = document.createElement("li");
//       // console.log(superPowers[`${power}`]);
//       heroListItem.textContent = power;
//       heroPowersList.appendChild(heroListItem);
//     }

//     //append everything to the article
//     heroArticle.appendChild(heroH2);
//     heroArticle.appendChild(heroParagraph1);
//     heroArticle.appendChild(heroParagraph2);
//     heroArticle.appendChild(heroParagraph3);
//     heroArticle.appendChild(heroPowersList);
//     heroArticle.appendChild(document.createElement("hr"));
//     heroArticle.style.marginBottom = "15px";

//     section.appendChild(heroArticle);
//   }
// }

// populate();

//acces json data and put it in the page

// const populate = async () => {
//   // https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/json/sample.json

//   const catsURL = "cats.json";

//   //create a request object with url
//   const request = new Request(catsURL);
//   // place the request in a response
//   const response = await fetch(request);
//   //response into text
//   responseText = await response.text();
//   const catsInfo = JSON.parse(responseText);

//   // console.log(catsInfo, typeof catsInfo);
//   // // console.log(catsInfo[0]);

//   displayCatInfo(catsInfo);
// };

// function displayCatInfo(obj) {
//   //append everything into this article
//   //create article that will be appended to the section

//   //grab the section
//   const section = document.querySelector("section");

//   const motherCats = obj;

//   for (mothers of motherCats) {
//     const catArticle = document.createElement("article");
//     const motherCatH2 = document.createElement("h2");
//     const catBreed = document.createElement("p");
//     const catColor = document.createElement("p");
//     const kittenHeading = document.createElement("h3");
//     const catKittenList = document.createElement("ol");

//     motherCatH2.textContent = mothers.name;
//     catBreed.textContent = mothers.breed;
//     catColor.textContent = mothers.color;
//     kittenHeading.textContent = "Kittens:";

//     const kittens = mothers.kittens;
//     for (kitten of kittens) {
//       const kittenListItem = document.createElement("li");
//       kittenListItem.textContent = `Name: ${kitten.name} \\ Gender: ${kitten.gender}`;
//       catKittenList.appendChild(kittenListItem);
//     }

//     //append everything to the article
//     catArticle.appendChild(motherCatH2);
//     catArticle.appendChild(catBreed);
//     catArticle.appendChild(catColor);
//     catArticle.appendChild(kittenHeading);
//     catArticle.appendChild(catKittenList);
//     catArticle.style.marginBottom = "20px";
//     catArticle.appendChild(document.createElement("hr"));
//     ///append article to section
//     section.appendChild(catArticle);
//   }

//   //total number of kittens
//   //how many kittens are male and female
// }

// populate();

//

// const redFruits = ["apple", "strawberry", "cherry"];

// const fruit = {
//   name: "apple",
//   color: "red",
// };

// function test({ name } = {}) {
//   console.log(name || "unknown");
// }

// test({ name: "pinestarberry", color: "rainbow" });
// test();

// const answer = false;
// let isValid = true;

// if (answer) {
//   isValid = false;
// }

// console.log(isValid);

// let a = 10;
// let b = 5;

// [a, b] = [b, a];
// console.log(`a:${a} ; b ${b}`);

// const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];

// let [primaryColor, , sunnyColor, ...otherColors] = colors;

// console.log(primaryColor);
// console.log(sunnyColor);
// console.log(otherColors);
// const student1 = ["Alice Johnson", 10, "A+"];
// const student2 = ["Bob Smith", 11]; // Missing the grade

// const getStudentInfo = function ([name, gradeLevel, grade = "N/A"]) {
//   return `${name} is in the ${gradeLevel}th and has a grade of ${grade}.`;
// };

// console.log(getStudentInfo(student1));
// console.log(getStudentInfo(student2));

// const userProfile = {
//   firstName: "Alex",
//   lastName: "Perez",
//   country: "USA",
//   occupation: "Developer",
// };

// const { firstName: personName, occupation: jobTitle } = userProfile;

// console.log(personName, jobTitle);

// const product = {
//   id: "P001",
//   name: "Wireless Headphones",
//   price: 99.99,
//   details: {
//     manufacturer: "AudioTech",
//     weight: "250g",
//     color: "Black",
//   },
// };

// const incompleteProduct = {
//   id: "P002",
//   name: "Basic Keyboard",
//   price: 19.99,
//   // The 'details' object is completely missing
// };

// // const getItemDetails = function ({
// //   name: itemName,
// //   price: itemPrice,

// // }){

// // }

// const {
//   id,
//   name: itemName,
//   price,
//   details: { color: itemColor } = { color: "no-color" },
// } = incompleteProduct;

// console.log(id, itemName, price, itemColor);

//12/22/2025-------------On Stream
//1. Extract red into firstColor and green into secondColor
// const colors = ["red", "green", "blue"];

// const [firstColor, secondColor] = colors;
// console.log(firstColor, secondColor);

//2. Skipping elements - extract 10 into first and 30 into third (skip 20)
// const numbers = [10, 20, 30, 40];
// const [first, , third] = numbers;
// console.log(`first: ${first} ; third: ${third}`);

//3. Swapping Variables - swap the values of a and b using array destrcturing
// let a = 5;
// let b = 10;

// [a, b] = [b, a];

// console.log(`a: ${a} ; b: ${b}`);

//4. Default values
// const scores = [95];
// //extract firstScore and secondScore
// //secondScore should default to 0
// const [firstScore, secondScore = 0] = scores;

// console.log(`firstScore: ${firstScore} ; secondScore: ${secondScore}`);

//5. Usin the rest operator
// const fruits = ["apple", "banana", "cherry", "date"];
// //extract 'apple into firstFruit
// //store the remaing fruits in otherFruits

// const [firstFruit, ...otherFruits] = fruits;
// console.log(`firstFruit: ${firstFruit} ; otherFruits: ${otherFruits}`);

//6.Ignoring values - extract only 2 and 4 into variables
// const data = [1, 2, 3, 4, 5];
// const [, a, , b] = data;
// console.log(`a: ${a} ; b: ${b}`);

//7. Basic Nesting
//Extract 1 into a, 2 into b, and 3 into c
// const nested = [1, [2, 3]];
// const [a, [b, c]] = nested;
// console.log(`a: ${a} ; b: ${b} ; c: ${c}`);

//8. Deeper Nesting
//extract 1,2,3,4 into separate variables
// const matrix = [
//   [1, 2],
//   [3, 4],
// ];
// const [[a, b], [c, d]] = matrix;
// console.log(`a: ${a}; b: ${b} ; c: ${c} ; d: ${d}`);

//9. Mixed skipping + nesting
//extract 10 and 30 only
// const mixed = [0, [10, 20], 30];
// const [,[a], b] = mixed;
// console.log(`a: ${a} ; b: ${b}`);

//10. Destructuring function results
//extract x and y from the function call

// function getCoords() {
//   return [12, 15];
// }
// const [x, y] = getCoords();
// console.log(`x: ${x}; y: ${y} `);

//11. Default values in function results
//extract theme and layout (default layout to "grid");

// const getUserSettings = () => {
//   return ["dark"];
// };

// const [theme, layout = "grid"] = getUserSettings();
// console.log(`theme: ${theme}, layout: ${layout}`);

//12. Parsin Data
//extract status and code, ignore the object

// const apiResponse = ["success", 200, { id: 1 }];

// const [apiStatus, code] = apiResponse;
// console.log(`apiStatus: ${apiStatus}; code: ${code}`);

//13. Head & Tail
//Extract the first element into head
//Put the rest into tail

// const list = [1, 2, 3, 4, 5];
// const [head, ...tail] = list;
// console.log(`head: ${head}, tail: ${tail}`);

//14. Destrcturing in loops

//Use destructuring in a loop to log:
//"1 means one", etc.

// const [a, b, c] = (function () {
//   const arr = [];
//   pairs.forEach((element) => {
//     arr.push(`${element[0]} means ${element[1]}`);
//   });
//   return arr;
// })();

// console.log(a, b, c);

// const [b, c] = (function () {
//   return [1, 3];
// })();

// console.log(c);

// const pairs = [
//   [1, "one"],
//   [2, "two"],
//   [3, "three"],
// ];

// pairs.forEach((element) => {
//   let [x, y] = element;
//   console.log(x, y);
// });
// console.log("------------------------");

// //15. One liner Challenge
// const values = [1, 2, 3];
// const [first, second, ...rest] = values;
// const users = ["chris", "antz", "ghost"];
// const [a, b, c] = users;

// const user = {
//   x: "Chris",
//   youtube: "@christencodes",
//   languages: {
//     first: "English",
//     second: "Spanish",
//     third: "French",
//   },

//   currentUsers: [
//     {
//       firstNames: [
//         {
//           one: 1,
//           two: 2,
//         },
//         {
//           three: 3,
//           four: 4,
//         },
//         {
//           five: 5,
//           six: 6,
//         },
//       ],
//       lastName: "Brown",
//     },
//     {
//       firstName: "Devin",
//       lastName: "Gray",
//     },
//     {
//       firstName: "Ace",
//       lastName: "Unpacking",
//     },
//   ],
// };

// const {
//   currentUsers: [
//     {
//       firstNames: [, , { five }],
//     },
//     { firstName, lastName },
//   ],
// } = user;
// console.log(lastName);

//Object Destructuring Basics
//1. Basic Extraction
// const user = {
//   name: "Alex",
//   age: 28,
//   city: "Austin",
// };

// const { name: firstName, age } = user;
// console.log(` The user's name is ${firstName} and they are ${age} years old!`);

//2 Order doesn't matter
//extract year and make (order should not matter)

// const car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2022,
// };

// const { year, make } = car;
// console.log(`This car is a great deal! It's a ${year} ${make}!`);

//3. Renaming Variables
//extract title as productName

// const product = {
//   title: "Laptop",
//   price: 1200,
// };

// const { title: productName } = product;
// console.log(productName);

//4. Default values
//extract theme and fontsize
//fontsize should default to 16

// const settings = {
//   theme: "dark",
// };

// const { theme, fontSize = "16px" } = settings;
// console.log(theme, fontSize);

//5. Undefined Properties
//extract username and bio
//bio should default to 'No bio yet'

// const profile = {
//   username: "coder123",
// };

// const { username, bio = "No bio yet 😒" } = profile;
// console.log(username, bio);

//6. Basic Nesting
//extract city and zip

// const user = {
//   name: "Sam",
//   address: {
//     city: "Denver",
//     zip: 80202,
//   },
// };

// const {
//   address: { city, zip },
// } = user;

// console.log(city, zip);

//7. Deep Nesting
//extract floor and country

// const company = {
//   name: "TechCorp",
//   location: {
//     country: "USA",
//     office: {
//       floor: 5,
//     },
//   },
// };

// const {
//   location: {
//     country,
//     office: { floor },
//   },
// } = company;
// console.log(country, floor);

//8. Renaming Nested Values
//extract id as userID

// const response = {
//   status: "ok",
//   data: {
//     id: 42,
//     value: "Success",
//   },
// };

// const {
//   data: { id: userID },
// } = response;

// console.log(userID);

//9. Collect remaining properties
//extract name
//store the rest of the properties in otherInfo

// const person = {
//   name: "Jordan",
//   age: 30,
//   job: "Designer",
// };

// const { name, ...otherInfo } = person;

// console.log(name, otherInfo);

//10. Excluding properties
//extract host
//put everything else into options

// const config = {
//   host: "localhost",
//   port: 8080,
//   secure: true,
// };

// const { host, ...options } = config;
// console.log(host, options);

//11. Destructuring function parameters

// const user = {
//   name: "Chris",
//   email: "chris@chris.com",
// };

// function displayUser(user) {
//   const { name, email } = user;
//   return { name, email };
// }

// console.log(displayUser(user));

//12. defaults in function parameters

// const theme = {
//   text: "Serif",
// };

// function createButton({ text, color = "blue" }) {
//   return [text, color];
// }

// console.log(createButton(theme));

//13. API-style response
//extract status and users

// const apiResponse = {
//   status: 200,
//   data: {
//     users: 150,
//     active: true,
//   },
// };

// const {
//   status,
//   data: { users },
// } = apiResponse;
// console.log(status, users);

//14. One-liner rename + default
//create variables:
//w = 300
//h = 150 (default)

// const options = {
//   width: 300,
// };

// const { width: w, h = 150 } = options;
// console.log(w, h);

//15. Nested + rest
//extracting user
//store everythig else in remainingState

// const state = {
//   auth: {
//     user: "admin",
//     token: "abc123",
//   },
//   theme: "dark",
//   version: 1,
// };

// const {
//   auth: { user },
//   ...remaingState
// } = state;

// console.log(user, remaingState);

//spread = expands an array into seperate elements
// let numbers = [1, 2, 3, 4, 5];
// // console.log(numbers);

// function addNumbers(a, b, c, d) {
//   return a + b + c + d;
// }

// console.log(addNumbers(...numbers));

//rest = bundles seperate elements into an array /
// allow a function to work with a variable number of arguments by bundling them into an array

//rest - packs values into arrays
//spread - unpacks arrays into values

// const sumNumbers = function (...numbers) {
//   let value = 0;
//   numbers.forEach((element) => {
//     value += element;
//   });
//   return value;
// };

// console.log(sumNumbers(1, 2, 10, 50));

// const avgNumbers = function (...numbers) {
//   let total = 0;
//   numbers.forEach((e) => {
//     total += e;
//   });

//   return total / numbers.length;
// };

// console.log(avgNumbers(2, 4, 4, 10));

// const combineStrings = function (...strings) {
//   let currentString = "";
//   strings.forEach((e) => {
//     currentString += e;
//   });

//   return currentString;
// };

// console.log(combineStrings("i like ", "apples"));

//1 The basics : array merging

// const produce = ["Apples", "Bananas"];
// const dairy = ["Cheese", "Yogurt"];

// const oldGroceries = ["Milk", ...produce, ...dairy];

// console.log(...oldGroceries);

//2. Shallow Copying and Updates

// const user = {
//   id: 101,
//   username: "js_wizard",
//   email: "old@example.com",
// };

// function updateEmail(user, newEmail) {
//   const newUser = { ...user, email: newEmail };
//   //if an object has two keys defined that are the same, it uses the last defined key
//   return newUser;
// }

// console.log(updateEmail(user, "super@chris.com"));

//Handling Nested Data

// const gameState = {
//   player: "Alex",
//   level: 5,
//   stats: {
//     score: 85,
//     health: 100,
//   },
// };

// function updateState(state) {
//   return { ...gameState, ...state };
// }

// console.log(updateState({ stats: { score: 100, health: 100 } }));

//we want to update luck in a function
// const userState = {
//   maxHealth: 100,
//   level: 67,
//   stats: {
//     agi: 5,
//     dex: 60,
//     luk: 20,
//   },
// };
// function updateUserStats(state) {
//   const newUserStats = { ...userState, ...state };
//   const newStats = { ...userState.stats, ...state.stats };

//   newUserStats.stats = newStats;

//   return newUserStats;
// }

// console.log(updateUserStats({ stats: { luk: 30 } }));

// const tempObj = {
//   a: 90,
//   b: 80,
//   c: 80,
// };

// //we want to update c

// function updateTempObj(newTemp) {
//   const newObj = { ...tempObj, ...newTemp };
//   return newObj;
// }

// console.log(updateTempObj({ c: 70, d: 60 }));

//4 String Manipulation and De-duplication

//5. The "rest" vs. "spread" challenge

// const person = {
//   name: "Sarah",
//   age: 30,
//   city: "New York",
//   occupation: "Engineer",
// };

// function summarizeUser(obj) {
//   const { name: userName, ...userMetadata } = obj;
//   return [userName, userMetadata];
// }

// const [userName, metadata] = summarizeUser(person);
// console.log(userName);
// console.log(metadata);

//* Logical Assignments -----------------------------

//? OR '||=' Will assign the value on the right hand side if the variable doesn't have a value (something like that)
//* If the value is 'falsey' it will asign the new value on the right checks for falsey*?
//* Simplified - assigns value to variable if falsey

//! Really good if the variable has no value (I think)

// const person = {
//   name: "Chris",
//   age: 34,
//   birthYear: 0,
// };

//!person.birthYear is 0 , which is falsey, the result is 2039
// person.birthYear ||= 2039;

//? Nullish (??=) Checks to see if that variable is null or undefined and, if so, assigns the value on the right
//* If the value is (null or undefined)
//* Simplified - assigns value to variable if null or undefined

//! person.birthYear is not null or undefined so it results to 0
// person.birthYear ??= 1000;
// person.pet ??= true;
// console.log(person.birthYear);
// console.log(person.pet);

//? AND (&&=) - Checks to see if the variable is truthy and assigns it the value on the right
//* Simplified - assigns value to variable if truthy

// const person2 = {
//   name: "Justin Timberlake",
//   password: 1234,
// };

//! Assigns "<NONE-OF-YOUR-BUSINESS>" because password is truthy
// person2.password &&= "<NONE-OF-YOUR-BUSINESS>";
// console.log(person2.password);

//? (||=) - if falsy ; (??=) - if undefined or null ; (&&=) if truthy
// ! Exercises
// 1.
//If user name is falsy, assign "Guest"

//("") is falsy
// let username = "";

// username ||= "Guest";
// console.log(username);

//2.
//If snowing is true, set theme to "winter"

// let snowing = true;

// snowing &&= "winter";
// console.log(snowing);

//3.
//Only assign volume to 50 if it is null or undefined
// let volume = null;

// volume ??= 50;
// console.log(volume);

//4.
//assign north pole only if location is falsy

// let location1 = 0;
// location1 ||= "North Pole";
// console.log(location1);

//5.
//Only keep "admin" if isElf is true
// let isElf = false;
// let accessLevel = "admin";

// isElf &&= accessLevel;
// console.log(isElf);

//6.
//Assign maxGifts to 10 only if it is null or undefined
// let maxGifts;
// maxGifts ??= 10;
// console.log(maxGifts);

//7.
//Ensure settings.volume exists
//default volume should be 5

// const settings = {
//   theme: "dark",
// };

// settings.volume ??= 5;
// console.log(settings.volume);
// console.log(settings);

//8.
//if holidayMode is true, enable specialMusic

// let holidayMode = true;
// let specialMusic = false;

// specialMusic &&= holidayMode;
// console.log(specialMusic);
// // console.log(holidayMode);

// !Strings
// //split method
// // * takes a string and places it into an array based on a pattern
// const str = "- Item A\n- Item B";

// const words = str.split("\n");
// console.log(words);

// const str2 = "- Item A";
// const str3 = str2.substring(2);
// console.log(str3);

// words.forEach((e) => {
//   console.log(e.substring(2));
// });

// const fruit = "apple".slice(2);
// console.log(fruit);

// let arr = [1, 2, 3, 4, 5];

// console.log(arr.slice(2));

//* ON stream

//LOGICAL ASSIGNMENT OPERATORS

//* (||=) assign the right value if the left is falsy
// let x = 0;
// x ||= "APPLES!";
// console.log(x);
//? (??=) assign the right value if the left is null or undefined
// let x = null;
// x ??= "ORANGES!";
// console.log(x);
//! (&&=) assign the right value if the left value is truthy
// let password = "verysecretpassword";
// password &&= "<NON OF YO DAMN BUSINESS!>";
// console.log(password);

//1.
//if user is falsy, assign "Guest";
// let username = "";
// username ||= "Guest";
// console.log(username);

//2.
//if snowing is true, set theme to winter
// let snowing = true;
// let theme = snowing ? "winter" : "default";
// console.log(theme);

//3.
//only assign volume to 50 if it is null or undefined
// let volume = null;
// volume ??= 50;
// console.log(volume);

//4.
//Assign 'North Pole' only if location is falsy
// let location1 = 0;
// location1 ||= "North Pole";
// console.log(location1);

//2. (corrected)
//only allow snow mode if it is actually snowing
// let snowing2 = true;
// let snowModeEnabled = true;

// snowModeEnabled &&= snowing2;

//5.
//Only keep 'admin' if isElf is true
// let isElf = false;
// let accessLevel = "admin";

// accessLevel &&= isElf;

//1.
// let userRole = "";
// userRole ||= "guest";
// console.log(userRole);

//2.
// let settings = {
//   theme: null,
// };
// settings.theme ??= "light";
// settings.color ??= "blue";
// console.log(settings.color);

//3.
//! Come back to this
// let msg = "Hello";
// let isAuthenticated = true;

// msg = isAuthenticated &&= "Welcome Back";
// console.log(is);
// console.log(msg);

//4.
//we would use the nullish assignment
// const gameTracker = {
//   player: "Tim",
//   currentScore: 0,
// };
// gameTracker.currentScore ??= 10;
// console.log(gameTracker.currentScore);

//5.
// let options = {
//   debug: "verbose",
//   retries: null,
// };

// options.debug &&= true;
// options.retries ??= 5;
// console.log(options.debug, options.retries);

//6.
// const demoConfig = {};
// function setupConfig(config) {
//   config.timeout ??= 3000;
//   config.active &&= "active";
//   config.title ||= "untitled";

//   return config;
// }

// let newConfig = setupConfig(demoConfig);
// console.log(newConfig);

//7.
//! come back
// let user = {
//   userName: "coder123",
//   online: true,
//   lastSeen: "2023-01-01",
// };

// user.lastSeen = user.online &&= Date.now();

// Temperature Trend Tracker
// -- array of temps
// return a string describing the trend

// function tempTrendTracker(arr) {
//   if (arr.length <= 1) return "Getting Hotter";

//   let hotter = true;
//   let colder = true;
//   let steady = true;

//   for (let i = 0; i < arr.length - 1; i++) {
//     hotter &&= arr[i] < arr[i + 1];
//     colder &&= arr[i] > arr[i + 1];
//     steady &&= arr[i] === arr[i + 1];
//   }

//   // console.log(hotter, colder);

//   if (hotter) return "Getting Hotter";
//   if (colder) return "Getting Colder";
//   if (steady) return "Steady";
//   return " Variable";
// }

// const temps1 = [10, 9, 8, 7, 6, 5];
// const temps2 = [5, 6, 7, 8, 9, 10];
// const temps3 = [10, 7, 11, 13, 14];
// const temps4 = [1, 1, 1, 1, 1, 1];

//[0,1,2,3,4,5].length // 6
//arr[6] - out of bounds
//arr[5] - in bounds and the last element
//i < arr.length

// console.log(tempTrendTracker(temps4));

// const userNames = ["chris", "taylor", "jonas", "Antz", "Daniel"];

// for (let i = 0; i < userNames.length; i++) {
//   console.log(`${i} : ${userNames[i]}`);
// }

// console.log(userNames.length);

//[1,2,4,3,5]

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

//* filter()
/* Returns an Array */

//array.prototype.filter()
//1. filter the list of inventors for those who were born in the 1500's
//filter will return an array of elements that return true if conditions were met
// const fifteen = inventors.filter((inventor) => {
//   let x;
//   inventor.year >= 1500 && inventor.year < 1600 ? (x = true) : (x = false);
//   return x;
// });

//array.prototype.map()
//2. Map
//contains an array of elements resulting from a function called on every element in that array

// const inventorsNames = inventors.map((e) => {
//   return `${e.first} ${e.last}`;
// });

// console.table(inventorsNames);

//array.protoype.sort()
//3. Sort
//compares elements and sorts them in ascending or descending order based on conditions? _check this
//sort the inventors by birthdate

// const whoseOlder = inventors.sort((a, b) => {
//   if (a.year > b.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const whoseOlder = inventors.sort((a, b) => (a.year > b.year ? -1 : 1));

// console.table(whoseOlder);

// const prices = [10.5, 20, 35.99, 40];

// const newPrices = prices.map((e) => `$${e.toFixed(2)}`);
// console.table(newPrices);

// const names = ["Zelda", "Mario", "Peach", "Link"];

// const newNames = names.toSorted();
// console.log(newNames);
// console.log(names);

// const dailySteps = [5000, 8000, 12000, 4000];

// const totalSteps = dailySteps.reduce((total, nextStep) => total + nextStep);

// console.log(totalSteps);

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 20 },
// ];

// const sortedNames = users.map((e) => e.name).sort();
// console.log(sortedNames);

// const numberList = [1, 10, 100, 25, 5];

// const orderedNumberList = numberList.sort((first, second) => {
//   if (first > second) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// console.log(orderedNumberList);

// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// const countFruit = {
//   apple: 0,
//   banana: 0,
//   orange: 0,
//   gatherFruit(a, b) {
//     if (a === null || a === undefined) {
//       countFruit[b]++;
//     } else {
//       console.log(typeof a);
//       countFruit[a]++;
//       countFruit[b]++;
//     }
//   },
// };

// const totalFruitCount = fruits.reduce(countFruit.gatherFruit);

// console.log({ ...countFruit });
// console.log(countFruit);

// const cart = [
//   { item: "Pen", price: 2 },
//   { item: "Notebook", price: 15 },
//   { item: "Backpack", price: 50 },
//   { item: "Eraser", price: 1 },
// ];

// Your goal: Find the total price of all items > $10, including 10% tax.

// const newPrices = cart
//   .filter((e) => e.price < 10)
//   .map((e) => e.price * 0.01 + e.price)
//   .reduce((a, b) => a + b);

// console.log(newPrices.toFixed(2));

//! Arrays Methods Day 2

//* Filter
//? array.prototype.filter() : return array of elements that retur true if a condition is met

//Level 1 ------

//Even Numbers Only
//? Even Numbers Only
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// //Use filter to create a new array containing only the even numbers

// const newArr = numbers.filter((e) => {
//   if (e % 2 === 0) {
//     return true;
//   }
//   return false;
// });

// console.log(newArr);

//?Short Word Cleanup
// const tags = ["js", "javascript", "code", "programming", "web", "development"];

// const newTags = tags.filter((e) => e.length >= 4);

// console.log(newTags);

//?No-Nothing (falsy filter)

// const apiData = [0, "apple", "", undefined, "banana", null, 42, false];

// const apiTruthy = apiData.filter((e) => Boolean(e));
// console.log(apiTruthy);

//Level 2 ----

//? Active User List

// const users = [
//   { id: 1, name: "Alice", isAdmin: true },
//   { id: 2, name: "Bob", isAdmin: false },
//   { id: 3, name: "Charlie", isAdmin: false },
//   { id: 4, name: "Diana", isAdmin: true },
// ];

// const admins = users.filter((e) => {
//   return e.isAdmin ? true : false;
// });

// console.log(admins);

//?The Price is Right
// const products = [
//   { name: "Laptop", price: 1200, category: "electronics" },
//   { name: "Coffee Mug", price: 15, category: "kitchen" },
//   { name: "Headphones", price: 150, category: "electronics" },
//   { name: "Notebook", price: 5, category: "office" },
// ];

// const electronics = products.filter((e) => {
//   return e.category === "electronics" && e.price < 500 ;
// });

// console.log(electronics);

//Level 3 ---

//? The Search Bar simulation
//query is substring
//items is array
// const fruits = ["Apple", "Banana", "Grape", "Orange"];
// function searchItems(query, items) {
//   let newSearch = fruits.filter((e) => e.toLowerCase().includes(query));

//   return newSearch;
// }

// console.log(searchItems("ap", fruits));

//?Unique Values (The IndexOf trick)

// const duplicatesArr = ["apple", "apple", "banana", "orange"];

// const removeDupes = duplicatesArr.filter((e, index, arr) => {
//   return arr.indexOf(e) === index;
// });

// console.log(removeDupes);

//* map function
//? Array.prototype.map()
//* calls a function on every element in that array and returns a new array of the same length

//1
//?The multiplier

// const numbers = [2, 4, 6, 8, 10];

// const tripleNumbers = numbers.map((e) => e * 3);
// console.log(tripleNumbers);

//?Shout it out
// const userNames = ["alice", "bob", "charlie"];
// const caps = userNames.map((e) => e.toUpperCase());
// console.log(caps);

//?Square Roots Given

// const numbers = [1, 4, 9, 16, 25];
// const squares = numbers.map((e) => Math.sqrt(e));
// console.log(squares);

//Intermediate

//4
//?The Name Extractor
// const users = [
//   { firstName: "Jane", lastName: "Doe" },
//   { firstName: "John", lastName: "Smith" },
//   { firstName: "Alice", lastName: "Wonderland" },
// ];

// const fullNames = users.map((e) => `${e.firstName} ${e.lastName}`);

// console.log(fullNames);

//5
//?Price formatter
// const prices = [19.99, 5, 42.5, 100];

// const newPrices = prices.map((e) => `$${e.toFixed(2)}`);

// console.log(newPrices);

//6
//? Adding a Property
// const products = [
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 300 },
// ];

// const updatedProducts = products.map((e) => {
//   e.onSale ??= true;
//   return e;
// });

// console.log(updatedProducts);

//7
//? The index numbering

// const fruits = ["Apple", "Banana", "Cherry"];

// const fruitsIndex = fruits.map((e, i) => `${i}: ${e}`);

// console.log(fruitsIndex);

//window.innerWidth

//window.screen.width
//screen.width

//?Specific Update

const tasks = [
  { id: 1, text: "Buy Milk", completed: false },
  { id: 2, text: "Clean Room", completed: false },
  { id: 3, text: "Code JS", completed: false },
];

const updatedTasks = tasks.map((e) => {
  if (e.id === 2) {
    e.completed = true;
    return e;
  }

  return e;
});

console.log(updatedTasks);
