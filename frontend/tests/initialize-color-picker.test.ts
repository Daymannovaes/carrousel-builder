import { describe, it, expect, beforeEach } from 'vitest';
import { initializeColorPicker } from '../src/settings';
import Picker from 'vanilla-picker';
import { vi } from 'vitest';

vi.mock('vanilla-picker'); // Mock the Picker library

describe('initializeColorPicker', () => {
    function createTestElements() {
        return {
            fontColorButton: document.createElement('button'),
            fontColorInput: document.createElement('input'),
            fontColorPreview: document.createElement('div'),
            backgroundColorButton: document.createElement('button'),
            backgroundColorInput: document.createElement('input'),
            backgroundColorPreview: document.createElement('div')
        };
    }

    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('Successful initialization', () => {
        it('should properly initialize both color pickers with default settings', () => {
            const elements = createTestElements();

            initializeColorPicker(elements);

            expect(Picker).toHaveBeenCalledTimes(2);
            expect(Picker).toHaveBeenCalledWith({
                parent: elements.fontColorButton,
                popup: 'right',
                color: elements.fontColorInput.value || '#000',
                onChange: expect.any(Function)
            });

            expect(Picker).toHaveBeenCalledWith({
                parent: elements.backgroundColorButton,
                popup: 'right',
                color: elements.backgroundColorInput.value || '#f0f0f0',
                onChange: expect.any(Function)
            });
        });

        it('should use custom initial colors when input values are provided', () => {
            const elements = createTestElements();
            elements.fontColorInput.value = '#ff0000';
            elements.backgroundColorInput.value = '#00ff00';

            initializeColorPicker(elements);

            expect(Picker).toHaveBeenCalledWith(
                expect.objectContaining({
                    color: '#ff0000'
                })
            );
            expect(Picker).toHaveBeenCalledWith(
                expect.objectContaining({
                    color: '#00ff00'
                })
            );
        });
    });

    describe('Error handling', () => {
        it('should handle missing font color elements gracefully', () => {
            const elements = createTestElements();
            const incompleteElements = {
                ...elements,
                fontColorButton: null as unknown as HTMLElement,
                fontColorInput: null as unknown as HTMLInputElement,
                fontColorPreview: null as unknown as HTMLElement
            };

            expect(() => initializeColorPicker(incompleteElements)).not.toThrow();
            expect(Picker).toHaveBeenCalledTimes(1);

            expect(Picker).toHaveBeenCalledWith(
                expect.objectContaining({
                    parent: elements.fontColorButton
                })
            );
        });

        it('should handle elements missing without crashing', () => {
            const nullElements = {
                fontColorButton: null as unknown as HTMLElement,
                fontColorInput: null as unknown as HTMLInputElement,
                fontColorPreview: null as unknown as HTMLElement,
                backgroundColorButton: null as unknown as HTMLElement,
                backgroundColorInput: null as unknown as HTMLInputElement,
                backgroundColorPreview: null as unknown as HTMLElement
            };

            expect(() => initializeColorPicker(nullElements)).not.toThrow();
            expect(Picker).not.toHaveBeenCalled();
        });
    });
});