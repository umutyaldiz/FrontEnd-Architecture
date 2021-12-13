import React from 'react';
import ReactDOM from "react-dom";
import SayHello from "../../components/_reactComponents/SayHello";

import Page from "../page";


class homepage extends Page {
    constructor(options) {
        super(options);
    }

    Init() {
        super.Load();

        //React Component Render++
        ReactDOM.render(
            <SayHello />,
            document.getElementById('SayHelloReactAPP')
        );
    }
}

const scrollPropertiesYShow = async (properties) => { //ex. function
    console.log("Page Top Scroll: " + properties.y);
    return false;
};
const scrollPropertiesDShow = async (properties) => { //ex. function
    console.log("Page Scroll Direction: " + properties.direction);
    return false;
};

const js = new homepage({
    "scrollEvents": {
        "scroll": true,
        "events": [scrollPropertiesYShow, scrollPropertiesDShow]
    },
    //"trackerViewClass": null // null or ".class"
});
js.Init();