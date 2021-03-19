
export const getItinerary = () => {

    return fetch("http://localhost:8088/itineraries")
        .then(response => response.json())
}

export const itineraryBox = (itineraryObject) => {
    return `
    <div class="itineraryPost"> 
    <ul> Itinerary:
     ${itineraryObject.id}
    <li>${itineraryObject.park}</li>
    <li>${itineraryObject.eatery} </li>
    <li>${itineraryObject.attraction} </li>
    </ul>
    </div>
    `
}

 export const itineraryList = (allItineraries) => {
    let intineraryHTML = "";
    for ( const itineraryObject of allItineraries){
        intineraryHTML += itineraryBox(itineraryObject)
    }
    return intineraryHTML
}