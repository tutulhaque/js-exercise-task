/* 
Write a function named findMinMax:
- Ask the user how many numbers they want to input.
- Then prompt them to enter that many numbers.
- Once all numbers are entered, determine and log:
- The smallest number.
- The largest number.
Display the results in the console. 
*/
const findMinMax = () => {
  let howManyNumbers = parseInt(prompt("how many numbers?"));
  let numList = [];

  for (let i = 1; i <= howManyNumbers; i++) {
    let number = parseFloat(prompt("input number"));
    numList.push(number);
  }
  let smallest = Math.min(...numList);
  let biggest = Math.max(...numList);
  console.log(smallest, biggest);
};
findMinMax();
