/* 
Write a function named calculateAverageSpeed:
- Continuously prompt the user to input distance (in kilometers) and time (in hours).
- After each input, calculate and log the average speed in the console.
- Stop asking for inputs when the user enters 0 for distance. 
*/

const calculateAverageSpeed = () => {
  let distance = prompt("Enter a distance in kilometers: ");
  let time = prompt("Enter a time in hours: ");
  let speed;

  while (distance > 0) {
    speed = distance / time;
    console.log("the average speed is: ", speed);
    break;
  }
};
