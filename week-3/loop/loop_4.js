/* 
Write a function named countEvenNumbers:
- Prompt the user to input 20 numbers one by one.
- After all numbers are entered, log how many of them were even.
Display the result in the console. 
*/
const countEvenNumbers = () => {
  let count = 0;
  for (let i = 0; i <= 3; i++) {
    numbers = window.prompt("Enter Your Number");
    if (numbers % 2 === 0) {
      count += 1;
    }
  }
  console.log(count);
};
countEvenNumbers();
