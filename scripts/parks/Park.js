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
  <p>Address: ${parkObject.addresses[0].city}, ${parkObject.addresses[0].stateCode}, ${parkObject.addresses[0].postalCode}</p>
  <p>Contact Info: ${parkObject.contacts.phoneNumbers[0].phoneNumber}</p>
  <p>Activities: ${parkObject.activities[0].name}, ${parkObject.activities[1].name}, ${parkObject.activities[4].name}</p>
  <p>Hours: 
  Mon-Sun: ${parkObject.operatingHours[0].standardHours.wednesday}</p>
  </aside>
  </div>
  `;
}


