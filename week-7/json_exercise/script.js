/* Task 1
Create a JavaScript object named `student` with properties:
- `name`
- `age`
- `grade`
Convert the object into a JSON string and log it to the console.
*/
const student = {
  name: "John Doe",
  age: 20,
  grade: "A",
};
const convertToJson = JSON.stringify(student);
console.log(convertToJson);

/* Task 2
Take the JSON string from Task 1 and convert it back into a JavaScript object.
Log the `name` property of the converted object.
*/
// Your code here
const convertToJs = JSON.parse(convertToJson);
console.log(convertToJs);

/* Task 3
Create an array named `classroom`, where each element is an object representing a student.
Each student object should have properties for `name`, `age`, and `grade`.
Convert the array into a JSON string and log it to the console.
*/

// Your code here
const classroom = [
  { name: "Alice", age: 19, grade: "A" },
  { name: "Bob", age: 20, grade: "B" },
  { name: "Charlie", age: 21, grade: "C" },
];
const convertClassroomToJson = JSON.stringify(classroom);
console.log("Classroom JSON:", convertClassroomToJson);

/* Task 4
Take the JSON string from Task 3, convert it back into a JavaScript array,
and log the names of all students in the classroom.
*/

// Your code here
const convertClassroomJsonToJs = JSON.parse(convertClassroomToJson);
console.log("Student Names:");
convertClassroomJsonToJs.forEach((student) => console.log(student.name));

/* Task 5
Create an object named `weatherReport` with the following properties:
- `temperature`
- `humidity`
- `conditions` (e.g., "Sunny", "Rainy")

Convert the object into a JSON string and store it in a variable named `weatherJSON`.
Then, parse the JSON string back into an object and log the `conditions` property.
*/

// Your code here
const weatherReport = {
  temperature: 25, // Temperature in degrees Celsius
  humidity: 60, // Humidity percentage
  conditions: "Sunny",
};
const weatherJSON = JSON.stringify(weatherReport);
const weatherJS = JSON.parse(weatherJSON);

console.log("Weather Report in Json:", weatherJSON);
console.log("Weather Report in JS:", weatherJS.conditions);

/* Task 6
Define an array named `movies`, where each movie has:
- `title`
- `director`
- `rating`

Convert this array into a JSON string, then parse it back into a JavaScript object.
Log all movie titles with a rating higher than 8.
*/

// Your code here
// Task 6: Create an array of movie objects
const movies = [
  { title: "Inception", director: "Christopher Nolan", rating: 8.8 },
  { title: "The Matrix", director: "Lana & Lilly Wachowski", rating: 8.7 },
  { title: "Interstellar", director: "Christopher Nolan", rating: 7.6 },
];

const moviesJson = JSON.stringify(movies);
const moviesJs = JSON.parse(moviesJson);

// const highRatedMovies = moviesJs.filter((movie) => movie.rating > 8);

// if (highRatedMovies.length > 0) {
//   console.log("Movies with a rating higher than 8:");
//   highRatedMovies.forEach((movie) => console.log(movie.title));
// } else {
//   console.log("No movies have a rating higher than 8.");
// }

/* Task 7
Write a function `filterHighRatedMovies(jsonString)` that:
- Takes a JSON string representing an array of movie objects.
- Converts it into a JavaScript array.
- Returns a new array containing only movies with a rating higher than 8.
*/

// Your code here
function filterHighRatedMovies(moviesJson) {
  const moviesArray = JSON.parse(moviesJson);

  const filteredList = moviesArray.filter((item) => item.rating > 8);
  return filteredList;
}
const highRatedMovies = filterHighRatedMovies(moviesJson);

console.log(highRatedMovies);

/* Task 8
Define an object named `shoppingCart` with:
- `items` (an array of product objects, each with `name` and `price`)
Convert `shoppingCart` into a JSON string and log it to the console.
*/

// Your code here
const shoppingCart = {
  items: [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Headphones", price: 150 },
  ],
};

const shoppingCartJSON = JSON.stringify(shoppingCart);
// console.log(shoppingCartJSON);

/* Task 9
Write a function `totalCartValue(jsonString)` that:
- Takes a JSON string representing a shopping cart.
- Converts it into a JavaScript object.
- Returns the total price of all items in the cart.
*/

// Your code here
function totalCartValue(shoppingCartJSON) {
  const shoppingCartJS = JSON.parse(shoppingCartJSON);
  console.log("cloud umber 9");
  let TotalPrice = 0;
  for (item of shoppingCartJS.items) {
    TotalPrice += item.price;
  }
  console.log("Total price of all Shopping Item:", TotalPrice);
}
totalCartValue(shoppingCartJSON);

/* Task 10
Create an object named `gameProgress` with:
- `level`
- `score`
- `livesRemaining`

Convert the object into a JSON string and log it.
Parse the JSON back into an object and update the `score` property by adding 100 points.
Log the updated object.
*/

// Your code here
const gameProgress = {
  level: 5,
  score: 2500,
  livesRemaining: 3,
};

// JSON string and log it
const convertedGameProgressToJSON = JSON.stringify(gameProgress);
console.log(convertedGameProgressToJSON);

// Parse the JSON back into an object
const convertedGameProgressToJS = JSON.parse(convertedGameProgressToJSON);
console.log(convertedGameProgressToJS);

// Update the score by adding 100 points
convertedGameProgressToJS.score += 100;

console.log("Updated game progress:", convertedGameProgressToJS);
