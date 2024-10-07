import Picker from 'vanilla-picker/csp';
import 'vanilla-picker/dist/vanilla-picker.csp.css';

const fontColorInput = document.getElementById("fontColor");
const backgroundColorInput = document.getElementById("backgroundColor");
const colorPickerButton = document.getElementById("color-picker-button");

const fontColorPicker = new Picker({
    parent: fontColorInput,
    popup: 'left',
    color: '#000',
    onChange: (color) => {
        fontColorInput.value = color.hex;
    }
});

const backgroundColorPicker = new Picker({
    parent: backgroundColorInput,
    popup: 'left',
    color: '#f0f0f0',
    onChange: (color) => {
        backgroundColorInput.value = color.hex;
    }
});

const buttonPicker = new Picker({
    parent: colorPickerButton,
    popup: 'right',
    color: '#00f',
    onChange: (color) => {
        // Apply the selected color to the button background
        colorPickerButton.style.backgroundColor = color.rgbaString;
    }
});

export const getConfiguration = () => {
    return {
        fontColor: fontColorInput.value || "#000",
        backgroundColor: backgroundColorInput.value || "#f0f0f0"
    };
};