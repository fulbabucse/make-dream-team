// Selected Button
function selectedBtn(selectedItem) {
    const selectedButton = selectedItem.parentNode.children[0].children[0].innerText;

    const playersNumber = getTextValue("player-number");
    const playerNumber = playersNumber + 1;

    const selectedPlayerList = document.getElementById("selected-players-list");
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${playerNumber}</td>
    <td>${selectedButton}</td>`;

    if (playerNumber > 5) {
        alert("You can no longer add players!!")
        return;
    } else if (playersNumber > 5) {
        return;
    }

    setElement("player-number", playerNumber);

    selectedPlayerList.appendChild(tr);

    const disableButton = selectedItem;
    disableButton.disabled = true;
    disableButton.style.backgroundColor = "#000";
    disableButton.style.color = "#fff";
    disableButton.style.border = "1px solid #fff";


}

// get input value for Per-Player-Price
function getPlayerPrice() {
    const perPlayerPriecElement = document.getElementById("per-player-price");
    const perPlayerPriceString = perPlayerPriecElement.value;
    const perPlayerPrice = parseInt(perPlayerPriceString);
    perPlayerPriecElement.value = "";
    return perPlayerPrice;
}

// calculate button
document.getElementById("calculate-btn").addEventListener("click", function () {
    const perPlayerPrice = getPlayerPrice();
    if (isNaN(perPlayerPrice)) {
        alert("Please provide a valid input!!")
        return;
    } else if (perPlayerPrice < 0) {
        alert("Please enter a positive number or that is greater than 0!!")
        return;
    }

    const playersTotalExpences = document.getElementById("player-total-expences");
    const selectedPlayers = getTextValue("player-number");

    const totalPlayersAmount = perPlayerPrice * selectedPlayers;
    playersTotalExpences.innerText = totalPlayersAmount;
})

// calculate total Amount
document.getElementById("calculate-total-btn").addEventListener("click", function () {
    const managerInput = getInputValue("manager-price");
    const coachInput = getInputValue("Coach-price");
    const previousTotalAmount = getTextValue("player-total-expences");

    if (isNaN(managerInput && coachInput && previousTotalAmount)) {
        alert("Please provide a valid input!!")
        return;
    } else if (managerInput < 0 || coachInput < 0) {
        alert("Please enter a positive number or that is greater than 0!!")
        return;
    }

    const totalAmount = managerInput + coachInput + previousTotalAmount;
    setElement("total-expences", totalAmount);
})