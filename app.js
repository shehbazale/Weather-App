const cityName = document.querySelector(".city");
const cityTemp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const searchInput = document.querySelector(".input");
const humdityIcon = document.querySelector(".img-icon");

const apiKey = "195cc59b47ed3dd7f4da865df6130c6c";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function checkWeather(city) {
  const response = await fetch(`${apiURL} ${city} &appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".tooltip-container").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);
    cityName.innerHTML = `${data.name}`;
    cityTemp.innerHTML = `${Math.round(data.main.temp)}°c`;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${data.wind.speed}km/h`;
    if (data.weather[0].main === "Clouds") {
      humdityIcon.src = "./Images/cloud.png";
    } else if (data.weather[0].main === "Clear") {
      humdityIcon.src = "./Images/clear.png";
    } else if (data.weather[0].main === "Rain") {
      humdityIcon.src = "./Images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
      humdityIcon.innerHTML =
        "<i class='fa-regular fa-cloud-sun-rain' id ='weather-icon'></i>";
      humdityIcon.src = "./Images/snow.png";
    } else if (data.weather[0].main === "Haze") {
      humdityIcon.src = "./Images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".tooltip-container").style.display = "none";
  }
}

//  function to get the city from input fields
function getCity() {
  checkWeather(searchInput.value);
  searchInput.value = "";
}
