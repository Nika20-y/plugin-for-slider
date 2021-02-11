export class Slider {
    getSliderButton(scale) {
        let button = document.createElement("div");
        button.classList.add("slider__button");
        scale.appendChild(button);
    }
}
