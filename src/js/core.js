import Header from './components/_header';
import LazyLoad from './components/lazyLoad/index';
import Slider from './components/slider/index';

class Core {
    constructor() {
        this.header = new Header();
        this.header.Init();

        this.lazyLoad = new LazyLoad();
        this.lazyLoad.Init({
            selector: '[data-src]:not(.swiper-lazy)',
            success: function (element) { }
        });

        this.sliders = new Slider();
        this.sliders.Init();
    }
}


window.Core = new Core();

console.info("Core JS => Core");