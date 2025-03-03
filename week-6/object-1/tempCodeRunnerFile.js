// Your code here
const students = [
  {
    name: "John",
    age: 23,
    grade: 95,
  },
  {
    name: "Jobs",
    age: 22,
    grade: 99,
  },
  {
    name: "Mark",
    age: 21,
    grade: 88,
  },
];
let found = false;
for (let student of students) {
  if (student.grade > 90) {
    console.log(student.name);
    found = true;
  }
}
if (!found) {
  console.log("No students with a grade higher than 90.");
}
/* Task 7
Create an array named `students`, where each student has a `name`, `age`, and `grade`.
Log the name of any student who has a grade higher than 90.
*/
