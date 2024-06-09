function pushWeatherRefresh(response) {
  let currentTemp = document.querySelector("#currentTemp");
  let temperature = response.data.temperature.current;
  currentTemp.innerHTML = Math.round(temperature);
  let cityInputElement = document.querySelector("#city-entered");
  cityInputElement.innerHTML = response.data.city;
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
