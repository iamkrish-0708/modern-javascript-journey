const numOfDice = document.getElementById("numOfDice");
const roll = document.getElementById("ROLL");
const diceResult = document.getElementById("diceResult");
const diceImages = document.getElementById("diceImages");

const numberWords = ["one", "two", "three", "four", "five", "six"];

roll.onclick = function() {
    const values = [];
    const images = [];
    let count = Number(numOfDice.value);

    // Limit maximum dice count to 15
    if (count > 15) {
        count = 15;
        numOfDice.value = 15;
    }

    for (let i = 0; i < count; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        const word = numberWords[value - 1];
        images.push(`<img src="IMAGES/dice-six-faces-${word}.png" alt="Dice ${value}">`);
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}