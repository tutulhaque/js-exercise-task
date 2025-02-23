/*
Create an HTML file with an <input> field and a <div> with the ID displayText.
Write JavaScript to:
- Continuously update the <div> with the input field's value as the user types.
- Use the input event for real-time updates.
// benu alania neru
*/

const input = document.getElementById("input");
const displayText = document.getElementById("displayText");
const showText = () => {
  const inputValue = input.value;
  displayText.innerText = inputValue;
};

input.addEventListener("keyup", showText);
