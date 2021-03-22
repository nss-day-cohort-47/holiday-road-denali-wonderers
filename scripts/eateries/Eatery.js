export const eatery = (eateryObject) => {
  return `
  <div>
            <option value="${eateryObject.businessName}"> ${eateryObject.businessName}</option>           
        </div>
        `;
}

export const eateryDetail = (eateryObject) => {
  let ameneties = ""
  for (const property in eateryObject.ameneties){
    ameneties += `<p>${property}: ${eateryObject.ameneties[property]}</p>`
  }
  return `
  <div>
  <aside>
  <p>${eateryObject.description}</p>
  <p>${ameneties}</p>
  <p>${eateryObject.state}</p>
  <p>${eateryObject.city}</p>
  </aside>
  </div>
  `;
}