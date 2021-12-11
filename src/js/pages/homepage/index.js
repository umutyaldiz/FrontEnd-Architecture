

import Page from "../page";


class homepage extends Page {
    constructor(options) {
        super(options);
    }

    Init() {
        super.Load();
    }
}

const scrollPropertiesShow = (properties) => {
    console.log(properties);
};

const js = new homepage({
    "scrollEvents": {
        "scroll": true,
        "events": [scrollPropertiesShow]
    },
    "trackerViewClass": null // null or ".class"
});
js.Init();