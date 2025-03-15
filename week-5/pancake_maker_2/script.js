document.addEventListener("DOMContentLoaded", () => {
  const pancakeForm = document.getElementById("pancakeForm");
  const totalPriceDisplay = document.getElementById("totalPriceDisplay");
  const totalPriceBanner = document.getElementById("totalPrice");
  const customerNameInput = document.getElementById("customerName");
  const seeOrderButton = document.getElementById("seeOrder");
  const orderSummary = document.getElementById("orderSummary");
  const summaryText = document.getElementById("summaryText");

  const toppings = document.querySelectorAll(".topping");
  const extras = document.querySelectorAll(".extra");
  const deliveryOptions = document.querySelectorAll(".delivery");
  const pancakeType = document.getElementById("type");

  let selectedToppings = [];
  let selectedExtras = [];

  const calculateTotal = () => {
    let totalPrice = parseFloat(pancakeType.value);

    selectedToppings.forEach((topping) => (totalPrice += 1));

    // Add extras prices
    selectedExtras.forEach(
      (extra) => (totalPrice += parseFloat(extra.dataset.price))
    );

    // Add delivery price according to selection
    const selectedDelivery = Array.from(deliveryOptions).find(
      (option) => option.checked
    );
    if (selectedDelivery) {
      totalPrice += parseFloat(selectedDelivery.dataset.price);
    }

    // Show the total price
    totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}€`;
    totalPriceBanner.textContent = `${totalPrice.toFixed(2)}€`;
  };

  // Show the order summary
  const displayOrderSummary = () => {
    const customerName = customerNameInput.value;
    const selectedPancake =
      pancakeType.options[pancakeType.selectedIndex].textContent;

    // Get checked toppings and extras
    const selectedToppingsList =
      selectedToppings
        .map((topping) => topping.parentElement.textContent.trim())
        .join(", ") || "None";
    const selectedExtrasList =
      selectedExtras
        .map((extra) => extra.parentElement.textContent.trim())
        .join(", ") || "None";

    // Get checked delivery method
    const selectedDelivery = Array.from(deliveryOptions)
      .find((option) => option.checked)
      .parentElement.textContent.trim();

    // Get total price from display
    const totalPrice = totalPriceDisplay.textContent;

    // Show the order summary
    summaryText.innerHTML = `
      <p><strong>Customer Name:</strong> ${customerName}</p>
      <p><strong>Pancake Type:</strong> ${selectedPancake}</p>
      <p><strong>Toppings:</strong> ${selectedToppingsList}</p>
      <p><strong>Extras:</strong> ${selectedExtrasList}</p>
      <p><strong>Delivery Method:</strong> ${selectedDelivery}</p>
      <p><strong>Total Price:</strong> ${totalPrice}</p>
    `;
    orderSummary.style.display = "block"; // Show the summary
  };

  // Single event listener for the whole form
  pancakeForm.addEventListener("change", (event) => {
    const target = event.target;

    // If topping is checked/unchecked, update the selected toppings array
    if (target.classList.contains("topping")) {
      if (target.checked) {
        selectedToppings.push(target);
      } else {
        selectedToppings = selectedToppings.filter(
          (topping) => topping !== target
        );
      }
    }

    // If extra is checked/unchecked, update the selected extras array
    if (target.classList.contains("extra")) {
      if (target.checked) {
        selectedExtras.push(target);
      } else {
        selectedExtras = selectedExtras.filter((extra) => extra !== target);
      }
    }

    // total price after any change
    calculateTotal();
  });

  // When "See Order" button is clicked, show the order summary
  seeOrderButton.addEventListener("click", displayOrderSummary);
});
