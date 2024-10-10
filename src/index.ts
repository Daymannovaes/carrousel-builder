import './style.css';
import { getConfiguration, initializeColorPicker } from './settings';

initializeColorPicker({
    fontColorButton: document.getElementById("fontColorButton") as HTMLElement,
    fontColorInput: document.getElementById("fontColor") as HTMLInputElement,
    fontColorPreview: document.getElementById("fontColorPreview") as HTMLElement,
    backgroundColorButton: document.getElementById("backgroundColorButton") as HTMLElement,
    backgroundColorInput: document.getElementById("backgroundColor") as HTMLInputElement,
    backgroundColorPreview: document.getElementById("backgroundColorPreview") as HTMLElement
});

const textInput = document.getElementById("textInput")! as HTMLInputElement;
const submitButton = document.getElementById("submitButton")!;
const displayText = document.getElementById("displayText")!;
const charCounter = document.getElementById("charCounter")!;
const errorMessage = document.getElementById("errorMessage")!;

const splitText = (text: string) => {
    const words = text.split(" ");
    const resultingText = [];
    let currentText = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 300) {
            (errorMessage as HTMLElement).textContent = "Erro: A palavra '" + words[i] + "' tem mais de 300 caracteres."
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

const createListItem = (item: string, { fontColor, backgroundColor }: { fontColor: string, backgroundColor: string }) => {
    const listItem = document.createElement("li");
    listItem.classList.add("carousel-item");
    listItem.textContent = item;

    listItem.style.color = fontColor;
    listItem.style.backgroundColor = backgroundColor;

    return listItem;
};

const createListItems = (items: string[], { fontColor, backgroundColor }: { fontColor: string, backgroundColor: string }) => {
    displayText.innerHTML = '';
    const ul = document.createElement("ul");
    ul.classList.add("carousel");

    items.forEach(item => {
        const listItem = createListItem(item, { fontColor, backgroundColor });
        ul.appendChild(listItem);
    });

    displayText.appendChild(ul);
};

submitButton.addEventListener("click", () => {
    const text = textInput.value;
    errorMessage.textContent = "";

    const splitItems = splitText(text);

    if (splitItems) {
        const { fontColor, backgroundColor } = getConfiguration();
        createListItems(splitItems, { fontColor, backgroundColor });
    }

    return;
});

textInput.addEventListener("input", () => {
    charCounter.textContent = `Characters: ${textInput.value.length}`;
});