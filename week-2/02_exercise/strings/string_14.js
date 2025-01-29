/* Create a variable description and assign it the value " JavaScript is Fun and powerful! ".
Perform the following:
Trim the extra spaces using .trim().
Convert the string to lowercase.
Check if it includes the word "fun".
Replace "powerful" with "amazing".
Print the final string and whether it includes "fun" using console.log().
Example output:
"Final description: javascript is fun and amazing!"
"Does it include 'fun'? true"
 */
let description = " JavaScript is Fun and powerful! ";
let trimDescription = description.trim(" ");
console.log(trimDescription);
let lowerCaseDescription = description.toLowerCase();
console.log(lowerCaseDescription);
let findFunFromDescription = description.includes("powerful");
console.log("is Fun available in description? " + findFunFromDescription);
let replacePowerfulWithPowerful = description.replace("powerful", "amazing");
console.log(replacePowerfulWithPowerful);
