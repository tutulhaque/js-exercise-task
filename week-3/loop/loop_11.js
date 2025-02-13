/* 

Write a function named generateMultiplicationTable:
- Take a number (e.g., 5) as input.
- Use a loop to generate the multiplication table for that number.
Log the table in the console.

Example for 5:

5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
 */
const generateMultiplicationTable = () => {
  let number = parseFloat(prompt("please input a number"));
  for (let i = 1; i <= 10; i++) {
    let multiplication = number * i;
    console.log(`multiplication of ${number} x ${i} = ${multiplication}`);
  }
};
generateMultiplicationTable();
