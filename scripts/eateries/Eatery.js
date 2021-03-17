export const eatery = (eateryObject) => {
  return `
  <div>
          <select>
            <option value="${eateryObject.businessName}"> ${eateryObject.businessName}</option>
            
          </select>
        </div>
        `;
  }
  