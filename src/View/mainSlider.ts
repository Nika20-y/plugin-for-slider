import {Slider} from './slider'
import {ProgressBar} from "./progressBar";
import {Scale} from "./scale";
import {Options} from "../Model/slider";




export class View {
    options!: Options;
    scale: Scale = new Scale;
    sliderButton: Slider = new Slider;
    betweenRange: ProgressBar = new ProgressBar;


    setOptions(options: Options) {
        this.options = options;
    }

    getCoords(elem: HTMLElement) {
        const elementOfSlider = elem.getBoundingClientRect();
        return {
            top: elementOfSlider.top + pageYOffset,
            left: elementOfSlider.left + pageXOffset,
        };
    }

    initComponents() {
        this.scale = new Scale();
        this.sliderButton = new Slider();
        this.betweenRange = new ProgressBar();
        let mainscale: HTMLElement = this.scale.getScale(this.options.className);
        this.sliderButton.getSliderButton(mainscale)
        if (this.options.doubleRange === true) {
            this.sliderButton.getSliderButton(mainscale);
        }
        this.betweenRange.getProgressBar(mainscale);

        return mainscale;
    }

    setPositionButton(scale: HTMLElement){
        let button: HTMLCollection = scale.getElementsByClassName('slider__button')

        if(button.length>1){
            let secondButton:HTMLElement = <HTMLElement> button[1]
            this.sliderButton.setPosition(secondButton,this.options.maxInput || 0)

        }
            let firstButton:HTMLElement = <HTMLElement> button[0]
            this.sliderButton.setPosition(firstButton,this.options.minInput || 1000)
    }

    setPositionTrack(scale: HTMLElement){
        let activeTrack: HTMLCollection = scale.getElementsByClassName('slider__between-range')
        let progressBar: HTMLElement = <HTMLElement> activeTrack[0];
        let button: HTMLCollection = scale.getElementsByClassName('slider__button')
        let firstButton:HTMLElement = <HTMLElement> button[0]
        let positionScale = this.getCoords(scale);
        if(button.length>1){

        }
        else{


        }

    }
    // calcActiveTrack(track:HTMLElement, value1:number, value2?:number) {
    //     if (value1 > value2) {
    //         track.style.width = (value1 - value2) + 'px';
    //         track.style.marginLeft = value2 + 'px';
    //     } else {
    //         track.style.width = (value2 - value1) + 'px';
    //         track.style.marginLeft = value1 + 'px';
    //     }
    // }



    }



