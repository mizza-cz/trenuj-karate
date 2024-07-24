$(document).ready(function () {
  function addFields(maxField, addButton, wrapper, fieldHTML) {
    let x = 1;
    $(addButton).click(function () {
      if (x < maxField) {
        x++;
        $(wrapper).append(fieldHTML);
      } else {
        this.addButton.remove();
      }
    });

    $(wrapper).on("click", ".remove_button", function (e) {
      e.preventDefault();
      $(this).parent("div").remove();
      x--;
    });
  }

  addFields(
    3,
    "#socialButton",
    ".registration__club",
    '<div class="registration__item"><input name="additionalSocial" type="text" class="registration__input" placeholder="Дополнительная социальная сеть" /></div>'
  );

  addFields(
    2,
    "#clubButton",
    ".registration__training",
    '<div class="registration__item"><input name="trainingPlace" type="text" placeholder="Místo tréninků" class="registration__input" /><label for="trainingPlace2" class="registration__label">Místo tréninků</label></div><div class="registration__item"><input name="trainingTime" type="text" placeholder="Časy tréninků" class="registration__input" /><label for="trainingTime2" class="registration__label">Časy tréninků</label></div>  <ul class="registration__check"><li class=""><label class="label--checkbox"><input name="youth" type="checkbox" class="registration__checkbox"/>Mládež</label></li><li class=""><label class="label--checkbox"><input name="adults" type="checkbox" class="registration__checkbox"/>Dospělí</label></li><li class=""><label class="label--checkbox"><input name="seniors" type="checkbox" class="registration__checkbox"/>Senioři</label></li></ul>'
  );

  addFields(
    2,
    "#contactsButton",
    ".registration__contacts",
    '<div class="registration__item"><input name="name" type="text" placeholder="Jméno" class="registration__input" /><label for="name2" class="registration__label">Jméno</label></div><div class="registration__item"><input name="surname" type="text" placeholder="Příjmení" class="registration__input" /><label for="surname2" class="registration__label">Příjmení</label></div><div class="registration__item"><input name="position" type="text" placeholder="position" class="registration__input" /><label for="postition2" class="registration__label">position</label></div><div class="registration__item registration__item--small"><input name="tel" type="tel" placeholder="Telefonní číslo" class="registration__input" /><label for="telephon2" class="registration__label">Telefonní číslo</label></div><div class="registration__item registration__item--small"><input name="mail" type="email" placeholder="Email" class="registration__input" /><label for="mail2" class="registration__label">Email</label></div>'
  );

  let inputs = document.querySelectorAll("input");
  let buttonSend = document.getElementById("button-send");

  let inputValidator = {
    team: false,
    address: false,
    ico: false,
    name: false,
    surname: false,
    mail: false,
    tel: false,
    position: false,
    agreement: false,
    trainingPlace: false,
    trainingTime: false,
  };

  inputs.forEach((input) => {
    input.addEventListener("input", (event) => {
      let name = input.getAttribute("name");
      if (input.type === "checkbox") {
        inputValidator[name] = input.checked;
      } else {
        inputValidator[name] = input.value.length > 0;
      }

      let allTrue = Object.values(inputValidator).every(
        (value) => value === true
      );

      buttonSend.disabled = !allTrue;
    });
  });
});
