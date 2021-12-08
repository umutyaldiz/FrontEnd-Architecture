import Blazy from 'blazy';

export default class LazyLoad {
    constructor() {
        this.options = null;
        this.lazy = null;
    }
    Init(options) {
        this.options = options;
        this.lazy = new Blazy(this.options);
    }
}