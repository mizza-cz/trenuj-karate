function geoFindMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

  // Check if mapLink exists
  if (!mapLink) {
    return; // If map-link element does not exist, exit function
  }

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = "Nelze načíst vaši polohu";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolokace není vaším prohlížečem podporován";
  } else {
    status.textContent = "Vyhledávání…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

// Check if the #find-me element exists
const findMeButton = document.querySelector("#find-me");
if (findMeButton) {
  findMeButton.addEventListener("click", geoFindMe);
}
