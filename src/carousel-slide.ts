export class CarouselSlide extends HTMLElement {
    private container: HTMLDivElement;

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });

        this.container = document.createElement('div');
        this.container.classList.add('carousel-slide');

        const style = document.createElement("style");
        style.textContent = `
            .carousel-slide {
                flex: 0 0 auto;
                font-family: Georgia, sans-serif;
                font-size: 15px;
                width: 200px;
                height: auto;
                background-color: #f0f0f0;
                border-radius: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0;
                padding: 20px;
                word-wrap: break-word;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                transition: transform 0.3s;
            }

            .carousel-slide:hover {
                transform: scale(1.05);
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(this.container);

        this.updateStyle();
    }

    static get observedAttributes() {
        return ['backgroundColor', 'fontColor'];
    }

    attributeChangedCallback() {
        this.updateStyle(); // Update styles when attributes change
    }

    connectedCallback() {
        this.updateContent(); // Update content when connected to the DOM
    }

    updateStyle() {
        const backgroundColor = this.getAttribute('backgroundColor') || '#f0f0f0';
        const fontColor = this.getAttribute('fontColor') || '#000000';

        this.container.style.backgroundColor = backgroundColor;
        this.container.style.color = fontColor;
    }

    updateContent() {
        this.container.textContent = this.textContent;
    }
}
