import { loadEatery } from "./eateries/EateryProvider.js"
import { loadPark, createParkItinerary} from "./parks/ParkProvider.js"
import {loadWeather} from "./weather/WeatherProvider.js"
import {loadAttraction} from "./attractions/AttractionProvider.js"
import { makeParkList} from "./parks/ParkList.js"
import { makeEateryList } from "./eateries/EateryList.js"
import { makeWeatherList } from "./weather/WeatherList.js"
import {makeAttractionList} from "./attractions/AttractionList.js"


const showEateryList = () => {
    loadEatery()
    .then(eateryArray =>{
        console.log("Eatery Array", eateryArray)

        makeEateryList(eateryArray)
    })
}

const showAttractionList = () => {
    loadAttraction()
    .then(attractionArray =>{
        console.log("Attraction Data",attractionArray)
        makeAttractionList(attractionArray)
    })
}

const showParkList = () => {
    loadPark()
    .then(parkData =>{
        console.log("Parks Data",parkData.data)
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


showEateryList();
showParkList();
showWeatherList();
showAttractionList();


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



//
//const dropdownElement = document.querySelector("body");

//dropdownElement.addEventListener("click", (event) => {
	//console.log('sugar is the devil');
	
	//if (event.target.id.startsWith("edit")) {
		//console.log("post clicked", event.target.id.split("--"));
		//console.log("zero index value", event.target.id.split("--")[0]);
		//console.log("one index value, the id is", event.target.id.split("--")[1]);
	//}
//})

//making parks click dropdown show up lower on page
var changedText = document.getElementById('changed');
function listQ(){
    changedText.textContent = this.value;
}
document.getElementById("allParks").onchange = listQ;


//making eateries click dropdown show up lower on page
var eatchangedText = document.getElementById('eatchanged');
function listR(){
    eatchangedText.textContent = this.value;
}
document.getElementById("allEateries").onchange = listR;

//making bizarrrrrr click dropdown show up lower on page
var attractionchangedText = document.getElementById('attractionchanged');
function listS(){
    attractionchangedText.textContent = this.value;
}
document.getElementById("allAttractions").onchange = listS;

