export const loadEatery = () => {
  return fetch("http://holidayroad.nss.team/eateries")
    .then(response => response.json())
}
