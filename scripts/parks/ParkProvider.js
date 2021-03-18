
import { settings } from "../Settings.js"

let apiParks = [];

export const useParks = () => {
  return [...apiParks]
}

export const loadPark = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${settings.npsKey}`)
    .then(response => response.json())
    .then((parkArray) => {
        apiParks = parkArray.data
        return parkArray.data
    })
}; 

export const createParkItinerary = parkObj =>{
    return fetch('http://localhost:8088/itineraries',{
        method :"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(parkObj)
    })
    .then(response => response.json())
  }