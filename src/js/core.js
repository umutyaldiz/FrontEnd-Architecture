import Swiper, { Navigation, Pagination, Lazy, EffectCards, Parallax, FreeMode, Autoplay } from 'swiper';
import Blazy from 'blazy';
import { Slider, LazyLoad } from '@umutyaldiz/hopejs';

import Header from './components/_header';

class Core {
    constructor() {
        this.header = new Header();
        this.header.Init();

        this.lazyLoad = new LazyLoad();
        this.lazyLoad.Init({
            plugin: Blazy,
            selector: '[data-src]:not(.swiper-lazy)',
            success: function (element) { }
        });

        this.sliders = new Slider({
            'plugin':Swiper,
            'modules': [Navigation, Pagination, Lazy, EffectCards, Parallax, FreeMode, Autoplay]
        });
        this.sliders.Init();
    }
}


window.Core = new Core();

console.info("Core JS => Core");