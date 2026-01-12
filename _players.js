const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1. Create one player array for each team (variables 'players1' and'players2')

const players1 = [...game.players[0]];
const players2 = [...game.players[1]];

//! Practice Spread and Rest again (unfortunately)
/*2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players */
//gk1- takes the first element
//...fieldPlayers takes the rest
//[...gamePlayers[0]] spreads that array
const [gk1, ...fieldPlayers1] = [...game.players[0]];
const [gk2, ...fieldPlayers2] = [...game.players[1]];

// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)

const allPlayers = [...game.players[0], ...game.players[1]];

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'

const players1Final1 = [...game.players[0], "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final1);

// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')

const { team1, x: draw, team2 } = { ...game.odds };
// console.log(team1);
// console.log(team2);
// console.log(draw);

// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)

//!remember the rest pattern PACKS into an ARRAY
//!remember the spread pattern UNPACKS into individual ELEMENTS
// function printGoals(...player) {
//   player.forEach((e) => {
//     console.log(e);
//   });

//   console.log(player.length);
// }

// printGoals(...players2);

// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.



console.log(winner ??= );

/* 
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:

// 1. Create one player array for each team (variables 'players1' and
// 'players2')

// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players

// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'

// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')

// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK �*/
