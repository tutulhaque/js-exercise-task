/*
Create an HTML file with a <p> element and a button.
Write JavaScript to toggle the visibility of the paragraph each time the button is clicked.
 */
const toggleButton = document.getElementById("toggleButton");
const displayText = document.getElementById("displayText");
const toggleText = () => {
  if (displayText.style.display === "none") {
    displayText.style.display = "block";
  } else {
    displayText.style.display = "none";
  }
};

toggleButton.addEventListener("click", toggleText);
