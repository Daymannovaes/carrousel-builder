import './style.css';
import { getConfiguration, initializeColorPicker } from './settings';
import { splitText } from '../src/utils/split-text';
import { CarouselSlide } from './carousel-slide';

customElements.define("carousel-slide", CarouselSlide);

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

const createListItem = (item: string, { fontColor, backgroundColor }: { fontColor: string, backgroundColor: string }) => {
    const listItem = document.createElement("carousel-slide");
    listItem.setAttribute('backgroundColor', backgroundColor);
    listItem.setAttribute('fontColor', fontColor);

    listItem.textContent = item;

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

