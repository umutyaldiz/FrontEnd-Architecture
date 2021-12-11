

import Page from "../page";


class homepage extends Page {
    constructor(options) {
        super(options);
    }

    Init() {
        super.Load();
    }
}

const scrollPropertiesYShow = (properties) => { //ex. function
    console.log("Page Top Scroll: " + properties.y);
};
const scrollPropertiesDShow = (properties) => { //ex. function
    console.log("Page Scroll Direction: " + properties.direction);
};

const js = new homepage({
    "scrollEvents": {
        "scroll": true,
        "events": [scrollPropertiesYShow, scrollPropertiesDShow]
    },
    //"trackerViewClass": null // null or ".class"
});
js.Init();