export const eatery = (eateryObject) => {
  return `
  <div>
            <option value="${eateryObject.businessName}"> ${eateryObject.businessName}</option>           
        </div>
        `;
}

export const eateryDetail = (eateryObject) => {
  return `
  <div>
  <aside>
  <p>${eateryObject.description}</p>
  <p>${eateryObject.ameneties}</p>
  <p>${eateryObject.state}</p>
  <p>${eateryObject.city}</p>
  </aside>
  </div>
  `;
}
