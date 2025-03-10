/* Task 1
Store a string `"Hello, LocalStorage!"` in LocalStorage under the key `"message"`.
Retrieve it and log it to the console.
*/

// Your code here
// const welcomeMessage = "Hello, LocalStorage!";
// localStorage.setItem("message", welcomeMessage);
// const retrievedMessage = localStorage.getItem("message");
// console.log(retrievedMessage);

/* Task 2
Create an object `userSettings` with:
- `theme` ("dark" or "light")
- `language` ("English", "Spanish", etc.)

Convert it to a JSON string and store it in LocalStorage.
Retrieve it, parse it, and log the `theme` property.
*/

// Your code here
// Create the userSettings object
// const userSettings = {
//   theme: "dark",
//   language: "English",
// };

// localStorage.setItem("userSettings", JSON.stringify(userSettings));
// const retrievedSettings = JSON.parse(localStorage.getItem("userSettings"));
// console.log(retrievedSettings);

/* Task 3
Define an array `favoriteBooks` with at least three book objects (`title` and `author`).
Store the array in LocalStorage.
Retrieve and parse it, then log the titles of all books.
*/

// Your code here
// Define the favoriteBooks array with three book objects
const favoriteBooks = [
  { title: "1984", author: "George Orwell" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
];

localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));

const retrievedBooks = JSON.parse(localStorage.getItem("favoriteBooks"));
retrievedBooks.forEach((book) => console.log(book.title));

/* Task 4
Write a function `saveToLocalStorage(key, object)` that:
- Converts an object to JSON.
- Stores it in LocalStorage under the provided key.
Test it by saving an object and retrieving it.
*/
// your code here
function saveToLocalStorage(key, object) {
  localStorage.setItem(key, JSON.stringify(object));
}

const userProfile = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

saveToLocalStorage("userProfile", userProfile);

const retrievedProfile = JSON.parse(localStorage.getItem("userProfile"));

console.log(retrievedProfile);

/* Task 5
Write a function `getFromLocalStorage(key)` that:
- Retrieves a value from LocalStorage.
- Parses it if it's JSON.
- Logs the retrieved value.
*/

// Your code here

function getFromLocalStorage(key) {
  const storedValue = localStorage.getItem(key);
  return storedValue && storedValue.startsWith("{")
    ? JSON.parse(storedValue)
    : storedValue;
}

localStorage.setItem("sampleData", JSON.stringify({ name: "Alice", age: 25 }));
console.log(getFromLocalStorage("sampleData"));

localStorage.setItem("plainText", "Hello, world!");
console.log(getFromLocalStorage("plainText"));

/* Task 6
Create an object `userProfile` with:
- `username`
- `email`
- `preferences` (an object with `theme` and `notifications`)

Save it to LocalStorage.
Retrieve and update the `theme` property to `"dark mode"`, then log the updated object.
*/
// Your code here
const userProfile1 = {
  username: "john_doe",
  email: "john.doe@example.com",
  preferences: {
    theme: "light",
    notifications: true,
  },
};

localStorage.setItem("userProfile1", JSON.stringify(userProfile1));
const retrievedProfile1 = JSON.parse(localStorage.getItem("userProfile1"));
retrievedProfile1.preferences.theme = "dark mode";
console.log(retrievedProfile1);

console.log(userProfile1);

/* Task 7
Define an object `shoppingList` with an array `items` (strings).
Save it to LocalStorage.
Write a function `addItemToList(item)` that:
- Retrieves `shoppingList` from LocalStorage.
- Adds a new item.
- Saves the updated list back to LocalStorage.
- Logs the updated list.
*/
// Your code here
const shoppingList = {
  items: ["Milk", "Bread", "Eggs"],
};
localStorage.setItem("shoppingList", JSON.stringify(shoppingList));

function addItemToList(item) {
  const list = JSON.parse(localStorage.getItem("shoppingList"));

  list.items.push(item);
  localStorage.setItem("shoppingList", JSON.stringify(list));

  console.log(list);
}
addItemToList("Butter");

/* Task 8
Create a counter object with:
- `count` (starting at 0)
Store it in LocalStorage.
Write a function `incrementCounter()` that:
- Retrieves the counter.
- Increases `count` by 1.
- Saves the updated counter.
- Logs the new count.
*/

// Your code here
// Initialize counter in LocalStorage if not present
if (!localStorage.getItem("counter")) {
  localStorage.setItem("counter", JSON.stringify({ count: 0 }));
}

function incrementCounter() {
  let counter = JSON.parse(localStorage.getItem("counter"));
  counter.count += 1;

  localStorage.setItem("counter", JSON.stringify(counter));

  console.log("New count:", counter.count);
}

// Example usage
incrementCounter();

/* Task 9
Create an array `tasks`, where each task is an object (`id`, `description`, `completed`).
Save it to LocalStorage.
Write a function `markTaskComplete(taskId)` that:
- Retrieves `tasks` from LocalStorage.
- Finds the task with the given ID and sets `completed` to `true`.
- Saves the updated tasks.
- Logs the updated list.
*/

// Your code here

if (!localStorage.getItem("tasks")) {
  const tasks = [
    { id: 1, description: "Do the laundry", completed: false },
    { id: 2, description: "Buy groceries", completed: false },
    { id: 3, description: "Complete homework", completed: false },
  ];
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function markTaskComplete(taskId) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));

  let task = tasks.find((tsk) => tsk.id === taskId);
  if (task) {
    task.completed = true;
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log("Updated tasks:", tasks);
}

markTaskComplete();

/* Task 10
Write a function `clearLocalStorage()` that removes all data stored in LocalStorage.
Call it and confirm LocalStorage is empty.
*/

// Your code here
function clearLocalStorage() {
  localStorage.clear();
  console.log("LocalStorage is now empty.");
}
clearLocalStorage();
