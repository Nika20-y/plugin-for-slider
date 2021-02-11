
const { ProgressBar } = require("./progressBar");
const { Scale } = require("./scale");
const { Slider } = require("./scale");
class Options {
    constructor(className) {
        this.className = className;
    }
}
class View {
    setOptions(options) {
        this.options = options;
    }
    // initProps() {
    //     this.$el = document.getElementById(this.options.className)
    // }
    initComponents() {
        this.scale = new Scale();
        this.sliderButton = new Slider();
        this.betweenRange = new ProgressBar();
        let mainscale = this.scale.getScale(this.options.className);
        this.sliderButton.getSliderButton(mainscale);
        this.betweenRange.getProgressBar(mainscale);
    }
}
module.exports = { View };
let data = new Options('slider');
let view = new View();
view.setOptions(data);
view.initComponents();
