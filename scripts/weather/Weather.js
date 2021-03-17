export const weather = (weatherObject) => { 
    return `
  <div>
          <select>
            <option value="${weatherObject.list}"> ${weatherObject.list}</option>
            h4>${weatherObject.clouds}</h4>
            <p>${weatherObject.main}</p>
            <p>${weatherObject.weather}</p>
            
          </select>
        </div>
        `;
  }
  
  