const animals = [];

document.getElementById("addAnimal").addEventListener("click", function () {
  const newAnimalName = document.getElementById("newAnimalName").value.trim();
  if (newAnimalName !== "") {
    animals.push(newAnimalName);
    document.getElementById("newAnimalName").value = "";
    displayAnimals(animals);
  } else {
    alert("Please enter an animal name.");
  }
  console.log(animals);
});

document.getElementById("sortAnimals").addEventListener("click", function () {
  const searchAnimal = document
    .getElementById("searchAnimal")
    .value.trim()
    .toLowerCase();

  if (searchAnimal !== "") {
    const filteredAnimals = animals.filter((animal) =>
      animal.toLowerCase().includes(searchAnimal)
    );
    displayAnimals(filteredAnimals);
  } else {
    displayAnimals(animals);
  }
});

function displayAnimals(filteredAnimals) {
  const animalList = document.getElementById("animalList");
  animalList.innerHTML = "";
  for (let animal of filteredAnimals) {
    const createNewElement = document.createElement("li");
    createNewElement.textContent = animal;
    animalList.appendChild(createNewElement);
  }
}
