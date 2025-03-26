const pancakeForm = document.getElementById("pancakeForm");
const orderNowBtn = document.getElementById("orderNow");
const totalPriceDisplay = document.querySelector("#totalPriceDisplay");

// Function to get selected values
function getSelectedValues(selector) {
  return [...document.querySelectorAll(`${selector}:checked`)].map(
    (item) => item.value
  );
}

// Function to get total price of selected items
function getSelectedPriceSum(selector) {
  return [...document.querySelectorAll(`${selector}:checked`)].reduce(
    (sum, item) => sum + parseFloat(item.dataset.price),
    0
  );
}

// Function to handle order
function handleOrder() {
  // Get customer name
  const customerName = document.querySelector("#customerName").value;
  if (!customerName) {
    alert("Please enter your name before ordering.");
    return;
  }

  let totalPrice = 0;

  // Get selected pancake type
  const typeSelect = document.querySelector("#type").selectedOptions[0];
  const selectedPancake = typeSelect.textContent; // Pancake name (e.g., "Chocolate - 6€")
  totalPrice += parseFloat(typeSelect.dataset.price);

  // Get selected toppings, extras, and delivery method
  const toppings = getSelectedValues(".topping");
  const extras = getSelectedValues(".extra");
  const deliveryMethod = getSelectedValues(".delivery")[0] || "Pickup"; // Default: Pickup

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

  // Retrieve existing orders from localStorage
  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  // Add new order to the array
  orders.push(order);

  // Save updated orders to localStorage
  localStorage.setItem("orders", JSON.stringify(orders));

  // Display total price in UI
  totalPriceDisplay.textContent = `Total: €${totalPrice.toFixed(2)}`;

  alert("Your order has been placed successfully! ✅");
}

// Event listener for "Order Now" button
orderNowBtn.addEventListener("click", handleOrder);
