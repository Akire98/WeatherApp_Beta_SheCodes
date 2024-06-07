function handleSearchEnter(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#user-search-input");
  let cityInputElement = document.querySelector("#city-entered");
  cityInputElement.innerHTML = searchInputElement.value;
}

let searchFormElement = document.querySelector("#form-search");
searchFormElement.addEventListener("submit", handleSearchEnter);
