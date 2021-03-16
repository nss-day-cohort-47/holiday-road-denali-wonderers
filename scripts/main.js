import { loadEatery } from "./eateries/EateryProvider.js"
import { loadPark } from "./parks/ParkProvider.js"
import { loadWeather } from "./weather/WeatherProvider.js"
loadPark()
// .then(data => console.log(data))
loadEatery()
// .then(data => {
//     console.log("Eatery Data",data)
// })

loadWeather()
// .then(data => console.log(data))
