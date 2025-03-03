// ========== Task-1 =========
/* Task 1
Create an object `weather` that contains properties `temperature`, `humidity`, and `condition` (e.g., "Sunny", "Rainy").
Write a function that logs `"Take an umbrella!"` if it's rainy.
*/

// Your code here
// const weather = {
//   temperature: 25,
//   humidity: 60,
//   condition: "Rainy",
// };
// function isRainy(weather) {
//   if (weather.condition == "Rainy") {
//     console.log("Take an umbrella!");
//   }
// }
// isRainy(weather);

// ========== Task-2 =========
/* Task 2
Define an object named `shoppingCart` that contains an array of items.
Each item has `name`, `price`, and `quantity`.
Write a function that calculates the total price of all items in the cart.
*/
// Your code here
// const shoppingCart = {
//   items: [
//     { name: "Laptop", price: 1200, quantity: 1 },
//     { name: "Mouse", price: 25, quantity: 2 },
//     { name: "Keyboard", price: 45, quantity: 1 },
//   ],
// };

// function totalPrice(shoppingCart) {
//   let totalPrice = 0;
//   for (let item of shoppingCart.items) {
//     totalPrice += item.price * item.quantity;
//   }
//   console.log("Total Price for All Items: ", totalPrice);
// }
// totalPrice(shoppingCart);

// ========== Task-3 =========
/* Task 3
Create an array of objects named `restaurants`, each with properties `name`, `cuisineType`, and `rating`.
Write a function that returns only the restaurants with a rating of 4 or higher.
*/

// Your code here
// const restaurants = [
//   { name: "Olive Garden", cuisineType: "Italian", rating: 4.5 },
//   { name: "Sushi Palace", cuisineType: "Japanese", rating: 2.8 },
//   { name: "Tandoori Delight", cuisineType: "Indian", rating: 4.6 },
//   { name: "Burger Haven", cuisineType: "American", rating: 3.3 },
//   { name: "Le Petit Bistro", cuisineType: "French", rating: 4.7 },
// ];

// function popularRestaurant(restaurants) {
//   //   using loop
//   //   for (const restaurant of restaurants) {
//   //     if (restaurant.rating > 4) {
//   //       console.log(restaurant);
//   //     }
//   //   }
//   //   Using filter
//   return restaurants.filter((restaurant) => restaurant.rating > 4);
// }
// // popularRestaurant(restaurants);
// console.log(popularRestaurant(restaurants));

/* Task 4
Define an object named `bankAccount` with properties `accountHolder`, `balance`, and `transactions` (an array of numbers).
Write a function that calculates the total balance after all transactions.
*/
// Your code here
// const bankAccount = {
//   accountHolder: "John Doe",
//   balance: 1500, // Initial balance in dollars
//   transactions: [200, -50, 300, -200, -20], // Positive for deposits, negative for withdrawals
// };

// // complex one
// function totalBalance(bankAccount) {
//   let deposit = 0;
//   let withdraw = 0;
//   let totalBalance = 0;
//   for (let transaction of bankAccount.transactions) {
//     if (transaction > 0) {
//       deposit += transaction;
//     } else {
//       withdraw -= transaction;
//     }
//   }
//   if (deposit > withdraw) {
//     totalBalance = deposit - withdraw;
//     let depositBalance = bankAccount.balance + deposit;
//     let finalAmount = depositBalance - withdraw;
//     console.log("Deposit Amount", deposit, "| Withdraw Amount", withdraw);
//     console.log("Current Balance", finalAmount);
//   } else {
//     console.log("Insufficient balance");
//   }
// }
// totalBalance(bankAccount);

// // Using reduce method
// function totalBalance() {
//   const transactionSum = bankAccount.transactions.reduce(
//     (previousValue, currentValue) => previousValue + currentValue,
//     0
//   );
//   const finalBalance = bankAccount.balance + transactionSum;
//   console.log("Final Balance:", finalBalance);
// }
// totalBalance();

// Using reduce method with deposit and withdraw console
// function totalBalance() {
//   let deposit = 0;
//   let withdraw = 0;
//   const transactionSum = bankAccount.transactions.reduce(
//     (previousValue, currentValue) => {
//       if (currentValue > 0) {
//         deposit += currentValue;
//       } else {
//         withdraw -= currentValue;
//       }
//       return previousValue + currentValue;
//     },
//     0
//   );
//   const finalBalance = bankAccount.balance + transactionSum;
//   console.log("Deposit:", deposit, "Withdraw:", withdraw);
//   console.log("Transaction Sum:", transactionSum);
//   console.log("Final Balance:", finalBalance);
// }
// totalBalance();

// Not Important just for practice Reduce method with object
// const object = { a: 10, b: 20, c: 30 };

// const sum = Object.values(object).reduce((acc, value) => acc + value, 0);
// const a = Object.values(object);
// console.log(a);
// console.log(sum);

/* Task 5
Create an array `students` where each student has `name`, `scores` (array of numbers), and `averageScore` (initially null).
Write a function that calculates and updates each student's `averageScore`.
*/

// Your code here
// const students = [
//   { name: "Alice", scores: [85, 90, 88], averageScore: null },
//   { name: "Bob", scores: [70, 75, 80], averageScore: null },
//   { name: "Charlie", scores: [92, 85, 88], averageScore: null },
// ];
// function calculateAverageScore(students) {
//   for (let student of students) {
//     let averageScoreLength = student.scores.length;
//     let totalScore = student.scores.reduce((previousValue, currentValue) => {
//       return previousValue + currentValue;
//     }, 0);

//     let averageScore = totalScore / averageScoreLength;
//     student.averageScore = averageScore.toFixed(2); // Update the student's averageScore
//     console.log(
//       `Name: ${student.name} and Average Score is:- ${averageScore.toFixed(2)}`
//     );
//   }
//   console.log(students);
// }
// calculateAverageScore(students);

/* Task 6
Define an array named `courses`, each containing `courseName`, `instructor`, and `studentsEnrolled`.
Write a function that logs the course name of any course with more than 30 students.
*/
// Your code here
// const courses = [
//   {
//     courseName: "Web Development",
//     instructor: "John Smith",
//     studentsEnrolled: 45,
//   },
//   { courseName: "Data Science", instructor: "Jane Doe", studentsEnrolled: 28 },
//   {
//     courseName: "Machine Learning",
//     instructor: "Alice Johnson",
//     studentsEnrolled: 35,
//   },
//   { courseName: "Cybersecurity", instructor: "Mark Lee", studentsEnrolled: 20 },
//   {
//     courseName: "Cloud Computing",
//     instructor: "Emma Brown",
//     studentsEnrolled: 50,
//   },
// ];
// function popularCourses() {
//   let popularCourse = courses.filter((course) => course.studentsEnrolled > 30);
//   //   for (item of popularCourse) {
//   //     console.log(item.courseName);
//   //   }
//   popularCourse.forEach((course) => console.log(course.courseName));
// }
// popularCourses();

/* Task 7
Create an object `pet` with properties `species`, `name`, and `isVaccinated`.
Write a function that returns `"Vaccination required"` if the pet is not vaccinated.
*/

// Your code here
// const pets = [
//   { species: "Dog", name: "Buddy", isVaccinated: true },
//   { species: "Cat", name: "Whiskers", isVaccinated: false },
//   { species: "Parrot", name: "Polly", isVaccinated: false },
// ];

// function checkForVaccination() {
//   const unvaccinatedPets = pets.filter((pet) => !pet.isVaccinated);
//   unvaccinatedPets.forEach((pet) =>
//     console.log(`Vaccination required for ${pet.name} (${pet.species})`)
//   );
// }

// checkForVaccination();

/* Task 8
Define an object named `city` with properties `name`, `population`, and `landmark`.
Write a function that logs `"This is a big city!"` if the population exceeds 1,000,000.
*/

// Your code here
// const cities = [
//   { name: "New York", population: 8419600, landmark: "Statue of Liberty" },
//   { name: "Helsinki", population: 655281, landmark: "Suomenlinna" },
//   { name: "Tokyo", population: 13929286, landmark: "Tokyo Tower" },
// ];
// function mostPopulatedCity() {
//   let populatedCity = cities.filter((city) => city.population > 1000000);
//   populatedCity.forEach((popular) =>
//     console.log(`${popular.name} is a big city!`)
//   );
// }
// mostPopulatedCity();

/* Task 9
Create an array `transactions`, where each transaction is an object with `type` ("credit" or "debit") and `amount`.
Write a function that calculates the total balance after processing all transactions.
*/

// Your code here
// const transactions = [
//   { type: "credit", amount: 500 },
//   { type: "debit", amount: 200 },
//   { type: "credit", amount: 300 },
//   { type: "debit", amount: 100 },
//   { type: "credit", amount: 400 },
// ];
// function totalBalance(transactions) {
//   const totalBalance = transactions.reduce((previousValue, currentValue) => {
//     return currentValue.type === "credit"
//       ? previousValue + currentValue.amount
//       : previousValue - currentValue.amount;
//   }, 0);
//   console.log(totalBalance);
// }
// totalBalance(transactions);

/* Task 10
Define an object named `foxPack` containing an array of fox objects.
Each fox has `name`, `age`, and `furColor`.
Write a function that filters out only the foxes that are younger than 2.
*/

// Your code here
// const foxPack = {
//   foxes: [
//     { name: "Red", age: 3, furColor: "Red" },
//     { name: "Swift", age: 1, furColor: "Gray" },
//     { name: "Shadow", age: 4, furColor: "Black" },
//     { name: "Blaze", age: 2, furColor: "Orange" },
//     { name: "Frost", age: 1, furColor: "White" },
//   ],
// };
// function filterYoungFoxes(foxPack) {
//   return foxPack.foxes.filter((fox) => fox.age < 2);
// }

// console.log("Foxes younger than 2: ", filterYoungFoxes(foxPack));

/* Task 11
Create an object `gameCharacter` with properties `name`, `level`, `health`, and `inventory` (an array).
Write a function that logs all items in the character’s inventory.
*/

// Your code here
// const gameCharacter = {
//   name: "Warrior",
//   level: 10,
//   health: 100,
//   inventory: ["Sword", "Shield", "Health Potion", "Magic Scroll"],
// };

// function logInventory(gameCharacter) {
//   console.log("Character's Inventory:");
//   gameCharacter.inventory.forEach((item) => console.log(item));
// }

// logInventory(gameCharacter);

/* Task 12
Define an array named `employees`, where each employee has a `name`, `role`, and `workingHours`.
Write a function that finds and logs employees who work more than 40 hours.
*/

// Your code here
const employees = [
  { name: "Alice", role: "Manager", workingHours: 45 },
  { name: "Bob", role: "Developer", workingHours: 38 },
  { name: "Charlie", role: "Designer", workingHours: 42 },
  { name: "David", role: "Developer", workingHours: 40 },
  { name: "Eva", role: "Manager", workingHours: 50 },
];

function findEmployeesWorkingMoreThan40(employees) {
  const employeesOver40 = employees.filter(
    (employee) => employee.workingHours > 40
  );
  employeesOver40.forEach((employee) =>
    console.log(
      `${employee.name} works ${employee.workingHours} hours per week.`
    )
  );
}

findEmployeesWorkingMoreThan40(employees);

/* Task 13
Create an array `musicAlbums` where each album has `title`, `artist`, and `releaseYear`.
Write a function that logs albums released after 2000.
*/

// Your code here
const musicAlbums = [
  { title: "Hybrid Theory", artist: "Linkin Park", releaseYear: 2000 },
  { title: "Future Nostalgia", artist: "Dua Lipa", releaseYear: 2020 },
  { title: "Back in Black", artist: "AC/DC", releaseYear: 1980 },
  { title: "Lover", artist: "Taylor Swift", releaseYear: 2019 },
  {
    title: "The Dark Side of the Moon",
    artist: "Pink Floyd",
    releaseYear: 1973,
  },
];

function albumsAfter2000(musicAlbums) {
  const albumsReleasedAfter2000 = musicAlbums.filter(
    (album) => album.releaseYear > 2000
  );
  albumsReleasedAfter2000.forEach((album) =>
    console.log(
      `${album.title} by ${album.artist}, released in ${album.releaseYear}`
    )
  );
}

albumsAfter2000(musicAlbums);

/* Task 14
Define an array named `cars`, each containing `brand`, `model`, and `horsepower`.
Write a function that finds and returns the car with the highest horsepower.
*/

// Your code here
const cars = [
  { brand: "Tesla", model: "Model S", horsepower: 1020 },
  { brand: "Ford", model: "Mustang", horsepower: 450 },
  { brand: "Chevrolet", model: "Camaro", horsepower: 650 },
  { brand: "Bugatti", model: "Chiron", horsepower: 1500 },
  { brand: "BMW", model: "M5", horsepower: 617 },
];

function carWithHighestHorsepower(cars) {
  const highestHorsepowerCar = cars.reduce((maxCar, currentCar) =>
    currentCar.horsepower > maxCar.horsepower ? currentCar : maxCar
  );
  return highestHorsepowerCar;
}

const car = carWithHighestHorsepower(cars);
console.log(
  `The car with the highest horsepower is the ${car.brand} ${car.model} with ${car.horsepower} horsepower.`
);

/* Task 15
Create an array of `airports`, where each airport has `name`, `country`, and `flightsPerDay`.
Write a function that finds the airport with the most daily flights.
*/

// Your code here
const airports = [
  { name: "Heathrow", country: "United Kingdom", flightsPerDay: 1200 },
  {
    name: "Dubai International",
    country: "United Arab Emirates",
    flightsPerDay: 1400,
  },
  {
    name: "Los Angeles International",
    country: "United States",
    flightsPerDay: 1100,
  },
  { name: "Tokyo Haneda", country: "Japan", flightsPerDay: 950 },
  { name: "Singapore Changi", country: "Singapore", flightsPerDay: 1300 },
];

function airportWithMostFlights(airports) {
  const mostFlightsAirport = airports.reduce(
    (maxFlightsAirport, currentAirport) =>
      currentAirport.flightsPerDay > maxFlightsAirport.flightsPerDay
        ? currentAirport
        : maxFlightsAirport
  );
  return mostFlightsAirport;
}

const airport = airportWithMostFlights(airports);
console.log(
  `The airport with the most daily flights is ${airport.name} in ${airport.country}, with ${airport.flightsPerDay} flights per day.`
);
