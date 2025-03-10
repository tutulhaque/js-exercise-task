const weatherDisplay = document.getElementById("weatherDisplay");
// const apiKey = "c7d704633f98b2f48803ed1d7192753a";
// const city = "Helsinki";
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     weatherDisplay.innerHTML = `City: ${data.name}<br> Temperature: ${Math.ceil(
//       data.main.temp
//     )}°C <br>Weather: ${data.weather[0].description}`;
//   })
//   .catch((error) => console.error("Error fetching weather data:", error));