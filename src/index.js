import './style.css';

import { log } from "./util.js";
log();

const textInput = document.getElementById("textInput");
const submitButton = document.getElementById("submitButton");
const displayText = document.getElementById("displayText");
const charCounter = document.getElementById("charCounter");
const errorMessage = document.getElementById("errorMessage");

const splitText = (text) => {
    const words = text.split(" ");
    const resultingText = [];
    let currentText = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 300) {
            errorMessage.textContent = "Erro: A palavra '" + words[i] + "' tem mais de 300 caracteres."
            return;
        }

        currentText += words[i] + " ";

        if (currentText.split(" ").length > 50 || currentText.length > 300) {
            resultingText.push(currentText.trim());
            currentText = "";
        }  
    }

    if (currentText) {
        resultingText.push(currentText.trim());
    }

    return resultingText;
};

const createListItems = (items) => {
    displayText.innerHTML = '';
    const ul = document.createElement("ul");
    ul.classList.add("carousel");

    items.forEach(item => {
        const listItem = document.createElement("li");
        listItem.classList.add("carousel-item");
        listItem.textContent = item;
        ul.appendChild(listItem);
    });

    displayText.appendChild(ul);
};

submitButton.addEventListener("click", () => {
    const text = textInput.value;
    errorMessage.textContent = "";

    const splitItems = splitText(text);

    if (splitItems) {
        createListItems(splitItems);
    }

    return;
});

textInput.addEventListener("input", () => {
    charCounter.textContent = `Characters: ${textInput.value.length}`;
});