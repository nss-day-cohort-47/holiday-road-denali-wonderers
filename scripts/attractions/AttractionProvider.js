export const loadAttraction = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
    .then(response => response.json())
    
}; 
