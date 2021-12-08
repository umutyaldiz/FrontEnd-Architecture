export default class Page {
    constructor(options) {
        this.default = {
            "ads": true,
            "refresh":true,
            "refreshTime":30
        };
        this.options = { ...this.default, ...options }; //merge
    }
    Load() {
        console.info("Page Settings");
        console.log(this.options);
    }
}