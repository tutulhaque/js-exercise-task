let teamMembers = ["John", "Emily", "Mike", "Sarah"];

// 1. Loop through the `teamMembers` array and log each name to the console.
console.log("01:");
for (let member of teamMembers) {
  console.log(member);
}

// 2. Remove the first member of the array.
teamMembers.shift();
console.log("02:", teamMembers);

// 3. Remove the last member of the array.
teamMembers.pop();
console.log("03:", teamMembers);

// 4. Add a new member "Alex" to the front of the array.
teamMembers.unshift("Alex");
console.log("04:", teamMembers);

// 5. Append a new member "Linda" to the end of the array.
teamMembers.push("Linda");
console.log("05:", teamMembers);

// 6. Create a new array that excludes the first two members, keeping the original array unchanged.
const newArray = teamMembers.slice(2);
console.log("06:", newArray);

// 7. Find the index of "Mike" in the array.
const indexMike = teamMembers.indexOf("Mike");
console.log("07:", indexMike);

// 8. Try to find the index of "Jake" (who is not in the array).
const indexJake = teamMembers.indexOf("Jake");
console.log("08:", indexJake);

// 9. Replace "Mike" with "Carol" and "Bruce" in the same position.
if (indexMike !== -1) {
  teamMembers.splice(indexMike, 1, "Carol", "Bruce");
}
console.log("09:", teamMembers);

// 10. Concatenate "Bob" to the array and create a new array, keeping the original array unchanged.
const newArrayWithBob = teamMembers.concat("Bob");
console.log("10:", newArrayWithBob);

// 11. Copy the entire `teamMembers` array using `slice` and store it in a new variable.
const copiedArray = teamMembers.slice();
console.log("11:", copiedArray);

// 12. Create a `newMembers` array with `"Tina"` and `"Dean"`, then merge it with `teamMembers` into a new array.
const newMembers = ["Tina", "Dean"];
const mergedArray = teamMembers.concat(newMembers);
console.log("12:", mergedArray);

// 13. Find all occurrences of "John" in the array and store their positions in a new array.
const johnIndexes = [];
teamMembers.forEach((member, index) => {
  if (member === "John") {
    johnIndexes.push(index);
  }
});
console.log("13:", johnIndexes);

// 14. Transform all names in the array to be uppercase while keeping the original array unchanged.
const upperCaseNames = teamMembers.map((member) => member.toUpperCase());
console.log("14:", upperCaseNames);

// 15. Sort `teamMembers` in alphabetical order.
teamMembers.sort();
console.log("15:", teamMembers);

// 16. Reverse the `teamMembers` array.
teamMembers.reverse();
console.log("16:", teamMembers);

// 17. Check if at least one member in the array is named "John".
const hasJohn = teamMembers.includes("John");
console.log("17:", hasJohn);

// 18. Check if all names in the array have more than three letters.
const allNamesMoreThanThreeLetters = teamMembers.every(
  (member) => member.length > 3
);
console.log("18:", allNamesMoreThanThreeLetters);
