const sumTwoNumbers = (number1: number, number2: number) => {
    return number1 + number2;
}

sumTwoNumbers('Hello', 'Hello');

class Slide {
    content: string;
    constructor(content) {
        this.content = content;
    }
}

class Carousel {
    slides: Slide[];
    constructor(slides) {
        this.slides = slides;
        this.slides[0].content;
    }
    printSlides() {
        for (let i = 0; i < this.slides.length; i++) {
            console.log("Slide content: ", this.slides[i].content);
        }
    }
}