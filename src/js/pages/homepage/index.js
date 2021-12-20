import Page from '@umutyaldiz/hopejs';

import React, { Suspense } from 'react';
import ReactDOM from "react-dom";
import Loading from '../../components/_reactComponents/_Loading';
const SayHello = React.lazy(() => import('../../components/_reactComponents/SayHello'))

class homepage extends Page {
    constructor(options) {
        super(options);
    }

    Init() {
        super.Load();

        //React Component Suspense Render++
        ReactDOM.render(
            <Suspense fallback={<Loading />}>
                <SayHello />
            </Suspense>,
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