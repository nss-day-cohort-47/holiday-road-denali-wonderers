let apiAttractions = [];

export const useAttractions = () => {
    return [...apiAttractions]
  }

export const loadAttraction = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
    .then(response => response.json())
    .then((attractionArray) => {
        apiAttractions = attractionArray
        return attractionArray
    })
}; 
