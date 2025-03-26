const pancakeForm = document.getElementById("pancakeForm");

function handleOrder() {
  // Customer Value
  const customerName = document.querySelector("#customerName");
  console.log(customerName.value);

  // Total Price
  let totalPrice = 0;

  // Pancake type
  const type = document.querySelector("#type").selectedOptions[0].dataset.price;
  totalPrice += parseFloat(type);

  // // Pancake Toppings Selection
  // document.querySelectorAll(".topping:checked").forEach((topping) => {
  //   totalPrice += parseFloat(topping.dataset.price);
  // });

  // // Pancake Extras Selection
  // document.querySelectorAll(".extra:checked").forEach((item) => {
  //   totalPrice += parseFloat(item.dataset.price);
  // });

  // // Pancake Delivery Selection
  // document.querySelectorAll(".delivery:checked").forEach((item) => {
  //   totalPrice += parseFloat(item.dataset.price);
  // });

  // Function to add selected item prices
  function addSelectedPrices(selector) {
    document.querySelectorAll(`${selector}:checked`).forEach((item) => {
      totalPrice += parseFloat(item.dataset.price);
    });
  }

  // Add prices for selected toppings, extras, and delivery options
  addSelectedPrices(".topping");
  addSelectedPrices(".extra");
  addSelectedPrices(".delivery");

  console.log(totalPrice);
}

pancakeForm.addEventListener("change", handleOrder);
