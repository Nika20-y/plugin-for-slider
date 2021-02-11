export class Scale {

    getScale(className: string) {
        let wrap = document.createElement("div");
        wrap.classList.add("slider__scale");
        let item: HTMLElement = <HTMLElement>document.getElementById(className);
        item.appendChild(wrap);
        return wrap
    }
}

