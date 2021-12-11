export default class DataLayer {
    constructor(options) {
        window.dataLayer = window.dataLayer || [];
    }
    Push(obj) {
        window.dataLayer.push(obj);
    }
    Get() {
        console.log(window.dataLayer);
        return window.dataLayer;
    }
}