const colorInput = document.getElementById("colorInput");
const colorBtn = document.getElementById("colorBtn");
const colorText = document.getElementById("colorText");

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const changeBackground = () => {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;

  if (randomColor === "#ffffff" || randomColor === "#fff") {
    colorText.style.color = "#000000";
  } else {
    colorText.style.color = "#ffffff";
  }
};

const changeTextColor = () => {
  const userColor = colorInput.value.trim();
  if (userColor) {
    colorText.style.color = userColor;
  }
};

colorBtn.addEventListener("click", changeBackground);
colorInput.addEventListener("input", changeTextColor);
