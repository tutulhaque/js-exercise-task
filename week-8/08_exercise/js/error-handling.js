"use strict";

/* Task 1: Try-Catch for Debugging
/*
Task: Wrap the code inside a `try-catch` block.
      Simulate an error by calling an undefined function.

Test cases:
task1(); // Should log: "Error caught: function is not defined"
*/

function task1() {
  try {
    undefineFunction();
  } catch (error) {
    console.log("Error caught:" + error.message);
  }
}
task1();

//=========================================================

/* Task 2: Handle ReferenceError
/*
Task: Try using a variable that hasn’t been declared.
      Catch the error and log: "ReferenceError caught: [error message]"

Test cases:
task2(); // Should log: "ReferenceError caught: myVariable is not defined"
*/

function task2() {
  try {
    myVariable;
  } catch (error) {
    console.log("ReferenceError caught:" + error.message);
  }
}
task2();

//=========================================================

/* Task 3: Using Finally
/*
Task: Simulate an error, log it, and ensure "Task completed." always runs.

Test cases:
task3(); // Should log an error message and "Task completed."
*/

function task3() {
  try {
    // Simulating an error by referencing an undefined variable
    errorMessage;
  } catch (error) {
    console.log("Error caught: " + error.message);
  } finally {
    console.log("Task completed.");
  }
}
task3();

//=========================================================

/* Task 4: Fix JSON Parsing Error
/*
Task: Try to parse invalid JSON. If it fails, log `"Invalid JSON format"`

Test cases:
parseJSON('{"name": "Alice", "age": 25}'); // Should return object
parseJSON("Invalid JSON text"); // Should log an error and return null
*/

function parseJSON(jsonString) {
  try {
    const parsedData = JSON.parse(jsonString);
    return parsedData;
  } catch (error) {
    console.log("Invalid JSON format");
    return null;
  }
}

// Test cases
console.log(parseJSON('{"name": "Alice", "age": 25}'));
// Should return the object: { name: "Alice", age: 25 }
console.log(parseJSON("Invalid JSON text"));
// Should log: "Invalid JSON format" and return null

//=========================================================

/* Task 5: Throwing a Custom Error
/*
Task: If age is below 18, throw `"You must be at least 18."`

Test cases:
checkAge(20); // Should log: "Access granted."
checkAge(16); // Should log: "Error: You must be at least 18."
*/

function checkAge(age) {
  //   return age > 18 ? "Access granted." : "Error: You must be at least 18.";
  try {
    if (age < 18) {
      throw new Error("You must be at least 18.");
    }
    return "Access granted.";
  } catch (error) {
    return "Error: " + error.message;
  }
}
console.log(checkAge(20)); // Should log: "Access granted."
console.log(checkAge(16)); // Should log: "Error: You must be at least 18."

//=========================================================

/* Task 6: Save and Retrieve from LocalStorage
/*
Task: Write a function to store an object in **LocalStorage**.
      Then retrieve it and handle errors if JSON is invalid.

Test cases:
saveUser({ name: "Alice", age: 25 }); // Should save user
console.log(getUser()); // Should return saved user object
localStorage.setItem("user", "{ invalid JSON }"); // Simulate corruption
console.log(getUser()); // Should log an error and return null
*/

function saveUser(user) {
  try {
    const userJSON = JSON.stringify(user); // user object to JSON string
    localStorage.setItem("user", userJSON); // Save to localStorage
  } catch (error) {
    console.error("Error saving user:", error.message);
  }
}

function getUser() {
  try {
    const userJSON = localStorage.getItem("user1"); // Get JSON string from localStorage
    if (userJSON) {
      return JSON.parse(userJSON); // Convert JSON string back to object
    } else {
      return null; // Return null if no user is saved
    }
  } catch (error) {
    console.error("Error parsing user data:", error.message);
    return null; // Return null if JSON is invalid
  }
}

// Test cases
saveUser({ name: "Alice", age: 25 }); // Should save user
console.log(getUser()); // Should log: { name: "Alice", age: 25 }

localStorage.setItem("user1", "{ invalid JSON }"); // Simulate corruption
console.log(getUser()); // Should log: "Error parsing user data" and return null

//=========================================================

/* Task 7: Check if Object Property Exists
/*
Task: If a property is missing, log `"Property not found"`

Test cases:
checkProperty({ name: "Bob", age: 30 }, "name"); // Should log value
checkProperty({ name: "Bob", age: 30 }, "email"); // Should log "Property not found"
*/

function checkProperty(obj, key) {
  if (key in obj) {
    console.log(obj[key]);
  } else {
    console.log("Property not found");
  }
}
checkProperty({ name: "Bob", age: 30 }, "name"); // Should log value
checkProperty({ name: "Bob", age: 30 }, "email"); // Should log "Property not found"
//=========================================================

/* Task 8: Fetch API Error Handling
/*
Task: Use `fetch()` to get data, handle errors properly.

Test cases:
fetchData("https://jsonplaceholder.typicode.com/users"); // Should log API data
fetchData("invalid-url"); // Should log network error
*/

async function fetchData(url) {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // }
  // fetchData("https://jsonplaceholder.typicode.com/users");
  try {
    const response = await fetch(url);

    if (!response.ok) {
      // Checking if response is successful
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error.message); // Print error
  }
}
fetchData("https://jsonplaceholder.typicode.com/users"); // Should log API data
fetchData("invalid-url"); // Should log network error
//=========================================================

/* Task 9: Fix a URI Error
/*
Task: Try decoding a broken URI string.

Test cases:
task9("https%3A%2F%2Fexample.com"); // Should decode properly
task9("%"); // Should log URIError
*/

function task9(malformedURI) {
  try {
    const decodedURI = decodeURIComponent(malformedURI);
    console.log(decodedURI); // Logs the decoded URI if successful
  } catch (error) {
    if (error instanceof URIError) {
      console.log("URIError: Invalid URI");
    } else {
      console.log("Error:", error.message);
    }
  }
}

// Test cases
task9("https%3A%2F%2Fexample.com");
// Should log: "https://example.com"

task9("%");
// Should log: "URIError: Invalid URI"

//=========================================================

/* Task 10: Clear LocalStorage
/*
Task: Ensure LocalStorage is cleared safely.

Test cases:
clearStorage(); // Should log "LocalStorage cleared."
*/

// function clearStorage() {
//   localStorage.clear();
//   console.log("Local Storage Cleared");
// }
// clearStorage();
