
import {View} from "../View/mainSlider";
import {Options} from "../Model/slider";
import {Model} from  "../Model/slider"



export class Controller{
    view: View;
    model: Model;


    constructor(view: View, model: Model, options: Options) {
        this.view = view;
        this.model = model;
        let data = model.initData(options);
        view.setOptions(data);
        let sliderScale = view.initComponents();
        view.setPositionButton(sliderScale)
    }




}




