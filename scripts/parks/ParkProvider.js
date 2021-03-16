
import { settings } from "../Settings.js"

export const loadPark = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${settings.npsKey}`)
    .then(response => response.json())
    
};

