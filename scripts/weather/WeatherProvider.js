import { settings } from "../Settings.js"
export const loadWeather = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Nashville&appid=${settings.weatherKey}`)
        .then(response => response.json())
}
