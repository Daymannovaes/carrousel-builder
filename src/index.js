import {log} from "./util.js";
log();

const textInput = document.getElementById("textInput");
const submitButton = document.getElementById("submitButton");
const displayText = document.getElementById("displayText");

submitButton.addEventListener("click", () => {
    const text = textInput.value;
    displayText.textContent = text;
    textInput.value = "";
});

