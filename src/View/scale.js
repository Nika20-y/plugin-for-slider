export class Scale {
    getScale(className) {
        let wrap = document.createElement("div");
        wrap.classList.add("slider__scale");
        let item = document.getElementById(className);
        item.appendChild(wrap);
        return wrap;
    }
}
