export default class Scroll {
    constructor(options) {
        this.lastKnownScrollPosition = 0;
        this.ticking = false;
    }
    ScrollEvents(properties, events) {
        events.forEach(element => {
            element(properties);
        });
    }
    On(OnCallback) {
        const _this = this;
        document.addEventListener('scroll', () => {
            const supportPageOffset = window.pageXOffset !== undefined;
            const isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

            let x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
            let y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
            let direction = y > this.lastKnownScrollPosition ? "down" : "up";

            this.lastKnownScrollPosition = y <= 0 ? 0 : y;

            const properties = {
                "x": x,
                "y": y,
                "direction": direction
            };

            if (!this.ticking) {
                window.requestAnimationFrame(function () {
                    OnCallback(properties);
                    _this.ticking = false;
                });
                this.ticking = true;
            }
        }, false);
    }
}