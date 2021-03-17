import { loadEatery } from "./eateries/EateryProvider.js"
import { loadPark} from "./parks/ParkProvider.js"
import {loadWeather} from "./weather/WeatherProvider.js"
import { makeEateryList } from "./eateries/EateryList.js"




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
showParkList();


//loadEatery()
//.then(data => {console.log(data)})
// loadPark()
//.then(data => {console.log(data)})
//loadWeather()
//.then(data => {console.log(data)})

