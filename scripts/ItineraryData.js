
export const getItinerary = () => {

    return fetch("http://localhost:8088/itineraries")
        .then(response => response.json())
}

export const itineraryBox = (itineraryObject) => {
    return `
    <div class="itineraryPost"> 
    <ul>
    <li>${itineraryObject.park}</li>
    <li>${itineraryObject.eatery} </li>
    <li>${itineraryObject.attraction} </li>
    </ul>
    </div>
    `
}