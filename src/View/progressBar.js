export class ProgressBar {
    getProgressBar(scale) {
        let progressBar = document.createElement("div");
        progressBar.classList.add("slider__between-range");
        scale.appendChild(progressBar);
    }
}
