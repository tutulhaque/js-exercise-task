/* 
Write a function named askToContinue:
- Prompt the user to enter a number.
- Then, ask: "Do you want to continue giving numbers? (y/n)".
- If the user answers "y", ask for another number.
- If the user answers "n", stop asking and log the average of all entered numbers in the console. 
*/
// const askToContinue = () => {
//   let sum = 0;
//   let count = 0;
//   let number = window.prompt("Please input a number: ");
//   let ask = window.prompt("Do you want to continue giving numbers? (y/n)");
//   if (ask === "y") {
//     while (true) {
//       if (count > 0) {
//         let sum = 0;
//         let count = 0;
//         let number2 = window.prompt("Please enter the number: ");
//         number2++;
//         sum = sum + number2;
//         count = count++;
//         console.log(sum, count);
//       }
//     }
//   } else if (ask === "n") {
//     console.log("You not not interested in Math");
//   }
// };
// askToContinue();

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
    // Prompt the user to enter a number
    let numberInput = prompt("Please input a number:");

    // Check if the input is a valid number
    if (numberInput === null || isNaN(numberInput)) {
      console.log("Invalid input. Please enter a valid number.");
      continue; // Skip to the next iteration if input is invalid
    }

    // Add the number to the sum and increment the count
    sum += parseFloat(numberInput);
    count++;

    // Ask if the user wants to continue
    let continueInput = prompt("Do you want to continue giving numbers? (y/n)");

    // Exit the loop if the user says 'n'
    if (continueInput === "n") {
      break;
    } else if (continueInput !== "y") {
      console.log(
        "Invalid input. Please enter 'y' to continue or 'n' to stop."
      );
    }
  }

  // Calculate and log the average
  if (count > 0) {
    let average = sum / count;
    console.log(`Average of all entered numbers: ${average}`);
  } else {
    console.log("No valid numbers were entered.");
  }
};

askToContinue();
