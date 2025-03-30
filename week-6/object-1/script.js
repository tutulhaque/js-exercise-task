/* Task 1
Create a JavaScript array named `library` that represents a collection of books.
Each book should have properties for `title`, `author`, and `yearPublished`.
Add at least two book objects to this collection.
*/
// Your code here
// const library = [
//   {
//     title: "Steal like a Pro",
//     author: "Not Me",
//     yearPublished: 2022,
//   },
//   {
//     title: "Zero To One",
//     author: "Definitely Not Me",
//     yearPublished: 2023,
//   },
// ];
// ========================================================
/* Task 2
Access the `title` of the first book in the `library` collection and log it to the console.
Modify the `yearPublished` for the second book in the collection to a new year, then log the updated book object to the console.
*/

// Your code here
// const firstBookTitle = library[0].title;
// console.log(firstBookTitle);
// library[1].yearPublished = 2024;
// console.log(library);

// ========================================================
/* Task 3
Use dot notation to add a new property `genres` (an array of strings) to the first book in the `library`.
Use bracket notation to add a boolean property `isAvailable` to the same book, indicating its availability.
*/

// Your code here
// library[0].genres = "Anupam";
// library[0]["isAvailable"] = true;
// console.log(library[0]);

// ========================================================
/* Task 4
Define a constructor function named `Book` that can create new book objects with properties for `title`, `author`, `yearPublished`, and `genres`.
Using the `Book` constructor, create a new book object with the provided input values and add it to the `library` collection.
*/

// Your code here
// function Book(title, author, yearPublished, genres) {
//   this.title = title;
//   this.author = author;
//   this.yearPublished = yearPublished;
//   this.genres = genres;
// }
// const book1 = new Book("A new Book", "Will be selected", "2021", "fiction");
// const book2 = new Book(
//   "A very new Book",
//   "also Will be selected",
//   "2025",
//   "comedy"
// );
// const library1 = [];
// library1.push(book1, book2);
// console.log(library1);

// ========================================================
/* Task 5
Write a function named `createBook` that takes parameters for `title`, `author`, `yearPublished`, and `genres` (an array).
The function should return a new book object with these properties.
Test `createBook` by creating a new book object with user-provided input and logging the new book object to the console.
*/

// Your code here
// const numberOfBooks = window.prompt("How many books do you want?");
// const book = [];
// function createBook(title, author, yearPublished, genres) {
//   return {
//     title: title,
//     author: author,
//     yearPublished: parseInt(yearPublished),
//     genres: genres,
//   };
// }
// for (let i = 0; i < numberOfBooks; i++) {
//   const title = window.prompt("Enter your title");
//   const author = window.prompt("Enter your Author Name");
//   const yearPublished = window.prompt("Enter your year of published");
//   const genres = window.prompt("Enter your Genre").split(",");
//   const newBook = new createBook(title, author, yearPublished, genres);
//   book.push(newBook);
// }

// console.log(book);

// ========================================================
/* Task 6
Convert the `library` collection to a JSON string and log it to the console.
Parse the JSON string back into a JavaScript object and log the first book's title to the console.
*/

// Your code here
// const jsonLibrary = JSON.stringify(library);
// console.log(jsonLibrary);
// const parseLibrary = JSON.parse(jsonLibrary);
// console.log(parseLibrary[0].title);
// ========================================================
// /* Task 7
// Create an array named `students`, where each student has a `name`, `age`, and `grade`.
// Log the name of any student who has a grade higher than 90.
// */

// // Your code here
// const students = [
//   {
//     name: "John",
//     age: 23,
//     grade: 95,
//   },
//   {
//     name: "Jobs",
//     age: 22,
//     grade: 99,
//   },
//   {
//     name: "Mark",
//     age: 21,
//     grade: 88,
//   },
// ];
// let found = false;
// for (let student of students) {
//   if (student.grade > 90) {
//     console.log(student.name);
//     found = true;
//   }
// }
// if (!found) {
//   console.log("No students with a grade higher than 90.");
// }
// ========================================================
/* Task 8
Define an object named `c` with properties for `brand`, `model`, `year`, and `isElectric`.
Use a function to check if the car is electric. If it is, log `"This car is eco-friendly!"`. Otherwise, log `"This car runs on fuel."`
*/

// Your code here
// const c = [
//   {
//     brand: "Nissan",
//     model: "Model Sunny",
//     year: 2020,
//     isElectric: false,
//   },
//   {
//     brand: "Tesla",
//     model: "Model S",
//     year: 2025,
//     isElectric: true,
//   },
// ];

// function checkElectricCars(cars) {
//   for (let car of cars) {
//     if (car.isElectric) {
//       console.log(`${car.brand} ${car.model} is eco-friendly!`);
//     } else {
//       console.log(`${car.brand} ${car.model} runs on fuel.`);
//     }
//   }
// }

// checkElectricCars(c);

// ========================================================
/* Task 9
Create a `movies` array where each movie is an object with properties for `title`, `director`, and `rating`.
Write a loop that logs all movie titles with a rating higher than 8.
*/

// Your code here
// const movies = [
//   {
//     title: "Ghosted",
//     director: "Unknown",
//     rating: 10,
//   },
//   {
//     title: "Spider Men",
//     director: "Unknown",
//     rating: 8,
//   },
//   {
//     title: "Bat Man",
//     director: "Unknown",
//     rating: 7,
//   },
//   {
//     title: "Barefoot",
//     director: "Unknown",
//     rating: 9,
//   },
// ];
// function movieListByRating(movies) {
//   const highRated = movies.filter((movie) => movie.rating > 8);

//   if (highRated.length === 0) {
//     console.log("No movies with a rating higher than 8.");
//     return;
//   }

//   console.log("Movies with a rating higher than 8:");
//   highRated.map((movie) => console.log(`- ${movie.title}`));
// }
// movieListByRating(movies);
// ========================================================
/* Task 10
Write a function `findOldestCar` that takes an array of car objects and returns the car with the earliest `year`.
*/

// Your code here
// const cars = [
//   {
//     brand: "Nissan",
//     model: "Model Sunny",
//     year: 2001,
//     isElectric: false,
//   },
//   {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2015,
//     isElectric: true,
//   },
// ];

// function findOldestCar(cars) {
//   if (cars.length === 0) {
//     return "No cars available.";
//   }

//   let oldestCar = cars.reduce((oldest, car) =>
//     car.year < oldest.year ? car : oldest
//   );

//   return oldestCar;
// }

// const oldestCar = findOldestCar(cars);
// console.log("The oldest car is:", oldestCar);
// ========================================================
/* Task 11
Define a `userProfiles` array containing objects representing users.
Each user should have a `username`, `email`, and `isAdmin` property.
Write a function that filters and returns only the users who are administrators.
*/

// Your code here
// const userProfiles = [
//   {
//     username: "John",
//     email: "John@mail.com",
//     isAdmin: false,
//   },
//   {
//     username: "Jobs",
//     email: "Jobs@mail.com",
//     isAdmin: true,
//   },
//   {
//     username: "Mark",
//     email: "mark@mail.com",
//     isAdmin: true,
//   },
// ];
// function administrators(userProfiles) {
//   // using loop
//   // for (let user of userProfiles) {
//   //   if (user.isAdmin) {
//   //     console.log(user);
//   //   }
//   // }
//   // using filter
//   return userProfiles.filter((user) => user.isAdmin);
// }
// console.log(administrators(userProfiles));
// ========================================================
/* Task 12
Define an array named `orders`, where each order contains `orderId`, `customerName`, `totalAmount`, and `status` (either "pending" or "completed").
Write a function that returns only the completed orders.
*/

// Your code here
// const orders = [
//   {
//     orderId: 1,
//     customerName: "Alice",
//     totalAmount: 50.75,
//     status: "pending",
//   },
//   {
//     orderId: 2,
//     customerName: "Bob",
//     totalAmount: 120.0,
//     status: "completed",
//   },
//   {
//     orderId: 3,
//     customerName: "Charlie",
//     totalAmount: 75.5,
//     status: "pending",
//   },
//   {
//     orderId: 4,
//     customerName: "David",
//     totalAmount: 200.99,
//     status: "completed",
//   },
// ];

// if (orders.length === 0) {
//   console.log("Order is Empty");
// return;
// }
// function completedOrders(orders) {
//   return orders.filter((order) => order.status === "completed");
// }
// console.log(completedOrders(orders));
// ========================================================
/* Task 13
Create an object named `smartphone` with properties for `brand`, `model`, `batteryLife`, and `is5GEnabled`.
Write a function that logs `"This phone supports 5G!"` if `is5GEnabled` is `true`, otherwise logs `"This phone does not support 5G."`
*/
// Your code here
const smartphone = [
  {
    brand: "Samsung",
    model: "Galaxy S23",
    batteryLife: "24 hours",
    is5GEnabled: true,
  },
  {
    brand: "Mi",
    model: "Pro 4G",
    batteryLife: "24 hours",
    is5GEnabled: false,
  },
];
function is5G(smartphone) {
  if (smartphone.length === 0) {
    return ["Smartphone list is empty"];
  }
  // ==============
  // using Loop
  // for (const singlePhone of smartphone) {
  //   if (singlePhone.is5GEnabled) {
  //     console.log(
  //       `${singlePhone.brand} ${singlePhone.model} - This phone supports 5G!`
  //     );
  //   } else {
  //     console.log(
  //       `${singlePhone.brand} ${singlePhone.model} - This phone does not support 5G!`
  //     );
  //   }
  // }
  // ==================
  // using map()
  return smartphone.map((phone) =>
    phone.is5GEnabled
      ? `${phone.brand} ${phone.model} - This phone supports 5G!`
      : `${phone.brand} ${phone.model} - This phone does not support 5G!`
  );
}
console.log(is5G(smartphone));
console.log("================");
// ========================================================
/* Task 14
Define an object named `fox` with properties `name`, `age`, and `habitat`.
Write a function that logs `"This fox is young"` if its age is under 3, `"This fox is an adult"` if 3 or older.
*/

// Your code here
// const foxes = [
//   {
//     name: "Red Fox",
//     age: 4,
//     habitat: "Forests, grasslands, and mountains",
//   },
//   {
//     name: "Arctic Fox",
//     age: 3,
//     habitat: "Tundra and Arctic regions",
//   },
//   {
//     name: "Fennec Fox",
//     age: 2,
//     habitat: "Sahara Desert",
//   },
//   {
//     name: "Gray Fox",
//     age: 5,
//     habitat: "Woodlands and scrublands",
//   },
// ];
// function isFoxAdult(foxes) {
//   if (foxes.length === 0) {
//     console.log("No Foxes");
//     return;
//   }
//   for (const fox of foxes) {
//     if (fox.age >= 3) {
//       console.log(`${fox.name} age is ${fox.age} This fox is an Adult `);
//     } else {
//       console.log(`${fox.name} age is ${fox.age} This fox is young `);
//     }
//   }
// }
// isFoxAdult(foxes);
// ========================================================
/* Task 15
Define an array named `employees`, where each employee has `name`, `position`, and `salary`.
Write a function that calculates the total salary of all employees in the company.
*/

// Your code here
const employees = [
  {
    name: "Alice",
    position: "Software Engineer",
    salary: 60000,
  },
  {
    name: "Bob",
    position: "Project Manager",
    salary: 75000,
  },
  {
    name: "Charlie",
    position: "Data Analyst",
    salary: 50000,
  },
  {
    name: "David",
    position: "HR Manager",
    salary: 55000,
  },
];

function totalSalary() {
  let TotalSalary = 0;
  for (const employee of employees) {
    const salary = employee.salary;
    TotalSalary += salary;
  }
  console.log(`Total salary of all employee is: ${TotalSalary}`);
}

totalSalary(employees);
