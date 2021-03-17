import { loadEatery } from "./eateries/EateryProvider.js"
import { loadPark} from "./parks/ParkProvider.js"
import {loadWeather} from "./weather/WeatherProvider.js"
import { makeParkList} from "./parks/ParkList.js"
import { makeEateryList } from "./eateries/EateryList.js"
import { makeWeatherList } from "./weather/WeatherList.js"



const showEateryList = () => {
    loadEatery()
    .then(eateryArray =>{
        console.log("Eatery Array", eateryArray)

        makeEateryList(eateryArray)
    })
}
    showEateryList();

const showParkList = () => {
    loadPark()
    .then(parkData =>{
        // console.log("Parks Data",parkData.data)
        makeParkList(parkData.data)
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

/////-----Event Listeners------////////


const navElement = document.querySelector("body");

navElement.addEventListener("change",event =>{
    if(event.target.id === "allParks") {
        const parkValue = (event.target.value)
        console.log(`User wants to see the park: ${parkValue}`)
    }
})