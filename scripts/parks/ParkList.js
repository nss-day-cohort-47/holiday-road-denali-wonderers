

import { park } from "./Park.js"

export const makeParkList = (parkArray) => {
  parkList(parkArray)
};

const parkList = (allParks) =>{
  const parkElement = document.querySelector(".allParks");
    let HTMLArray = allParks.map(onePark => {
        return park(onePark);
    })
    parkElement.innerHTML = HTMLArray.join("");
}

