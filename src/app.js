function pushWeatherRefresh(response) {
  let currentTemp = document.querySelector("#currentTemp");
  let temperature = response.data.temperature.current;
  let cityInputElement = document.querySelector("#city-entered");
  //let descriptionElement = document.querySelector("#weather-description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-measure");

  //descriptionElement.innerHTML = response.data.conditon.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  cityInputElement.innerHTML = response.data.city;
  currentTemp.innerHTML = Math.round(temperature);
}

function citySearch(city) {
  let apiKey = "ff0ff4f302f20fbae82t7cb5bd46o49d";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(pushWeatherRefresh);
}

function handleSearchEnter(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#user-search-input");

  citySearch(searchInputElement.value);
}

let searchFormElement = document.querySelector("#form-search");
searchFormElement.addEventListener("submit", handleSearchEnter);

citySearch("Johannesburg");
