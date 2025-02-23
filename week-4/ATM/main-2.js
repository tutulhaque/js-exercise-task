const correctUserName = "admin";
const correctPassword = "admin";
const inputDeposit = document.getElementById("deposit");
const inputWithdraw = document.getElementById("withdraw");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const balance = document.getElementById("balance");
const errorMessage = document.getElementById("error");

let balanceTotal = 0;
const checkCredentials = () => {
  const userName = prompt("Enter your username:");
  const password = prompt("Enter your password:");

  if (userName === correctUserName && password === correctPassword) {
    alert("Login successful! You can now deposit and withdraw money.");
    isAuthenticated = true;
  } else {
    alert("Invalid credentials! Please try again.");
    authenticateUser();
  }
};

const addMoney = () => {
  if (!isAuthenticated) {
    alert("Please log in first!");
    return;
  }
  let depositValue = parseFloat(inputDeposit.value);

  if (isNaN(depositValue) || depositValue <= 0) {
    errorMessage.innerText = "Error: Please enter a valid deposit amount";
    return;
  }

  balanceTotal += depositValue;
  balance.innerText = balanceTotal.toFixed(2);
  inputDeposit.value = "";
  errorMessage.innerText = "";
};

const withdrawMoney = () => {
  if (!isAuthenticated) {
    alert("Please log in first!");
    return;
  }
  let withdrawValue = parseFloat(inputWithdraw.value);

  if (isNaN(withdrawValue) || withdrawValue <= 0) {
    errorMessage.innerText = "Error: Please enter a valid withdrawal amount";
    return;
  }

  if (balanceTotal >= withdrawValue) {
    balanceTotal -= withdrawValue;
    balance.innerText = balanceTotal.toFixed(2);
    inputWithdraw.value = "";
    errorMessage.innerText = "";
  } else {
    errorMessage.innerText = "Error: Not enough balance";
  }
};
checkCredentials();
depositBtn.addEventListener("click", addMoney);
withdrawBtn.addEventListener("click", withdrawMoney);
