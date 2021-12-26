const API_KEY = "f8836a18e23bb6495cce9761bf09cca8";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.getElementById("weather");
      const temp = document.getElementById("temp");
      const region = document.getElementById("region");
      temp.innerText = `${data.main.temp}℃`;
      region.innerText = data.name;
      if (data.weather[0].id === 800) {
        weather.innerText = "☀️";
      } else if (data.weather[0].id >= 200 && data.weather[0].id < 300) {
        weather.innerText = "🌩️";
      } else if (data.weather[0].id >= 300 && data.weather[0].id < 400) {
        weather.innerText = "🌧️";
      } else if (data.weather[0].id >= 500 && data.weather[0].id < 600) {
        weather.innerText = "☔";
      } else if (data.weather[0].id >= 600 && data.weather[0].id < 700) {
        weather.innerText = "❄️";
      } else if (data.weather[0].id >= 600 && data.weather[0].id < 700) {
        weather.innerText = "🌫️";
      } else {
        weather.innerText = "☁️";
      }
    })
  );
}

function onGeoError() {
  alert("Can't find you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
