



export const park = (parkObject) => {
  // console.log(parkObject.fullName)
  return `
  <div>
  <select>
  <option value="${parkObject.fullName}"> ${parkObject.fullName}</option>
  
  </select>
  </div>
      `;
}


