export const attraction = (attractionObject) => {
    return `
    <div>
              <option value="${attractionObject.name}"> ${attractionObject.name}</option>
          </div>
          `;
    }

export const attractionDetail = (attractionObject) => {
    let ameneties = ""
  for (const property in attractionObject.ameneties){
    ameneties += `<p>${property}: ${attractionObject.ameneties[property]}</p>`
  }
     return `
    <div>
    <aside>
    <p>Description: ${attractionObject.description}</p>
    <p>Ameneties: ${ameneties}</p>
    <p>Location: ${attractionObject.city}, ${attractionObject.state}</p>
    </aside>
    </div>
    `;
}