import Picker from 'vanilla-picker';

const fontColorInput = document.getElementById("fontColor");
const backgroundColorInput = document.getElementById("backgroundColor");

new Picker({
    parent: fontColorInput,
    popup: 'left',
    color: '#000',
    onChange: (color) => {
        fontColorInput.value = color.hex;
    }
});

new Picker({
    parent: backgroundColorInput,
    popup: 'left',
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