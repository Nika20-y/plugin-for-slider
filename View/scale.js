var Scale = /** @class */ (function () {
    function Scale() {
    }
    Scale.prototype.getScale = function (className) {
        var items = document.getElementsByClassName(className);
        console.log('abc')
        // for(let item of items){
        //     item.createElement("div").classList.add("slider__scale");
        // }
    };
    return Scale;
}());

var scale = new Scale();
scale.getScale("slider");
