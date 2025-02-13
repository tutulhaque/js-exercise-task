/* 
Write a function named createWordPyramid:
- Take a word (e.g., "code") as input.
- Use a loop to build a pyramid pattern:
    Example for "code":
    c
    co
    cod
    code
 */

// const createWordPyramid = () => {
//   let inputWord = prompt("Enter your word to build pyramid");
//   for (let i = 1; i <= inputWord.length; i++) {
//     console.log(inputWord.substring(0, i));
//   }
// };
// createWordPyramid();

const createWordPyramid = () => {
  let inputWord = prompt("Enter your word to build pyramid");
  let pyramidString = "";

  for (let i = 0; i < inputWord.length; i++) {
    pyramidString += inputWord[i];
    console.log(pyramidString);
  }
};

createWordPyramid();
