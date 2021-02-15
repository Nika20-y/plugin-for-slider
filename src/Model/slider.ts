export class Options {
    className: string = 'slider';
    doubleRange?: boolean = false ;
    minInput?: number = 0;
    maxInput?: number = 1000;
    stepSize?: number = 10;
    // buttonFirstPosition: string = this.minInput;
    // buttonSecondPosition: string = this.maxInput;
    constructor(options: Options) {
        this.className = String('className')
        this.doubleRange = Boolean('doubleRange')
        this.minInput = Number('minInput')
        this.maxInput = Number('maxInput')
        this.stepSize = Number('stepSize')
        // this.buttonFirstPosition = String(options.get('buttonFirstPosition'))
        // this.buttonSecondPosition = String(options.get('buttonSecondPosition'))
    }
}


export class Model {


    initData(options: Options): Options {
        return options
    }


}