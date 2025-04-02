const pancakeForm = document.getElementById("pancakeForm");
const totalPriceDisplay = document.querySelector("#totalPrice");
const orderNowBtn = document.getElementById("orderNow");
const seeOrderBtn = document.getElementById("seeOrder");
const orderSummary = document.getElementById("summaryText");

// Function to get total price of selected items
function getTotalPrice() {
  let totalPrice = 0;

  // Get selected pancake type
  const typeSelect = document.querySelector("#type").selectedOptions[0];
  totalPrice += parseFloat(typeSelect.dataset.price);

  // Get selected toppings, extras, and delivery method
  totalPrice += getSelectedPriceSum(".topping");
  totalPrice += getSelectedPriceSum(".extra");
  totalPrice += getSelectedPriceSum(".delivery");

  return totalPrice;
}

// Function to get selected values (Ensuring no "on" values)
function getSelectedValues(selector) {
  return [...document.querySelectorAll(`${selector}:checked`)]
    .map((item) => item.parentNode.textContent.trim()) // Get label text instead of value
    .filter((value) => value !== ""); // Ensure non-empty values
}

// Function to get total price of selected items
function getSelectedPriceSum(selector) {
  return [...document.querySelectorAll(`${selector}:checked`)].reduce(
    (sum, item) => sum + parseFloat(item.dataset.price || 0),
    0
  );
}

// Function to update the total price display
function updateTotalPrice() {
  const totalPrice = getTotalPrice();
  totalPriceDisplay.textContent = `€${totalPrice.toFixed(2)}`;
}

// Event listener to update price when any input changes
pancakeForm.addEventListener("change", updateTotalPrice);

// Function to handle order
function handleOrder() {
  const customerName = document.querySelector("#customerName").value.trim();
  if (!customerName) {
    alert("Please enter your name before ordering.");
    return;
  }

  let totalPrice = 0;

  // Get selected pancake type
  const typeSelect = document.querySelector("#type").selectedOptions[0];
  const selectedPancake = typeSelect.textContent;
  totalPrice += parseFloat(typeSelect.dataset.price);

  // Get selected toppings, extras, and delivery method
  const toppings = getSelectedValues(".topping");
  const extras = getSelectedValues(".extra");
  const deliveryMethod = getSelectedValues(".delivery")[0] || "Pickup";

  // Calculate total price
  totalPrice += getSelectedPriceSum(".topping");
  totalPrice += getSelectedPriceSum(".extra");
  totalPrice += getSelectedPriceSum(".delivery");

  // Create order object
  const order = {
    orderId: Date.now(),
    customerName,
    selectedPancake,
    toppings,
    extras,
    deliveryMethod,
    totalPrice: totalPrice.toFixed(2),
    status: "waiting",
  };

  console.log("Order Placed:", order);

  // Save order to localStorage
  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  // Display total price
  totalPriceDisplay.textContent = `€${totalPrice.toFixed(2)}`;

  alert("Your order has been placed successfully! ✅");
  pancakeForm.reset();
  totalPriceDisplay.textContent = "€5.00";
}

// Function to display the current order details (before placing an order)
function displayCurrentOrder() {
  const customerName = document.querySelector("#customerName").value.trim();
  if (!customerName) {
    alert("Please enter your name to see the order details.");
    return;
  }

  // Get selected pancake type
  const typeSelect = document.querySelector("#type").selectedOptions[0];
  const selectedPancake = typeSelect.textContent;

  // Get selected toppings, extras, and delivery method
  const toppings = getSelectedValues(".topping").join(", ") || "None";
  const extras = getSelectedValues(".extra").join(", ") || "None";
  const deliveryMethod = getSelectedValues(".delivery")[0] || "Pickup";

  // Get total price
  const totalPrice = (
    parseFloat(typeSelect.dataset.price || 0) +
    getSelectedPriceSum(".topping") +
    getSelectedPriceSum(".extra") +
    getSelectedPriceSum(".delivery")
  ).toFixed(2);

  // Display order details
  orderSummary.innerHTML = `
    <p><strong>Name:</strong> ${customerName}</p>
    <p><strong>Pancake:</strong> ${selectedPancake}</p>
    <p><strong>Toppings:</strong> ${toppings}</p>
    <p><strong>Extras:</strong> ${extras}</p>
    <p><strong>Delivery:</strong> ${deliveryMethod}</p>
    <p><strong>Total Price:</strong> €${totalPrice}</p>
  `;
}

// Event listeners
orderNowBtn.addEventListener("click", handleOrder);
seeOrderBtn.addEventListener("click", displayCurrentOrder);

// Initialize the total price on page load
updateTotalPrice();
