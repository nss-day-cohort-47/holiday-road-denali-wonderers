import {loadPark} from "./ParkProvider.js"

let location = loadPark();

export const park = `
<div>
        <select>
          <option value="${location}">${location}</option>
          
        </select>
      </div>
      `
console.log(park);
