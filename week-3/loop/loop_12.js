/* 
Write a function named buildGroceryList:
- Prompt the user to input grocery items one by one.
- Stop when the user types "done".
Log the complete grocery list in the console.
 */
const buildGroceryList = () => {
  let groceryList = [];
  for (;;) {
    let inputGroceryList = prompt("Input your grocery Item:");
    if (inputGroceryList === "done") {
      break;
    }
    if (inputGroceryList) {
      groceryList.push(inputGroceryList);
    }
  }
  console.log(groceryList);
};
buildGroceryList();
