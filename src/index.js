import {log} from "./util.js";
log();

const textInput = document.getElementById("textInput");
const submitButton = document.getElementById("submitButton");
const displayText = document.getElementById("displayText");

textInput.addEventListener("input", () => {
    charCounter.textContent = `Characters: ${textInput.value.length}`;
});

submitButton.addEventListener("click", () => {
    const text = textInput.value;
    displayText.innerHTML = '';

    // Split the text into words
    const words = text.split(" ");

    let currentText = "";
    let currentItem;

    for (let i = 0; i < words.length; i++) {
        currentText += words[i] + " ";

        if (currentText.split(" ").length > 50 || currentText.length > 300) {
            currentItem = document.createElement("li");
            currentItem.textContent = currentText.trim();
            displayText.appendChild(currentItem);
            currentText = ""; // Reset
        }
    }

    // Remaining text
    if (currentText) {
        currentItem = document.createElement("li");
        currentItem.textContent = currentText.trim();
        displayText.appendChild(currentItem);
    }

    textInput.value = "";
    charCounter.textContent = "Characters: 0";
});

