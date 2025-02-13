const calculateAverageUntilZero = () => {
  let sum = 0;
  let count = 0;
  let number;

  do {
    number = Number(window.prompt("Enter a number (or 0 to stop):"));
    if (number !== 0) {
      sum += number;
      count++;
    }
  } while (number !== 0);

  if (count > 0) {
    const average = sum / count;
    console.log(`The average of the entered numbers is: ${average}`);
  } else {
    console.log("No numbers were entered.");
  }
};

calculateAverageUntilZero();
