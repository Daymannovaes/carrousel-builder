import { describe, it, beforeEach, expect } from "vitest";

describe("Submit button integration", () => {
    let submitButton: HTMLElement;
    let textInput: HTMLInputElement;
    let displayText: HTMLElement;
    let errorMessage: HTMLElement;

    beforeEach(() => {
        document.body.innerHTML = `
            <input id="textInput" />
            <button id="submitButton">Submit</button>
            <div id="displayText"></div>
            <div id="errorMessage"></div>
        `;

        submitButton = document.getElementById("submitButton")!;
        textInput = document.getElementById("textInput")! as HTMLInputElement;
        displayText = document.getElementById("displayText")!;
        errorMessage = document.getElementById("errorMessage")!;

        import("../src/index.ts");
    });

    it("should handle empty input correctly when submit button is clicked", () => {
        //Arrange - start with empty input
        textInput.value = "";
        const initialDisplayContent = displayText.innerHTML;

        //Act - click submit button
        submitButton.click();

        //Assert - verify integrated behavior
        expect(errorMessage.textContent).toBe("Please enter some text.");
        expect(displayText.innerHTML).toBe(initialDisplayContent);
    });

    it("should process valid input correctly  when submit button is clicked", () => {
        textInput.value = "Test text.";

        submitButton.click();

        expect(errorMessage.textContent).toBe("");
        expect(displayText.innerHTML).not.toBe("");
        expect(displayText.children.length).toBeGreaterThan(0);
    });

    it("should clear previous error message when input is valid", () => {
        //First submit with empty input to create error message
        textInput.value = "";
        submitButton.click();
        expect(errorMessage.textContent).toBe("Please enter some text.");

        textInput.value = "Test text.";
        submitButton.click();

        expect(errorMessage.textContent).toBe("");
        expect(displayText.innerHTML).not.toBe("");
    });
});