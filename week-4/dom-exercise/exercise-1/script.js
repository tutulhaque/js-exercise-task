/* 
Use an HTML file with a <p> element that has the ID content.
Write JavaScript to select this element using getElementById.
Create a function that changes its text to "Hello, World!" when a button is clicked.
*/

const content = document.getElementById("content");

const changeText = () => {
  content.innerText = "Hello, World!";
};
content.addEventListener("click", changeText);
