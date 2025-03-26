const pancakeForm = document.getElementById("pancakeForm");
// const customerName = document.querySelector("#customerName");
// const totalPriceDisplay = document.querySelector("#totalPriceDisplay");
// const seeOrder = document.querySelector("#seeOrder");
// const summaryText = document.querySelector("#summaryText");

// function handleOrder() {
//   let totalPrice = 0;
//   let allItems = [];

//   console.log("Customer Name:", customerName.value);

//   // Get pancake type price
//   const type = document.querySelector("#type").selectedOptions[0].dataset.price;
//   totalPrice += parseFloat(type);
//   allItems.push(`Pancake Type: €${type}`);

//   // Get selected toppings
//   document.querySelectorAll(".topping:checked").forEach((topping) => {
//     console.log("Topping Price:", topping.dataset.price);
//     totalPrice += parseFloat(topping.dataset.price);
//     allItems.push(`Topping: €${topping.dataset.price}`);
//   });

//   // Get selected extras
//   document.querySelectorAll(".extra:checked").forEach((extra) => {
//     console.log("Extra Price:", extra.dataset.price);
//     totalPrice += parseFloat(extra.dataset.price);
//     allItems.push(`Extra: €${extra.dataset.price}`);
//   });

//   // Get selected delivery option
//   document.querySelectorAll(".delivery:checked").forEach((delivery) => {
//     console.log("Delivery Price:", delivery.dataset.price);
//     totalPrice += parseFloat(delivery.dataset.price);
//     allItems.push(`Delivery: €${delivery.dataset.price}`);
//   });

//   console.log("All Items:", allItems);
//   console.log("Total Price:", totalPrice);

//   // Update
//   totalPriceDisplay.textContent = `Total: €${totalPrice.toFixed(2)}`;
//   summaryText.textContent = allItems.join(", ");
// }

// pancakeForm.addEventListener("change", handleOrder);