export const getConfiguration = () => {
    const fontColorInput = document.getElementById("fontColor");
    const backgroundColorInput = document.getElementById("backgroundColor");

    return {
        fontColor: fontColorInput.value || "#000",
        backgroundColor: backgroundColorInput.value || "#f0f0f0"
    };
};