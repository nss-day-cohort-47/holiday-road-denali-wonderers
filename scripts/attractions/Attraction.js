export const attraction = (attractionObject) => {
    return `
    <div>
              <option value="${attractionObject.name}"> ${attractionObject.name}</option>
          </div>
          `;
    }