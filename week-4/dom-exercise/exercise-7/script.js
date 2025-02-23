/* 
Create an HTML file with a button and a counter display.
Write JavaScript to count and display the number of times the button is clicked. 
*/
const countPlus = document.getElementById("countPlus");
const countMinus = document.getElementById("countMinus");
const displayCount = document.getElementById("displayCount");

let countNumber = 0;
const count = (event) => {
  if (event.target.id === "countPlus") {
    countNumber += 1;
    displayCount.innerText = countNumber;
    console.log("Plus clicked");
  } else {
    if (countNumber < 1) {
      return;
    } else {
      countNumber -= 1;
      displayCount.innerText = countNumber;
      console.log("Minus Clicked");
    }
  }
};

countPlus.addEventListener("click", count);
countMinus.addEventListener("click", count);
