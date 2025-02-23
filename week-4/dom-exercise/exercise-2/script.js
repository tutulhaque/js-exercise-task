/*
Use an HTML file with an <input> field, a <button>, and a <ul> list with the ID fruitList.
Write JavaScript to:
- Retrieve the value from the input field when the button is clicked.
- Create a new <li> element and set its text content to the input field's value.
- Append the <li> element to the list.
- Clear the input field after adding the fruit.
*/

const inputfield = document.getElementById("inputField");
const btnInput = document.getElementById("btnInput");
const fruitList = document.getElementById("fruitList");
const addFruit = () => {
  let inputValue = inputfield.value;
  const newListElement = document.createElement("li");
  const newList = (newListElement.innerText = inputValue);
  if (inputValue === "") {
    console.log("nothing to show");
    return false;
  }
  fruitList.append(newListElement);
  inputfield.value = "";
};
btnInput.addEventListener("click", addFruit);
