const archInner = document.querySelector(".searchResult__list");

if (archInner) {
  const archProducts = document.querySelectorAll(".searchResult__item");
  const archBtn = document.querySelector(".buttonMore");
  let archCount = 4;

  function showProd() {
    archProducts.forEach((product, index) => {
      if (index < archCount) {
        product.classList.add("visible");
      }
    });

    if (archCount >= archProducts.length) {
      archBtn.style.display = "none";
    }
  }

  archBtn.addEventListener("click", function () {
    archCount += 2;
    showProd();
  });

  showProd();
}

let closeBtn = document.querySelector(".homeSearch__close");
let searchInput = document.getElementById("searchInput");

if (searchInput && closeBtn) {
  closeBtn.addEventListener("click", function (event) {
    event.preventDefault();
    searchInput.value = "";
  });
}
