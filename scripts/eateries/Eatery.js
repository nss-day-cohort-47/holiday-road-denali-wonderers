export const eatery = (eateryObject) => {
  return `
  <div>
            <option value="${eateryObject.businessName}"> ${eateryObject.businessName}</option>           
        </div>
        `;
}
