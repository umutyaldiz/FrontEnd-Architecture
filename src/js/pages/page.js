import Scroll from "../components/scroll";
import Tracker from "../components/tracker";


export default class Page {
    constructor(options) {
        this.default = {
            "ads": true,
            "refresh": true,
            "refreshTime": 30,
            "scrollEvents": {
                "scroll": true,
                "events": []
            },
            "trackerClickClass": ".gtm-click",
            "trackerViewClass": [".gtm-view-class"]
        };
        this.options = { ...this.default, ...options }; //merge
        this.tracker = new Tracker();
        this.scroll = new Scroll();
    }

    Load() {
        console.info("Page Settings");
        console.log(this.options);

        if (this.options.scrollEvents.scroll) {
            this.scroll.On((properties) => { // return {x,y,direction}
                this.scroll.ScrollEvents(properties, this.options.scrollEvents.events); //page custom scroll Events
                if (this.options.trackerViewClass) {
                    this.tracker.ElementViewTrack(this.options.trackerViewClass); //default view object set
                }
            });

        }
    }
}