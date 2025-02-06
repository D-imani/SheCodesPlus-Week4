function displayCurrentDateTime() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();
  const dayName = days[now.getDay()];
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  const dateTimeString = `${dayName} ${hours}:${minutes}`;
  const currentDetailsElement = document.querySelector(".current-details");

  currentDetailsElement.innerHTML = `${dateTimeString}, moderate rain <br /> Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>`;
}

function handleCitySearch(event) {
  event.preventDefault();
  const cityInput = document.querySelector(".search-input").value.trim();

  if (cityInput) {
    const cityElement = document.querySelector(".current-city");
    cityElement.textContent = cityInput;
  }
}

function setupSearchForm() {
  const searchForm = document.querySelector("form");
  searchForm.addEventListener("submit", handleCitySearch);
}

function initializeApp() {
  displayCurrentDateTime();
  setupSearchForm();
}

initializeApp();
