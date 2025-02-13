/* 
Write a function named sumAndAverage:
- Ask the user to input ten numbers.
- Calculate and log:
    - The sum of the numbers.
    - The average of the numbers.
    - The smallest and largest numbers.
Display all results in the console.
*/

let sumAndAverage = () => {
  let sum = 0;
  let count = 0;
  let numberList = [];
  for (let i = 1; i <= 10; i++) {
    let number = parseFloat(prompt("number ="));
    numberList.push(number);
    sum += number;
    count += 1;
  }
  console.log(numberList);
  let averageNumber = sum / count;
  let sortList = numberList.sort((a, b) => a - b);
  console.log(sum, averageNumber);
  console.log(sortList);
};
sumAndAverage();
