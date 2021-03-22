import { loadEatery, useEateries } from "./eateries/EateryProvider.js"
import { loadPark, createParkItinerary, useParks } from "./parks/ParkProvider.js"
import { loadWeather } from "./weather/WeatherProvider.js"
import { loadAttraction, useAttractions } from "./attractions/AttractionProvider.js"
import { makeParkList} from "./parks/ParkList.js"
import { makeEateryList } from "./eateries/EateryList.js"
import { makeWeatherList } from "./weather/WeatherList.js"
import {makeAttractionList} from "./attractions/AttractionList.js"
import { parkDetail } from "./parks/Park.js"
import { eateryDetail } from "./eateries/Eatery.js"
import { attractionDetail } from "./attractions/Attraction.js"
import { getItinerary, itineraryBox, itineraryList } from "./ItineraryData.js"



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
        console.log("Parks Data",parkData)
        makeParkList(parkData)
    })
}

let cityWeatherValue = ""
const showWeatherList = () => {
    loadWeather()
    // .then(weatherArray =>{
    //     console.log(weatherArray.list)
    //     makeWeatherList(weatherArray.list)
    // })
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
let parkValue = ""
let eateryValue = ""
let attractionValue = ""
// let cityWeatherValue = ""

navElement.addEventListener("change",event =>{
    if(event.target.id === "allParks") {
        parkValue = (event.target.value)
        console.log(`User wants to see the park: ${parkValue}`)
        const oneParkObject = useParks().find(singleParkObject => {
            if (parkValue === singleParkObject.fullName) {
                return singleParkObject
            } 
        })
        cityWeatherValue = oneParkObject.addresses[0].city
        console.log(cityWeatherValue)
    }
    if(event.target.id === "allEateries") {
        eateryValue = (event.target.value)
        console.log(`User wants to see the eatery: ${eateryValue}`)
        const oneEateryObject = useEateries().find(singleEateryObject => {
            if (eateryValue === singleEateryObject.businessName) {
                return singleEateryObject
            } 
        })
    }
    if(event.target.id === "allAttractions") {
        attractionValue = (event.target.value)
        console.log(`User wants to see the attraction: ${attractionValue}`)
        const oneAttractionObject = useAttractions().find(singleAttractionObject => {
            if (attractionValue === singleAttractionObject.name) {
                return singleAttractionObject
            } 
        })
    }
    // if(event.target.id === "allEateries") {
    //     eateryValue = (event.target.value)
    //     console.log(`User wants to see the eatery: ${eateryValue}`)
    //     const oneEateryObject = useEateries().find(singleEateryObject => {
    //         if (eateryValue === singleEateryObject.businessName) {
    //             return singleEateryObject
    //         } 
    //     })
    // }
})

const applicationElement = document.querySelector("body")

applicationElement.addEventListener("click", event => {
    if (event.target.id.startsWith("details1")) {
        const singleParkObject = useParks().find(oneParkObject => {
            if (parkValue === oneParkObject.fullName) {
                return oneParkObject
            } 
        })
        const parkDetailsIdElement = document.querySelector("#parkDetails")
        const parkHTMLRep = parkDetail(singleParkObject)
        parkDetailsIdElement.innerHTML = parkHTMLRep
    }
})

// Listen for a click on the eatery detail button
applicationElement.addEventListener("click", event => {
    if (event.target.id.startsWith("details2")) {
        // Find the eatery onject based on the selected value
        const singleEateryObject = useEateries().find(oneEateryObject => {
            if (eateryValue === oneEateryObject.businessName) {
                return oneEateryObject
            } 
        })
        // Find place on dom to put HTMLRep of details
        const eateryDetailsIdElement = document.querySelector("#eateryDetails")
        // Pass in eatery object into eatery detail which returns HTMLrep
        const eateryHTMLRep = eateryDetail(singleEateryObject)
        // Set inner HTML of eatery details to the HTMLRep
        eateryDetailsIdElement.innerHTML = eateryHTMLRep
    }
})

applicationElement.addEventListener("click", event => {
    if (event.target.id.startsWith("details3")) {
        const singleAttractionObject = useAttractions().find(oneAttractionObject => {
            if (attractionValue === oneAttractionObject.name) {
                return oneAttractionObject
            } 
        })
        const attractionDetailsIdElement = document.querySelector("#attractionDetails")
        const attractionHTMLRep = attractionDetail(singleAttractionObject)
        attractionDetailsIdElement.innerHTML = attractionHTMLRep
        console.log("post clicked", event.target.id)
        console.log(attractionDetail(singleAttractionObject))
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


navElement.addEventListener("click", event =>{
	if (event.target.id ==="saveItinerary") {
		event.preventDefault();
		const parkEntry = document.querySelector("select[name='parkSelector']").value
		const eateryEntry = document.querySelector("select[name='eaterySelector']").value
		const attractionEntry = document.querySelector("select[name='attractionSelector']").value
	
		
		const parkObject = {
			park: parkEntry,
			eatery: eateryEntry,
			attraction:attractionEntry
	
		}
		createParkItinerary(parkObject)
        .then(response => {
            location.reload(true);
        })
	}
})

// getItinerary()
// .then(data => {
//     console.log("Itinerary Data", data)
// })

const showItinerary = () =>{
const itineraryElement = document.querySelector(".itineraryBox");
getItinerary().then((allItineraries)=> {
itineraryElement.innerHTML = itineraryList(allItineraries); ;
})
}
showItinerary();