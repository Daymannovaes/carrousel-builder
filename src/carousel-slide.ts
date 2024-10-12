export class CarouselSlide extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });

        const wrapper = document.createElement("div");
        wrapper.classList.add("carousel-slide");
        wrapper.textContent = this.textContent;

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

            .carousel-item:hover {
                transform: scale(1.05);
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    }
}
customElements.define("carousel-slide", CarouselSlide);