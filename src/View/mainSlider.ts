import {Slider} from './slider'
import {ProgressBar} from "./progressBar";
import {Scale} from "./scale";


// const {ProgressBar} = require("./progressBar");
// const  {Scale} = require("./scale");
// const {Slider} = require("./scale")



class Options{
    className: string;
    // doubleRange: boolean
    constructor(className: string ){
        this.className= className
        // this.doubleRange = doubleRange
    }
}

class View{
    // $el: HTMLElement;
    // constructor($el: HTMLElement) {
    //     this.$el = $el
    // }


    options!: Options;
    scale: Scale = new Scale;
    sliderButton: Slider = new Slider;
    betweenRange: ProgressBar = new ProgressBar;
    
    setOptions(options: Options) {
        this.options = options
    }

    // initProps() {
    //     this.$el = document.getElementById(this.options.className)
    // }

    initComponents() {
        this.scale = new Scale();
        this.sliderButton = new Slider();
        this.betweenRange = new ProgressBar();
        let mainscale = this.scale.getScale(this.options.className);
        this.sliderButton.getSliderButton(mainscale)
        this.betweenRange.getProgressBar(mainscale);
        // if (this.options.doubleRange === true) {
        //     this.sliderButton.getSliderButton(mainscale);
        // }

    }
}


function _createSlider(options: string){
let data = new Options(options)
let view = new View()
view.setOptions(data)
view.initComponents()}

const slider = function (options: string){
    const $slider = _createSlider(options)
}

slider('slider')
slider('slider2')