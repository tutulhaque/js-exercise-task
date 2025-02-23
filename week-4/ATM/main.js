const inputDeposit = document.getElementById("deposit");
const inputWithdraw = document.getElementById("withdraw");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const balance = document.getElementById("balance");
const errorMessage = document.getElementById("error");

let balanceTotal = 0;
const addMoney = () => {
  const depositAmount = [];
  let depositValue = parseFloat(inputDeposit.value);
  depositAmount.push(depositValue);
  for (let amount of depositAmount) {
    balanceTotal += amount;
  }
  balance.innerText = balanceTotal;
  inputDeposit.value = "";
};
const withdrawMoney = () => {
  let withdrawValue = parseFloat(inputWithdraw.value);
  if (balanceTotal > withdrawValue) {
    balanceTotal = balanceTotal - withdrawValue;
    balance.innerText = balanceTotal;
    inputWithdraw.value = "";
  } else {
    errorMessage.innerText = "Error: Not enough balance";
  }
};

depositBtn.addEventListener("click", addMoney);
withdrawBtn.addEventListener("click", withdrawMoney);
