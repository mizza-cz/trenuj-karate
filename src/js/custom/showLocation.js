document.getElementById("find-me").addEventListener("click", function () {
  const status = document.getElementById("status");
  const input = document.getElementById("search-input");

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Vytvoření URL pro reverzní geokódování pomocí nějakého API (např. OpenStreetMap Nominatim)
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const addressDetails = data.address;
        // Získání konkrétních částí adresy
        const street = addressDetails.road || "";
        const houseNumber = addressDetails.house_number || "";
        const city =
          addressDetails.city ||
          addressDetails.town ||
          addressDetails.village ||
          "";

        // Kombinace těchto částí do jednoho řetězce
        const formattedAddress = `${street} ${houseNumber}, ${city}`;

        input.value = formattedAddress; // Vložení upravené adresy do inputu
        status.textContent = "Adresa byla úspěšně nalezena.";
      })
      .catch(() => {
        status.textContent = "Nepodařilo se získat adresu.";
      });
  }

  function error() {
    status.textContent = "Nelze získat polohu.";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolokace není podporována vaším prohlížečem.";
  } else {
    status.textContent = "Vyhledávání polohy…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
});
