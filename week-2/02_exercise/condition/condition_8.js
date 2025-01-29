/*
Write a function named canVote:
Take an age as a parameter.
Return true if the age is 18 or older, otherwise false.
Print "Eligible to vote" or "Not eligible to vote" based on the result of the function. 
*/
const canVote = (age) =>
  age >= 18 ? "Eligible to vote" : "Not eligible to vote";
console.log(canVote(17));
