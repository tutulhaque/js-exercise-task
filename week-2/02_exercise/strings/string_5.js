/* Declare a variable word and assign it the value "JavaScript".
Use bracket notation to access:
The first character of the string.
The last character of the string.
Print messages like:
"The first character is J."
"The last character is t." */
let word = "JavaScript";
let firstWord = word.charAt([0]);
let lastWord = word.charAt(word.length - 1);
console.log(
  `The first character is ${firstWord}.\nand The last character is ${lastWord}.`
);
