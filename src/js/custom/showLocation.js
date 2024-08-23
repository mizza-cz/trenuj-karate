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
        const address = data.display_name; // Adresa z API
        input.value = address; // Vložení adresy do inputu
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
