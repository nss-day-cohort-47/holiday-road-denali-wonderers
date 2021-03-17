import { weather } from "./Weather.js"

export const makeWeatherList = (weatherArray) => {
  weatherList(weatherArray)
};

const weatherList = (allWeather) =>{
  const weatherElement = document.querySelector(".allWeather");
    let HTMLArray = allWeather.map(oneWeather => {
        return weather(oneWeather);
    })
    weatherElement.innerHTML = HTMLArray.join("");
}

