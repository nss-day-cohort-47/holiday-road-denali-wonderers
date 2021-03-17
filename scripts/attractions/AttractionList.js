import { attraction } from "./Attraction.js"

export const makeAttractionList = (attractionArray) => {
  attractionList(attractionArray)
};

const attractionList = (allAttractions) =>{
  const attractionElement = document.querySelector(".allAttractions");
  let HTMLArray = allAttractions.map(oneAttraction => {
    // console.log(oneAttraction)
        return attraction(oneAttraction);
    })
    // console.log(HTMLArray)
    attractionElement.innerHTML += HTMLArray.join("");
}