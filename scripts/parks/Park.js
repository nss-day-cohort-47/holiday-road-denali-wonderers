



export const park = (parkObject) => {
  // console.log(parkObject.fullName)
  return `
  <div>
  <option value="${parkObject.fullName}"> ${parkObject.fullName}</option>
  </div>
      `;
}


