export const weather = (weatherObject) => { 
  console.log(weatherObject)
    return `
  <div>
          <aside>
            <h3>${weatherObject.main.grnd_level}</h3>
            <h4>${weatherObject.main.temp}</h4>
            <p>${weatherObject.main.feels_like}</p>
            <p>${weatherObject.main.temp_max}</p>
            
          </aside>
        </div>
        `;
  }
  
  