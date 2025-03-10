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
let posts = [
  { title: "Post 1", content: "This is the first post.", likes: 0 },
  { title: "Post 2", content: "Another blog post here!", likes: 0 },
  { title: "Post 3", content: "Yet another interesting post.", likes: 0 },
];
// Function to display posts
function displayPosts() {
  const container = document.getElementById("postsContainer");
  container.innerHTML = "";

  posts.forEach((post, index) => {
    const postDiv = document.createElement("div");
    postDiv.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.content}</p>
          <p>Likes: <span id="likes-${index}">${post.likes}</span></p>
          <button onclick="likePost(${index})">Like</button>
          <hr>
      `;
    container.appendChild(postDiv);
  });
}
// Function to increase likes
function likePost(index) {
  posts[index].likes += 1;
  document.getElementById(`likes-${index}`).textContent = posts[index].likes;
}
// display of posts
displayPosts();

/* Task 12
Create a constructor function `Employee` with `name`, `position`, and `salary`.
Add a method `increaseSalary(percent)` that increases the salary by a given percentage.
Create an employee and increase their salary dynamically.
*/

// Your code here
