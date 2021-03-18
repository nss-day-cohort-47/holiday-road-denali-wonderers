export const park = (parkObject) => {
  // console.log(parkObject.fullName)
  return `
  <div>
  <option value="${parkObject.fullName}"> ${parkObject.fullName}</option>
  </div>
      `;
}

export const parkDetail = (parkObject) => {
  return `
  <div>
  <aside>
  <p>${parkObject.addresses}</p>
  <p>${parkObject.contacts}</p>
  <p>${parkObject.activities}</p>
  <p>${parkObject.operatingHours}</p>
  </aside>
  </div>
  `;
}


