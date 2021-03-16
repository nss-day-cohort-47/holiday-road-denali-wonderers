const render = (parkData) => {
    const parkDisplay = document.querySelector("#allparks");
 
    let HTMLArray = parkData.map(onePark => {
      return //?LegoDetail?(onePark);
    })
    //Since HTMLArray is an array, we can use join to make it a string
    parkDisplay.innerHTML = HTMLArray.join("");
}