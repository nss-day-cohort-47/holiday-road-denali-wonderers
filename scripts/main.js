import { loadWeather } from "./weather/WeatherProvider.js"

loadWeather()
.then(data => {
    console.log(data)
})
