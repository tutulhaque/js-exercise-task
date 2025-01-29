/* 
Write a function named canEat:
Take two parameters: isHungry and hasFood.
If both are true, return "Time to eat!".
If either is false, return "You need to find food!"
Call the function with different combinations of isHungry and hasFood. 
*/

const canEat = (isHungry, hasFood) => {
  if (isHungry && hasFood) {
    return "Time to Eat";
  } else {
    return "You Need to find food";
  }
};
console.log(canEat(false, false));
