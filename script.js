const inputFile = document.querySelector("#picture__input");
const pictureImage = document.querySelector(".picture__image");
const pictureImageTxt = "Choose an image";
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
  }
});
document.addEventListener('DOMContentLoaded', function () {
    const rollDiceButton = document.getElementById('rollDiceButton');
    const diceResultSpan = document.getElementById('diceResultSpan');
    const characterForm = document.getElementById('characterForm');
    const characterSheet = document.getElementById('characterSheet');
    const characterDetails = document.getElementById('characterDetails');

    function rollDice() {
        const diceQuantity = parseInt(document.getElementById('diceQuantity').value);
        const diceSides = parseInt(document.getElementById('diceSides').value);
        let totalRoll = 0;
        let individualRolls = [];

        for (let i = 0; i < diceQuantity; i++) {
            const diceRoll = Math.floor(Math.random() * diceSides) + 1;
            individualRolls.push(diceRoll);
            totalRoll += diceRoll;
        }

        diceResultSpan.textContent = `${totalRoll} (${individualRolls.join(', ')})`;
    }

    rollDiceButton.addEventListener('click', rollDice);

    function displayCharacterSheet() {
        const formData = new FormData(characterForm);
        const characterSheetContent = `
            <!-- ... (código anterior) ... -->
        `;

        characterSheet.style.display = 'block';
        characterDetails.innerHTML = characterSheetContent;

characterForm.addEventListener('submit', function (event) {
    event.preventDefault();

        // Verificar se todos os campos obrigatórios estão preenchidos
        const requiredFields = ['name', 'characterClass', 'region', 'faith'];
        let formIsValid = true;

        requiredFields.forEach(field => {
            const input = document.getElementById(field);
            if (input.value.trim() === '') {
                formIsValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        if (formIsValid) {
            displayCharacterSheet();
        } else {
            characterSheet.style.display = 'none';
            characterDetails.innerHTML = '<p class="error-message">Preencha todos os campos obrigatórios.</p>';
        }
    });
});