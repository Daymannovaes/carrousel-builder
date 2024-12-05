import { describe, it, beforeEach, expect } from "vitest";
import { vi } from "vitest";

describe("Submit button integration", () => {
    let submitButton: HTMLElement;
    let textInput: HTMLInputElement;
    let displayText: HTMLElement;
    let errorMessage: HTMLElement;

    beforeEach(async () => {
        vi.resetModules();

        document.body.innerHTML = `
            <input id="textInput" />
            <button id="submitButton">Submit</button>
            <div id="displayText"></div>
            <div id="errorMessage"></div>

            <button id="fontColorButton">Font Color</button>
            <input id="fontColor" type="hidden" />
            <div id="fontColorPreview"></div>
            
            <button id="backgroundColorButton">Background Color</button>
            <input id="backgroundColor" type="hidden" />
            <div id="backgroundColorPreview"></div>
        `;

        submitButton = document.getElementById("submitButton")!;
        textInput = document.getElementById("textInput")! as HTMLInputElement;
        displayText = document.getElementById("displayText")!;
        errorMessage = document.getElementById("errorMessage")!;

        await import("../src/index.ts");
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

    it('should generate multiple slides for text exceeding 300 words', () => {
        const longText = Array(301).fill("word").join(" ");
        textInput.value = longText;

        submitButton.click();

        expect(displayText.children.length).toBeGreaterThan(1);
        expect(errorMessage.textContent).toBe("");
        expect(displayText.children[0].textContent?.split(" ").length).toBeLessThanOrEqual(300);
        expect(displayText.children[1].textContent?.split(" ").length).toBeLessThanOrEqual(300);
    })
});