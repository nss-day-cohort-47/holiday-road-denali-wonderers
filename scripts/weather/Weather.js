export const weather = (weatherObject) => {
  console.log(weatherObject.clouds)
  return `
  <div>  
  <h3>${weatherObject.list} </h3>
            <h4>${weatherObject.clouds}</h4>
            <p>${weatherObject.main}</p>
            <p>${weatherObject.weather}</p>
        </div>
        `;
}

