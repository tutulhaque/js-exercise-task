/* 
Create a form with a required name and email field.
Write JavaScript to:
- Prevent form submission if either field is empty.
- Display an error message if fields are missing. 
*/
const submitBtn = document.getElementById("submitBtn");
const errorMessage = document.getElementById("errorMessage");
const checkValidation = (event) => {
  const userNameInput = document.getElementById("userName");
  const userEmailInput = document.getElementById("userEmail");
  const userName = document.getElementById("userName").value.trim();
  const userEmail = document.getElementById("userEmail").value.trim();
  event.preventDefault(); // Prevent form submission

  if (userName === "" || userEmail === "") {
    errorMessage.innerText = "Error: Username and Email are required!";
    errorMessage.style.color = "red";
  } else {
    errorMessage.innerText = "";
    alert("Successfully submitted!");
    userNameInput.value = "";
    userEmailInput.value = "";
  }
};

submitBtn.addEventListener("click", checkValidation);
