const pancakeType = document.querySelector("#type");
const toppings = document.querySelectorAll(".topping");
const extras = document.querySelectorAll(".extra");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
const totalPriceBanner = document.querySelector("#totalPrice");
const panCakeForm = document.querySelector("#pancakeForm");

const changeAnything = (click) => {
  // select the pancake type
  const basePrice =
    document.getElementById("type").selectedOptions[0].dataset.price;
  console.log(basePrice);
  // select topping
  const toppings = document.querySelectorAll(".topping:checked");
  let ToppingTotal = 0;
  for (let topping of toppings) {
    ToppingTotal += parseFloat(topping.dataset.price);
  }
  console.log(ToppingTotal);

  // Extra
  const extras = document.querySelectorAll(".extra:checked");
  let extraTotal = 0;
  for (let extra of extras) {
    extraTotal += parseFloat(extra.dataset.price);
  }
  console.log(extraTotal);

  // Delivery Method;
  const deliveryMethod = document.querySelector(".delivery:checked");
  console.log(deliveryMethod.dataset.price);
};
panCakeForm.addEventListener("change", changeAnything);
