import { loadEatery } from "./eateries/EateryProvider.js"
import { loadPark} from "./parks/ParkProvider.js"
import {loadWeather} from "./weather/WeatherProvider.js"
import { makeEateryList } from "./eateries/EateryList.js"
import { makeWeatherList } from "./weather/WeatherList.js"




const showEateryList = () => {
    loadEatery()
    .then(eateryArray =>{
        console.log(eateryArray)
        makeEateryList(eateryArray)
    })
}
    showEateryList();

const showParkList = () => {
    loadPark()
    .then(parkArray =>{
        console.log(parkArray.data)
        makeParkList(parkArray.data)
    })
}
const showWeatherList = () => {
    loadWeather()
    .then(weatherArray =>{
        console.log(weatherArray.list)
        makeWeatherList(weatherArray.list)
    })
}


showParkList();
showWeatherList();



//loadEatery()
//.then(data => {console.log(data)})
// loadPark()
//.then(data => {console.log(data)})
//loadWeather()
//.then(data => {console.log(data)})

