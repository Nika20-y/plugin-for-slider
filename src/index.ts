
import {View} from "./View/mainSlider";
import {Options} from "./Model/slider";
import {Model} from  "./Model/slider"
import {Controller} from "./Controller/controller"




const slider = function (options: Options) {
    const model = new Model()
    const view = new View()
    const controller = new Controller(view, model, options)

}


 slider({className: 'slider', doubleRange: true})