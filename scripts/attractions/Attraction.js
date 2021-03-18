export const attraction = (attractionObject) => {
    return `
    <div>
              <option value="${attractionObject.name}"> ${attractionObject.name}</option>
          </div>
          `;
    }

export const attractionDetail = (attractionObject) => {
     return `
    <div>
    <aside>
    <p>${attractionObject.description}</p>
    <p>${attractionObject.ameneties}</p>
    <p>${attractionObject.state}</p>
    <p>${attractionObject.city}</p>
    </aside>
    </div>
    `;
}