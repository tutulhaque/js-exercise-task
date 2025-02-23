/*
Create an HTML file with:
- A <button> to change the background color.
- A <input> field for users to enter a color.
- A <p> element where the text color changes based on the input.

Write JavaScript to:
- Change the background color to a random color when the button is clicked.
- Update the paragraph’s text color to match the user’s input value
*/
const colorInput = document.getElementById("colorInput");
const colorBtn = document.getElementById("colorBtn");
const colorText = document.getElementById("colorText");

const changeBackground = () => {
  const colorValue = colorInput.value;
  const bgColor = (document.body.style.backgroundColor = `#${colorValue}`);
  if (bgColor === "#ffffff" || bgColor === "#fff") {
    colorText.style.color = "#000000";
  } else {
    colorText.style.color = "#ffffff";
  }
};

colorBtn.addEventListener("click", changeBackground);
