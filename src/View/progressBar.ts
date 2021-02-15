import {Scale} from "./scale";

export class ProgressBar{
    getProgressBar(scale: HTMLElement){
            let progressBar: HTMLElement = document.createElement("div");
            progressBar.classList.add("slider__between-range");
            scale.appendChild(progressBar);
        }
    setWidth(progress:HTMLElement, position: number){
        progress.style.width = String(position)+'px';
    }
}
