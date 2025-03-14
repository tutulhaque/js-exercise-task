const answerDiv = document.getElementById("answer");
const errorDiv = document.getElementById("error-message");
const ballBtn = document.getElementById("ballBtn");

function magic8Ball() {
  const question = document.getElementById("question").value;
  errorDiv.textContent = "";

  if (question === "") {
    errorDiv.textContent = "Please ask a Yes or No question!";
    return;
  }

  console.log("Question asked:", question);

  // Generate a random number between 1 and 8
  const randomNumber = Math.floor(Math.random() * 8) + 1;

  // Use a switch statement to generate an answer
  let answer;
  switch (randomNumber) {
    case 1:
      answer = "Yes, definitely!";
      break;
    case 2:
      answer = "It is certain.";
      break;
    case 3:
      answer = "Reply hazy, try again.";
      break;
    case 4:
      answer = "Ask again later.";
      break;
    case 5:
      answer = "Better not tell you now.";
      break;
    case 6:
      answer = "My sources say no.";
      break;
    case 7:
      answer = "Outlook not so good.";
      break;
    case 8:
      answer = "Signs point to yes.";
      break;
    default:
      answer = "Error: Invalid response.";
  }

  answerDiv.textContent = answer;
  answerDiv.style.display = "block";
}
ballBtn.addEventListener("click", magic8Ball);
