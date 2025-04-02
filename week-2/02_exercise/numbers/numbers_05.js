/* 
1. Create a variable num and assign it the value 5.67.
2. Use the Math.round() method to round num to the nearest whole number.
3. Use the Math.floor() method to round it down to the nearest whole number.
4. Use the Math.ceil() method to round it up to the nearest whole number.
5. Print the results using console.log() with messages like: "The rounded value is 6." 
*/
let num = 5.67;
let roundValue = Math.round(num);
let floorValue = Math.floor(num);
let ceilValue = Math.ceil(num);
console.log(
  "The round value is:",
  roundValue,
  ", the floor value is:",
  floorValue,
  "and the ceil value is: ",
  ceilValue
);
