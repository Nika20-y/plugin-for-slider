import {Scale} from "./scale";

export class Slider {
    getSliderButton(scale: HTMLElement){
        let button: HTMLElement = document.createElement("div");
        button.classList.add("slider__button");
        scale.appendChild(button);
    }
}

