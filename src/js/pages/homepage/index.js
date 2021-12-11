import isInViewport from "../../components/isInViewport";
import Scroll from "../../components/scroll";
import Page from "../page";


class homepage extends Page {
    constructor(options) {
        super(options);
    }
    ScrollEvents(coordinate) {
        //console.log("Page scroll Events", coordinate);

        const text = isInViewport(document.querySelector("[category=highlights]")) ?
            'category=highlights ekranda görünüyor' :
            'category=highlights ekranda görünmüyor';

        console.log(text);
    }
    Init() {
        super.Load();

        const scroll = new Scroll();
        scroll.On(this.ScrollEvents);
    }
}

const js = new homepage();
js.Init();