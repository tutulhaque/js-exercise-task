/* Task 1
Create a constructor function `User` that takes `username` and `email` as parameters.
It should create an object with these properties and a method `showInfo` that logs user details.
Instantiate a new user and call `showInfo()`.
*/

// Your code here
// function UserFun(username, email) {
//   this.username = username;
//   this.email = email;
//   this.showInfo = function () {
//     console.log(`Username: ${this.username}, Email: ${this.email}`);
//   };
// }

// // Instantiate a new user
// const user1 = new UserFun("JohnDoe", "johndoe@example.com");

// // Call showInfo method
// user1.showInfo();

// =========================================================
/* Task 2
Modify Task 1: Use an ES6 `class` instead of a constructor function to define `User`.
Add a method `changeEmail(newEmail)` that updates the user's email.
*/
// // Your code here
// class User {
//   constructor(username, email) {
//     this.username = username;
//     this.email = email;
//   }
//   showInfo() {
//     console.log(`Username: ${this.username}, Email: ${this.email}`);
//   }
// }
// const userOne = new User("John", "john@gmail.com");
// const userTwo = new User("Jobs", "jobs@gmail.com");
// userOne.showInfo();
// userTwo.showInfo();
// =========================================================
/* Task 3
Create an object `theme` with properties `name` (light or dark) and `isActive`.
Add a button in HTML. When clicked, toggle the theme between light and dark, updating the `isActive` property.
*/

// // Your code here
// const themeBtn = document.getElementById("themeBtn");
// const theme = {
//   name: "light",
//   isActive: true,
// };

// function changeTheme() {
//   document.body.classList.toggle("dark");
//   document.body.classList.toggle("light");
//   theme.name = document.body.classList.contains("dark") ? "dark" : "light";
//   theme.isActive = theme.name === "light";
//   console.log(theme);
// }

// themeBtn.addEventListener("click", changeTheme);
// =========================================================
/* Task 4
Create an object `counter` with a `value` property.
Add two buttons in HTML: one to increase `value`, another to decrease it.
Display `value` in an HTML element and update it dynamically when buttons are clicked.
*/

// Your code here
// const increaseValue = document.getElementById("increaseValue");
// const decreaseValue = document.getElementById("decreaseValue");
// const countDisplay = document.getElementById("countDisplay");
// const counter = {
//   value: 0,
// };

// const updateDisplay = () => {
//   countDisplay.innerText = counter.value;
// };

// const increase = () => {
//   counter.value++;
//   updateDisplay();
// };
// const decrease = () => {
//   if (counter.value > 0) {
//     counter.value--;
//   }
//   updateDisplay();
// };
// increaseValue.addEventListener("click", increase);
// decreaseValue.addEventListener("click", decrease);
// =========================================================
/* Task 5
Create an object `product` with `name`, `price`, and `quantity`.
Add an input field in HTML where the user can enter a quantity to purchase.
Update the `quantity` property and display the total price dynamically.
*/

// Your code here
// const increaseQtyBtn = document.getElementById("increaseQtyBtn");
// const decreaseQtyBtn = document.getElementById("decreaseQtyBtn");
// const inputQty = document.getElementById("inputQty");
// const displayProductPrice = document.getElementById("displayProductPrice");

// const product = {
//   name: "iPhone",
//   price: 100,
//   quantity: 0,
// };

// const updatePrice = () => {
//   displayProductPrice.innerText = product.price * product.quantity;
// };

// const increaseQty = () => {
//   const qty = parseInt(inputQty.value);
//   if (!isNaN(qty) && qty > 0) {
//     product.quantity += qty;
//     updatePrice();
//     console.log(product);
//     inputQty.value = "";
//   }
// };

// const decreaseQty = () => {
//   const qty = parseInt(inputQty.value);
//   if (!isNaN(qty) && qty > 0) {
//     product.quantity = Math.max(0, product.quantity - qty);
//     updatePrice();
//     inputQty.value = "";
//   }
// };

// increaseQtyBtn.addEventListener("click", increaseQty);
// decreaseQtyBtn.addEventListener("click", decreaseQty);

// =========================================================

/* Task 6
Define a `Task` constructor that takes `title`, `description`, and `completed`.
Add a button in HTML that, when clicked, adds a new `Task` object to a `tasks` array and displays it on the page.
*/

// Your code here
// const addTaskBtn = document.getElementById("addTaskBtn");
// const display = document.getElementById("display");

// class Tasks {
//   constructor(title, description, completed) {
//     this.title = title;
//     this.description = description;
//     this.completed = completed;
//   }
// }
// const tasks = [];

// function displayTask() {
//   tasks.forEach((task, index) => {
//     const li = document.createElement("li");
//     li.innerHTML = `<strong>${task.title}</strong> - <span>${
//       task.description
//     }</span> - <em>${
//       task.completed === "yes" ? "completed" : "not completed"
//     }</em>`;
//     display.appendChild(li);
//   });
// }
// function insertTask() {
//   const title = prompt("Enter your title");
//   const description = prompt("Enter your description");
//   const completed = prompt("Yes, if its complete");
//   const newTask = new Tasks(title, description, completed.toLowerCase());
//   tasks.push(newTask);
//   displayTask();
// }
// addTaskBtn.addEventListener("click", insertTask);
// =========================================================

/* Task 7
Create an object `weatherApp` with a method `fetchWeather(city)`.
Use `fetch` to get weather data from an API and display it in an HTML element.
(API: OpenWeather or any free weather API)
*/

// Your code here

// async function getData() {
//   const url = "https://jsonplaceholder.typicode.com/users";
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log("data", data);
//   } catch (error) {
//     console.error(error.message);
//   }
// }
// getData();
// const weatherDisplay = document.getElementById("weatherDisplay");
// const apiKey = "c7d704633f98b2f48803ed1d7192753a";
// const city = "Helsinki";
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     weatherDisplay.innerHTML = `City: ${data.name}<br> Temperature: ${Math.ceil(
//       data.main.temp
//     )}°C <br>Weather: ${data.weather[0].description}`;
//   })
//   .catch((error) => console.error("Error fetching weather data:", error));
// =========================================================
/* Task 8
Create a constructor function `Car` that takes `brand`, `model`, and `year`.
In the constructor, add a method `age()` that calculates the car’s age.
Instantiate a new `Car` and display its age on the webpage.
*/

// Your code here
// function Car(brand, model, year) {
//   this.brand = brand;
//   this.model = model;
//   this.year = year;
//   this.age = function () {
//     const currentYear = new Date().getFullYear();
//     return currentYear - this.year;
//   };
// }

// const myCar = new Car("Toyota", "Corolla", 2015);

// document.body.innerHTML = `<h2>Car Brand: ${myCar.brand}<br>Model:${
//   myCar.model
// }<br> Car Age: ${myCar.age()} years</h2>`;

// =========================================================

/* Task 9
Create an array `users` where each user has `name` and `score`.
Add a button in HTML that sorts the users by score in descending order and updates the displayed list.
*/

// Your code here
// const sortUserBtn = document.getElementById("sortUserBtn");
// let users = [
//   { name: "Jobs", score: 85 },
//   { name: "Ali", score: 92 },
//   { name: "Charlie", score: 78 },
//   { name: "David", score: 95 },
// ];
// // display users
// function displayUsers() {
//   const userList = document.getElementById("userList");
//   userList.innerHTML = ""; // Clear previous list
//   users.forEach((user) => {
//     const li = document.createElement("li");
//     li.textContent = `${user.name}: ${user.score}`;
//     userList.appendChild(li);
//   });
// }
// // Sort Users
// function sortUsers() {
//   users.sort((a, b) => b.score - a.score);
//   displayUsers();
// }

// sortUserBtn.addEventListener("click", sortUsers);
// // show all users without sorting
// displayUsers();

// =======================================================
/* Task 10
Create an object `shoppingList` with an array `items`.
Add an input field and button to allow users to add new items to `items` and display the updated list.
*/

// Your code here
// const shoppingList = {
//   items: ["Milk", "Bread", "Eggs"],
// };
// // Function to display shopping list
// function displayList() {
//   const list = document.getElementById("shoppingList");
//   list.innerHTML = "";
//   shoppingList.items.forEach((item) => {
//     const li = document.createElement("li");
//     li.textContent = item;
//     list.appendChild(li);
//   });
// }
// // Function to add a new item to the list
// function addItem() {
//   const input = document.getElementById("itemInput");
//   const newItem = input.value.trim(); // Get input value & remove extra spaces

//   if (newItem) {
//     // Check if input is not empty
//     shoppingList.items.push(newItem);
//     input.value = "";
//     displayList();
//   } else {
//     alert("Please enter an item.");
//   }
// }
// // display of shopping list
// displayList();
// =======================================================
/* Task 11
Create an array of `posts` where each post has `title`, `content`, and `likes`.
Add a "Like" button next to each post that increases the `likes` count and updates the display.
*/

// Your code here
// let posts = [
//   { title: "Post 1", content: "This is the first post.", likes: 0 },
//   { title: "Post 2", content: "Another blog post here!", likes: 0 },
//   { title: "Post 3", content: "Yet another interesting post.", likes: 0 },
// ];
// // Function to display posts
// function displayPosts() {
//   const container = document.getElementById("postsContainer");
//   container.innerHTML = "";

//   posts.forEach((post, index) => {
//     const postDiv = document.createElement("div");
//     postDiv.innerHTML = `
//           <h3>${post.title}</h3>
//           <p>${post.content}</p>
//           <p>Likes: <span id="likes-${index}">${post.likes}</span></p>
//           <button onclick="likePost(${index})">Like</button>
//           <hr>
//       `;
//     container.appendChild(postDiv);
//   });
// }
// // Function to increase likes
// function likePost(index) {
//   posts[index].likes += 1;
//   document.getElementById(`likes-${index}`).textContent = posts[index].likes;
// }
// // display of posts
// displayPosts();

// =======================================================
/* Task 12
Create a constructor function `Employee` with `name`, `position`, and `salary`.
Add a method `increaseSalary(percent)` that increases the salary by a given percentage.
Create an employee and increase their salary dynamically.
*/

// Your code here
// class Employee {
//   constructor(name, position, salary) {
//     this.name = name;
//     this.position = position;
//     this.salary = salary;
//   }

//   increaseSalary(percent) {
//     this.salary += (this.salary * percent) / 100;
//   }
// }

// // Create an employee instance
// let employee = new Employee("John Doe", "Software Engineer", 50000);
// console.log(employee);
// // display employee details
// function displayEmployee() {
//   document.getElementById("empName").textContent = employee.name;
//   document.getElementById("empPosition").textContent = employee.position;
//   document.getElementById("empSalary").textContent = employee.salary.toFixed(2);
// }

// // increase salary dynamically
// function applyIncrease() {
//   let percent = parseFloat(document.getElementById("increasePercent").value);
//   if (!isNaN(percent) && percent > 0) {
//     employee.increaseSalary(percent);
//     displayEmployee();
//     document.getElementById("increasePercent").value = "";
//   } else {
//     alert("Please enter a valid percentage.");
//   }
// }
// // display of employee details
// displayEmployee();

// =======================================================
/* Task 13
Create an object `timer` with `seconds` and a method `start()` that counts seconds up.
Display the timer in an HTML element and update it every second.
*/

// Your code here
// const timerBtn = document.getElementById("startButton");
// const timer = {
//   seconds: 0,
//   intervalId: null,

//   start() {
//     if (this.intervalId) return; // Prevent multiple intervals
//     this.intervalId = setInterval(() => {
//       this.seconds++;
//       document.getElementById("timer").textContent = this.seconds;
//     }, 1000);
//   },
// };

// timerBtn.addEventListener("click", () => timer.start());
// =======================================================
/* Task 14
Create a constructor function `Book` that takes `title`, `author`, and `pages`.
Create a simple book library that allows users to add books via an HTML form and displays them dynamically.
*/

// Your code here
// function Book(title, author, pages) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
// }

// const library = [];

// // Function to display books
// function displayBooks() {
//   const bookList = document.getElementById("bookList");
//   bookList.innerHTML = "";

//   library.forEach((book) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = `${book.title} by ${book.author} (${book.pages} pages)`;
//     bookList.appendChild(listItem);
//   });
// }

// // Handle the form submission
// const bookForm = document.getElementById("bookForm");
// bookForm.addEventListener("submit", function (event) {
//   event.preventDefault(); // Prevent page refresh on form submit

//   const title = document.getElementById("title").value;
//   const author = document.getElementById("author").value;
//   const pages = document.getElementById("pages").value;

//   // Create a new book and add to the library
//   const newBook = new Book(title, author, parseInt(pages));
//   library.push(newBook);

//   // Clear the form
//   bookForm.reset();

//   // Display updated list of books
//   displayBooks();
// });
// =======================================================
/* Task 15
Create an object `foxTracker` with a `foxes` array.
Add an input field and button that allows users to add new foxes (with name and location) to the array.
Display the list of foxes dynamically in an HTML element.
*/

// Your code here
// foxTracker object
// const foxTracker = {
//   // foxes array
//   foxes: [],

//   // Function to display the list of foxes
//   displayFoxes() {
//     const foxList = document.getElementById("foxList");
//     foxList.innerHTML = ""; // Clear the list before updating

//     // Loop through the foxes array
//     this.foxes.forEach((fox) => {
//       const listItem = document.createElement("li");
//       listItem.textContent = `${fox.name} - Location: ${fox.location}`;
//       foxList.appendChild(listItem);
//     });
//   },

//   // Function to add a new fox to the array
//   addFox(name, location) {
//     this.foxes.push({ name, location });
//     this.displayFoxes(); // Update the displayed list
//   },
// };

// // Event listener for the "Add Fox" button
// document.getElementById("addFoxBtn").addEventListener("click", () => {
//   const foxName = document.getElementById("foxName").value;
//   const foxLocation = document.getElementById("foxLocation").value;

//   // Add the new fox to the foxTracker object
//   if (foxName && foxLocation) {
//     foxTracker.addFox(foxName, foxLocation);
//     document.getElementById("foxName").value = "";
//     document.getElementById("foxLocation").value = "";
//   } else {
//     alert("Please enter both name and location.");
//   }
// });
