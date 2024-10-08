import Picker from 'vanilla-picker/csp';
import 'vanilla-picker/dist/vanilla-picker.csp.css';

const fontColorInput = document.getElementById("fontColor");
const backgroundColorInput = document.getElementById("backgroundColor");
const fontColorButton = document.getElementById("fontColorButton");
const backgroundColorButton = document.getElementById("backgroundColorButton");

const fontColorPicker = new Picker({
    parent: fontColorButton,
    popup: 'right',
    color: '#000',
    onChange: (color) => {
        fontColorInput.value = color.hex;
    }
});

const backgroundColorPicker = new Picker({
    parent: backgroundColorButton,
    popup: 'right',
    color: '#f0f0f0',
    onChange: (color) => {
        backgroundColorInput.value = color.hex;
    }
});

export const getConfiguration = () => {
    return {
        fontColor: fontColorInput.value || "#000",
        backgroundColor: backgroundColorInput.value || "#f0f0f0"
    };
};
