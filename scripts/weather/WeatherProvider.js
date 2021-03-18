import { settings } from "../Settings.js"



// export const loadWeather = (park) => {
//     return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${park.addresses[0].city}&appid=${settings.weatherKey}`)
//     .then(response => response.json())
//     .then(parkWeather =>{
//         console.log(parkWeather)
//     }) 
// };

export const loadWeather = () => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=nashville&appid=${settings.weatherKey}`)
    .then(response => response.json())
    .then(parkWeather =>{
        console.log(parkWeather.list,"this is the park list")
        const parkCityWeather = parkWeather.list 
        const parkCityWeatherArray = []
        // parkCityWeather needs to be split up 5 times
        for (let i = 0; i < parkCityWeather.length; i++){
            // This loops over parkcityWeather Array
            if (i === 0 || i === 7 || i === 15 || i === 23 || i === 31){
                // If index position is equal to any numbers above it pushes the object to parkCityWeatherArray
                parkCityWeatherArray.push(parkCityWeather[i])
            }

        }
        console.log(parkCityWeatherArray)
    }) 
};

