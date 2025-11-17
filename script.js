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

const populate = async () => {
  // https://github.com/mdn/learning-area/blob/main/javascript/oojs/tasks/json/sample.json

  const catsURL = "cats.json";

  //create a request object with url
  const request = new Request(catsURL);
  // place the request in a response
  const response = await fetch(request);
  //response into text
  responseText = await response.text();
  const catsInfo = JSON.parse(responseText);

  // console.log(catsInfo, typeof catsInfo);
  // // console.log(catsInfo[0]);

  displayCatInfo(catsInfo);
};

function displayCatInfo(obj) {
  //append everything into this article
  //create article that will be appended to the section

  //grab the section
  const section = document.querySelector("section");

  const motherCats = obj;

  for (mothers of motherCats) {
    const catArticle = document.createElement("article");
    const motherCatH2 = document.createElement("h2");
    const catBreed = document.createElement("p");
    const catColor = document.createElement("p");
    const kittenHeading = document.createElement("h3");
    const catKittenList = document.createElement("ol");

    motherCatH2.textContent = mothers.name;
    catBreed.textContent = mothers.breed;
    catColor.textContent = mothers.color;
    kittenHeading.textContent = "Kittens:";

    const kittens = mothers.kittens;
    for (kitten of kittens) {
      const kittenListItem = document.createElement("li");
      kittenListItem.textContent = `Name: ${kitten.name} \\ Gender: ${kitten.gender}`;
      catKittenList.appendChild(kittenListItem);
    }

    //append everything to the article
    catArticle.appendChild(motherCatH2);
    catArticle.appendChild(catBreed);
    catArticle.appendChild(catColor);
    catArticle.appendChild(kittenHeading);
    catArticle.appendChild(catKittenList);
    catArticle.style.marginBottom = "20px";
    catArticle.appendChild(document.createElement("hr"));
    ///append article to section
    section.appendChild(catArticle);
  }

  //total number of kittens
  //how many kittens are male and female
}

populate();
