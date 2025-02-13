/* 
Write a function named logOddNumbers:
- Use a loop to output all odd, positive numbers less than 100, starting from 1.
Example output in the console: 1, 3, 5, 7, ..., 99. 
*/
const logOddNumbers = () => {
  for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
      console.log("odd number is", i);
    }
  }
};
logOddNumbers();
