import Picker from 'vanilla-picker';
import 'vanilla-picker/dist/vanilla-picker.csp.css';

const fontColorInput = document.getElementById("fontColor") as HTMLInputElement;
const backgroundColorInput = document.getElementById("backgroundColor") as HTMLInputElement;

export const initializeColorPicker = ({
    fontColorButton,
    fontColorInput,
    fontColorPreview,
    backgroundColorButton,
    backgroundColorInput,
    backgroundColorPreview
}: {
    fontColorButton: HTMLElement,
    fontColorInput: HTMLInputElement,
    fontColorPreview: HTMLElement,
    backgroundColorButton: HTMLElement,
    backgroundColorInput: HTMLInputElement,
    backgroundColorPreview: HTMLElement
}) => {
    new Picker({
        parent: fontColorButton,
        popup: 'right',
        color: '#000',
        onChange: (color) => {
            fontColorInput.value = color.hex;
            fontColorPreview.style.backgroundColor = color.hex;
        }
    });

    new Picker({
        parent: backgroundColorButton,
        popup: 'right',
        color: '#f0f0f0',
        onChange: (color) => {
            backgroundColorInput.value = color.hex;
            backgroundColorPreview.style.backgroundColor = color.hex;
        }
    });
}

export const getConfiguration = () => {
    return {
        fontColor: fontColorInput!.value || "#000",
        backgroundColor: backgroundColorInput!.value || "#f0f0f0"
    };
};
