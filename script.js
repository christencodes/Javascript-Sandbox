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
