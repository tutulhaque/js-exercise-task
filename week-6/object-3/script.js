/* Task 1
Create a constructor function `User` that takes `username` and `email` as parameters.
It should create an object with these properties and a method `showInfo` that logs user details.
Instantiate a new user and call `showInfo()`.
*/

// Your code here
function UserFun(username, email) {
  this.username = username;
  this.email = email;
  this.showInfo = function () {
    console.log(`Username: ${this.username}, Email: ${this.email}`);
  };
}

// Instantiate a new user
const user1 = new UserFun("JohnDoe", "johndoe@example.com");

// Call showInfo method
user1.showInfo();

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
const addTaskBtn = document.getElementById("addTaskBtn");
const displayTask = document.getElementById("displayTask");

class Task {
  constructor(title, description, completed = false) {
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
}

const tasks = [];

function displayTasks() {
  displayTask.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${task.title}</strong>: ${task.description} - <em>${
      task.completed === "yes" ? "Completed" : "Not Completed"
    }</em>`;
    displayTask.appendChild(li);
  });
}

function insertTask() {
  const title = prompt("Enter Task Title:");
  const description = prompt("Enter Task Description:");
  const completed = prompt(" Yes, for completed and No for not completed");
  if (title && description && completed) {
    const newTask = new Task(title, description, completed.toLowerCase());
    tasks.push(newTask);
    displayTasks();
  } else {
    alert("Task title and description are required!");
  }
}

addTaskBtn.addEventListener("click", insertTask);
