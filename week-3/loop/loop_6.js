/* 
Write a function named askToContinue:
- Prompt the user to enter a number.
- Then, ask: "Do you want to continue giving numbers? (y/n)".
- If the user answers "y", ask for another number.
- If the user answers "n", stop asking and log the average of all entered numbers in the console. 
*/
const askToContinue = () => {
  let sum = 0;
  let count = 0;

  while (true) {
    let number = parseFloat(window.prompt("Please enter a number"));
    if (number) {
      sum = sum + number;
      count++;
    }

    let ask = window.prompt("Do you want to continue giving numbers? (y/n)?");
    if (ask !== "y") {
      if (count > 0) {
        console.log(`The average of entered numbers is: ${sum / count}`);
      } else {
        console.log("No valid numbers were entered.");
      }
      break;
    }
  }
};
askToContinue();
