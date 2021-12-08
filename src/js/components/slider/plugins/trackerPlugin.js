export default function TrackerPlugin({ swiper, extendParams, on }) {
    extendParams({
        trackerStatus: false,
    });
    swiper.TrackerPlugin = {
        TrackEvent(slider) {
            const activeIndex = slider.activeIndex;
            const activeSlide = slider.slides[activeIndex];
            const swiperName = slider.el.getAttribute("swiper-name");
            const trackerOptions = activeSlide.getAttribute("tracker-options") || 0;
            
            if (trackerOptions) {
                //send gtm
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'Slider-' + swiperName,
                    'activeIndex':activeIndex,
                    ...JSON.parse(trackerOptions)
                });
            }
        },
    };
    on('slideChangeTransitionEnd', (_swiper) => {
        if (!_swiper.params.trackerStatus) return;
        _swiper.TrackerPlugin.TrackEvent(_swiper);
    });
    on('init', (_swiper) => {
        if (!_swiper.params.trackerStatus) return;
        _swiper.TrackerPlugin.TrackEvent(_swiper);
    });
}