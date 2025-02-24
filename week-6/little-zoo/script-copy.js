const animals = [];

document.getElementById("addAnimal").addEventListener("click", function () {
  const newAnimalName = document.getElementById("newAnimalName").value;
  const animalList = document.getElementById("animalList");

  if (newAnimalName !== "") {
    animals.push(newAnimalName);
    const createNewElement = document.createElement("li");
    createNewElement.textContent = newAnimalName;
    animalList.appendChild(createNewElement);
    document.getElementById("newAnimalName").value = "";
  } else {
    alert("Please enter an animal name.");
  }
  console.log(animals);
});
