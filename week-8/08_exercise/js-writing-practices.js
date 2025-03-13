/* Task 1: Use "strict mode"
/*
Task: Create a function `task1` that uses `"use strict"`. 
      Inside the function, try using a variable without declaring it first.
      Catch the error and log: "Strict mode error: [error message]"

Example:
task1(); // Logs: "Strict mode error: variable is not defined"
*/

function task1() {
  "use strict"; // Enable strict mode

  try {
    // Trying to use a variable without declaring it first
    myVariable = "This will throw an error";
  } catch (error) {
    console.log("Strict mode error: " + error.message); // Catch and log the error
  }
}
task1();

// ===============================================

/* Task 2: Declare Variables Correctly
/*
Task: Declare a constant `MAX_USERS = 100` and a `let` variable `currentUsers = 10`.
      Try changing `MAX_USERS` and catch the error.

Expected:
- The error should be caught and logged.
- `MAX_USERS` should not change.
*/

function task2() {
  const MAX_USERS = 100;
  let currentUsers = 10;

  try {
    MAX_USERS = 150; // Trying to reassign a constant
  } catch (error) {
    console.log(`Error: ${error.message}`); // Logs the error message
  }

  console.log(MAX_USERS);
}

task2();

// ===============================================

/* Task 3: Create and Log an Object
/*
Task: Create an object `userProfile` with:
      - `name`
      - `email`
      - `isAdmin` (true or false)
      Log the object.

Expected:
- Console logs: { name: "Alice", email: "alice@example.com", isAdmin: true }
*/

function task3(userProfile) {
  console.log(userProfile); // Log the userProfile object
}

task3({ name: "Alice", email: "alice@example.com", isAdmin: true });
// output: { name: "Alice", email: "alice@example.com", isAdmin: true }

// ===============================================

/* Task 4: Write a Simple Function
/*
Task: Create `calculateArea` function that returns the area of a rectangle.
      The function should take `width` and `height` as inputs.

Example:
calculateArea(5, 10) → 50
*/

function calculateArea(width, height) {
  return width * height;
}
console.log(calculateArea(5, 10)); // Output: 50

// ===============================================

/* Task 5: Avoid Magic Numbers
/*
Task: Define `const DISCOUNT = 0.1`. 
      Write `applyDiscount(price)` that reduces the price by the discount.

Example:
applyDiscount(100) → 90
*/
const DISCOUNT = 0.1; // 10% discount

function applyDiscount(price) {
  if (price > 0) {
    const totalDiscount = price * DISCOUNT; // Calculate discount based on price
    const discountPrice = price - totalDiscount; // Calculate price after discount
    console.log("Discount: " + totalDiscount);
    console.log("Price after discount: " + discountPrice);
  } else {
    console.log("Invalid price");
  }
}

applyDiscount(100); // Should log: Discount: 10 and Price after discount: 90

// ===============================================

/* Task 6: Write Useful Comments
/*
Task: Write a function `greetUser(name)` that returns a greeting.
      Use a meaningful comment explaining the function.

Example:
greetUser("Bob") → "Hello, Bob!"
*/

function greetUser(name = "User") {
  // This greetUser function takes a name as an argument and returns a greeting message.
  return "Hello, " + name + "!"; // Concatenates the name with the greeting message.
}

console.log(greetUser("Bob")); // log: "Hello, Bob!"

// ===============================================

/* Task 7: Refactor Unclear Code
/*
Task: Improve this function to make it clear and readable.

Before:
function f(n){return n<0 ? 'negative' : 'positive';}

After:
- Use better naming and proper formatting.
*/

function checkNumber(number) {
  // This function checks whether the number is negative or positive.
  if (number < 0) {
    return "negative"; // Returns 'negative' if the number is less than 0
  } else {
    return "positive"; // Returns 'positive' if the number is greater than or equal to 0
  }
}
console.log(checkNumber(-5)); // Should log: "negative"
console.log(checkNumber(10)); // Should log: "positive"

// ===============================================

/* Task 8: Fix Formatting
/*
Task: Rewrite this code to make it **formatted correctly**.

Before:
let x=10; function example(){console.log(x);}

After:
- Proper indentation and spacing.
*/

function example() {
  // Declare the variable x with a value of 10
  let x = 10;

  // Log the value of x to the console
  console.log(x);
}
