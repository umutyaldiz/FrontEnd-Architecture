import Swiper, { Navigation, Pagination, Lazy, EffectCards, Parallax, FreeMode, Autoplay } from 'swiper';
import TrackerPlugin from './plugins/trackerPlugin';

export default class Slider {
  constructor() {
    this.items = [];

    this.modules = { 'modules': [Navigation, Pagination, Lazy, EffectCards, Parallax, FreeMode, Autoplay, TrackerPlugin] };
    this.pagination = {
      'type1': {
        pagination: {
          el: '.swiper-pagination',
          renderBullet: function (index, className) {
            if (this.params.categories) {
              return '<span data-slider-index="' + index + '" data-slider-category="' + this.params.categories[index].tag + '" class="' + className + '">' + this.params.categories[index].name + "</span>";
            }
            return '<span data-slider-index="' + index + '" class="' + className + '">' + (index + 1) + "</span>";
          }
        }
      }
    };
    this.onFunc = {
      'type1': {
        on: {
          init: function (swiper) {
            const bullets = swiper.pagination.bullets;
            for (let i = 0, length = bullets.length; i < length; i++) {
              bullets[i].addEventListener("mouseover", () => {
                swiper.slideTo(bullets[i].getAttribute('data-slider-index'));
              });
            }
          }
        }
      }
    }
  };

  Init() {
    this.Collect();
  }

  PaginationSet() {
    return options;
  }

  Setup() {

    for (let i = 0, length = this.items.length; i < length; i++) {
      const element = this.items[i];

      let getOptions = element.sliderEl.getAttribute('swiper-options') || null;
      let paginationType = element.sliderEl.getAttribute('swiper-pagination-type') || null;
      let onFuncType = element.sliderEl.getAttribute('swiper-on-type') || null;

      if (getOptions) {
        getOptions = JSON.parse(getOptions);

        let setOptions = {
          ...getOptions,
          ...this.modules,
          ...this.pagination[paginationType],
          ...this.onFunc[onFuncType]
        };

        element.sliderEl = new Swiper(element.sliderEl, setOptions);
      }

    }

  }

  Collect() {
    const items = document.querySelectorAll('.swiper:not(.init)');
    for (let i = 0, length = items.length; i < length; i++) {
      const element = items[i];
      let name = element.getAttribute('swiper-name') || i;
      this.items.push({
        "name": name,
        "sliderEl": element,
        "count": element.querySelectorAll('.swiper-slide').length
      });
    }
    this.Setup();
  }
};