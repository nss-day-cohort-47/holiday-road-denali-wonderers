import { loadEatery } from "./eateries/EateryProvider.js"
import { loadPark} from "./parks/ParkProvider.js"
import {loadWeather} from "./weather/WeatherProvider.js"
import { makeParkList } from "./parks/ParkList.js"

const showParkList = () => {
    loadPark()
    .then(parkArray =>{
        makeParkList(parkArray)
    })
}
    showParkList();

//loadEatery()
//.then(data => {console.log(data)})
// loadPark()
//.then(data => {console.log(data)})
//loadWeather()
//.then(data => {console.log(data)})
