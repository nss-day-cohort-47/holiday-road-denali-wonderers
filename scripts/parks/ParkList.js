

import { park } from "./Park.js"

export const makeParkList = (parkArray) => {
  parkList(parkArray)
};

const parkList = (allParks) =>{
  const parkElement = document.querySelector(".allParks");
  let HTMLArray = allParks.map(onePark => {
    // console.log(onePark)
        return park(onePark);
    })
    // console.log(HTMLArray)
    parkElement.innerHTML += HTMLArray.join("");
}

