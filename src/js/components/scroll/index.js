export default class Scroll {
    constructor(options) {

    }
    Event(OnCallback) {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

        var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
        var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

        OnCallback({ x, y });
    }
    On(OnCallback, container = window) {
        window.addEventListener('scroll', ()=>{
            this.Event(OnCallback);
        }, false);
    }
}