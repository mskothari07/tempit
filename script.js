const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "72cfd7d599mshb04e2a84e31c534p18ce84jsnb4dfeed84b6d",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

// Weather Logic for mein Search
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      //   cloud_pct.innerHTML = response.cloud_pct; compromised
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Pune");

// Logic for Other Cites Delhi Part

const DelhiTemp = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pctDelhi.innerHTML = response.cloud_pct;
      tempOther.innerHTML = response.temp;
      feels_likeOther.innerHTML = response.feels_like;
      humidityOther.innerHTML = response.humidity;
      min_tempOther.innerHTML = response.min_temp;
      max_tempOther.innerHTML = response.max_temp;
      wind_speedOther.innerHTML = response.wind_speed;
      wind_degreesOther.innerHTML = response.wind_degrees;
      sunriseOther.innerHTML = response.sunrise;
      sunsetOther.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};
DelhiTemp("Delhi");

// Logic for mumbai Weather

const MumbaiTemp = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pctMum.innerHTML = response.cloud_pct;
      tempMum.innerHTML = response.temp;
      feels_likeMum.innerHTML = response.feels_like;
      humidityMum.innerHTML = response.humidity;
      min_tempMum.innerHTML = response.min_temp;
      max_tempMum.innerHTML = response.max_temp;
      wind_speedMum.innerHTML = response.wind_speed;
      wind_degreesMum.innerHTML = response.wind_degrees;
      sunriseMum.innerHTML = response.sunrise;
      sunsetMum.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};
MumbaiTemp("Mumbai");

// Logic for NY
const NYTemp = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pctNY.innerHTML = response.cloud_pct;
      tempNY.innerHTML = response.temp;
      feels_likeNY.innerHTML = response.feels_like;
      humidityNY.innerHTML = response.humidity;
      min_tempNY.innerHTML = response.min_temp;
      max_tempNY.innerHTML = response.max_temp;
      wind_speedNY.innerHTML = response.wind_speed;
      wind_degreesNY.innerHTML = response.wind_degrees;
      sunriseNY.innerHTML = response.sunrise;
      sunsetNY.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};
NYTemp("new york");

// Logic for NY
const CFTemp = (city) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pctCF.innerHTML = response.cloud_pct;
      tempCF.innerHTML = response.temp;
      feels_likeCF.innerHTML = response.feels_like;
      humidityCF.innerHTML = response.humidity;
      min_tempCF.innerHTML = response.min_temp;
      max_tempCF.innerHTML = response.max_temp;
      wind_speedCF.innerHTML = response.wind_speed;
      wind_degreesCF.innerHTML = response.wind_degrees;
      sunriseCF.innerHTML = response.sunrise;
      sunsetCF.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};
CFTemp("California");
