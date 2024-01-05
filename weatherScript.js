const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Gainesville&appid=ff35dd61212963f306587fa16b5151a9&units=imperial";

async function checkWeather() {
  const response = await fetch(apiUrl);
  var data = await response.json();
  console.log(data);

  document.querySelector(".temperature").innerHTML = data.main.temp;
  document.querySelector(".humidity").innerHTML = data.main.humidity;
  document.querySelector(".wind-speed").innerHTML = data.wind.speed;
}

checkWeather();
