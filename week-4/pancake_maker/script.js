const cakeType = document.getElementById("type");
const selectToppings = document.querySelectorAll(".topping");
const selectExtras = document.querySelectorAll(".extra");
const priceBanner = document.querySelector("#totalPrice");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");

let count = 0;
let extra = 0;
let selectedValue = 0;

// selected cake type value
cakeType.addEventListener("change", function () {
  selectedValue = parseFloat(cakeType.value) || 0;
  updateTotal();
});

// selected toppings
selectToppings.forEach((topping) => {
  topping.addEventListener("change", function () {
    if (topping.checked) {
      count++;
    } else {
      count--;
    }
    updateTotal();
  });
});

// selected extras
selectExtras.forEach((extraOption) => {
  extraOption.addEventListener("change", function () {
    extra = 0;
    selectExtras.forEach((extraOption) => {
      if (extraOption.checked) {
        extra += parseFloat(extraOption.value) || 0;
      }
    });
    updateTotal();
  });
});

// update total
function updateTotal() {
  const total = count + extra + selectedValue;
  console.log("Total:", total);
  priceBanner.innerText = total;
  totalPriceDisplay.innerText = total;
}
