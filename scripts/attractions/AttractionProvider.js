export const loadAttraction = () => {
    return fetch(`https://holidayroad.nss.team/bizarreries`)
    .then(response => response.json())
    
}; 
