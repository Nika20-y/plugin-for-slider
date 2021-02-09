class Scale{
    getScale(className){
    let wrap: HTMLElement = document.createElement("div");
    wrap.classList.add("slider__scale");
        let items = document.getElementsByClassName(className);
            for (let i = 0; i < items.length; i++) {
            items[i].appendChild(wrap)
        }
    }
}

