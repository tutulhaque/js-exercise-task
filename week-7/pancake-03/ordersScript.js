// Function to load and display all orders
function loadOrders() {
  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  // Apply filtering if search or status filter is active
  const searchQuery = document.getElementById("searchBar").value.toLowerCase();
  const selectedStatus = document.getElementById("statusFilter").value;

  // Filter orders based on search and status
  orders = orders.filter((order) => {
    const matchesSearch =
      order.customerName.toLowerCase().includes(searchQuery) ||
      searchQuery === "";
    const matchesStatus =
      selectedStatus === "" || order.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  // Sort orders: "waiting" first, then "ready", then "delivered"
  orders.sort((a, b) => {
    const statusOrder = { waiting: 1, ready: 2, delivered: 3 };
    return statusOrder[a.status] - statusOrder[b.status];
  });

  const ordersTableBody = document.getElementById("ordersTableBody");
  ordersTableBody.innerHTML = "";

  // Display each order in the table
  orders.forEach((order) => {
    const row = document.createElement("tr");
    row.dataset.orderId = order.orderId;

    row.innerHTML = `
        <td>${order.orderId}</td>
        <td>${order.customerName}</td>
        <td>${order.selectedPancake}</td>
        <td>${order.toppings.join(", ") || "None"}</td>
        <td>${order.extras.join(", ") || "None"}</td>
        <td>${order.deliveryMethod}</td>
        <td>
          <select class="status-dropdown" data-order-id="${order.orderId}">
            <option value="waiting" ${
              order.status === "waiting" ? "selected" : ""
            }>Waiting</option>
            <option value="ready" ${
              order.status === "ready" ? "selected" : ""
            }>Ready</option>
            <option value="delivered" ${
              order.status === "delivered" ? "selected" : ""
            }>Delivered</option>
          </select>
        </td>
        <td>€${order.totalPrice}</td>
        <td><button class="remove-btn" data-order-id="${
          order.orderId
        }">Remove</button></td>
      `;

    applyStatusStyles(row, order.status);
    ordersTableBody.appendChild(row);
  });

  addEventListeners();
}

// Function to apply styles based on status
function applyStatusStyles(row, status) {
  switch (status) {
    case "waiting":
      row.style.backgroundColor = "#fff3cd";
      break;
    case "ready":
      row.style.backgroundColor = "#cce5ff";
      break;
    case "delivered":
      row.style.backgroundColor = "#d4edda";
      break;
    default:
      row.style.backgroundColor = "white";
  }
}

// Function to update order status
function updateOrderStatus(event) {
  const orderId = event.target.dataset.orderId;
  const newStatus = event.target.value;
  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  orders = orders.map((order) => {
    if (order.orderId == orderId) {
      order.status = newStatus;
    }
    return order;
  });

  localStorage.setItem("orders", JSON.stringify(orders));
  loadOrders(); // Reload to apply changes
}

// Function to remove delivered orders
// Function to remove orders
function removeOrder(event) {
  const orderId = event.target.dataset.orderId;
  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  // Find the order with the matching orderId
  const order = orders.find((order) => order.orderId == orderId);

  // Only remove if the order status is "delivered"
  if (order.status === "delivered") {
    orders = orders.filter((order) => order.orderId != orderId);
    localStorage.setItem("orders", JSON.stringify(orders));
    loadOrders();
  } else {
    alert("Only delivered items can be deleted");
  }
}

// Add event listeners to status dropdowns and remove buttons
function addEventListeners() {
  document.querySelectorAll(".status-dropdown").forEach((dropdown) => {
    dropdown.addEventListener("change", updateOrderStatus);
  });

  document.querySelectorAll(".remove-btn").forEach((button) => {
    button.addEventListener("click", removeOrder);
  });
}

// Function to handle search input
document.getElementById("searchBar").addEventListener("input", loadOrders);

// Function to handle status filter change
document.getElementById("statusFilter").addEventListener("change", loadOrders);

// Load orders on page load
loadOrders();
