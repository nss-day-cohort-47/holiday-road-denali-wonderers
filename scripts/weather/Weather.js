
export const weather = (weatherObject) => {
  console.log(weatherObject)
return `
  <div>
          <aside>
            <h3>Main Temp: ${weatherObject.main.temp}</h3>
            <h4>What if feels like: ${weatherObject.main.feels_like}</h4>
            <p>Min Temp: ${weatherObject.main.temp_min}</p>
            <p>Max Temp: ${weatherObject.main.temp_max}</p>
            </aside>

        </div>
        `;
}

