export const attraction = (attractionObject) => {
    return `
    <div>
            <select>
              <option value="${attractionObject.name}"> ${attractionObject.name}</option>
              
            </select>
          </div>
          `;
    }