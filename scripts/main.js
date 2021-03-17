import { loadEatery } from "./eateries/EateryProvider.js"
import { loadPark} from "./parks/ParkProvider.js"
import {loadWeather} from "./weather/WeatherProvider.js"
import { makeParkList} from "./parks/ParkList.js"
import { makeEateryList } from "./eateries/EateryList.js"



const showEateryList = () => {
    loadEatery()
    .then(eateryArray =>{
        // console.log(eateryArray)
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

showParkList();
// const parkListToDOM = () => {
//     const allParks = loadPark();
//     const DOMLocation = document.querySelector(".allParks");
//     let parkHTMLRep = "";

//     for(const oneThingFromParkList of allParks){
//         parkHTMLRep += makeParkList(oneThingFromParkList)
//     }
//     DOMLocation.innerHTML += parkHTMLRep;
// }
// parkListToDOM()

// const parkListToDom = () =>{
//     document.getElementById("allParks").innerHTML = showParkList()
// }

// parkListToDom();


//loadEatery()
//.then(data => {console.log(data)})
// loadPark()
//.then(data => {console.log(data)})
//loadWeather()
//.then(data => {console.log(data)})

