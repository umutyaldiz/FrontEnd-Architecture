import isInViewport from "../isInViewport";
import DataLayer from "./plugins/dataLayer";

export default class Tracker {
    constructor(options) {
        this.datalayer = new DataLayer();
    }
    PageLinkTrack() {

    }
    ElementViewTrack(elements) {
        for (let i = 0, length = elements.length; i < length; i++) {
            const element = document.querySelector(elements[i]);

            if (isInViewport(element) && !element.classList.contains('gtm-send')) {
                const layer = JSON.parse(element.getAttribute('tracker-options'));
                this.DataLayerPush({
                    "event": "viewElement",
                    ...layer
                });
                element.classList.add('gtm-send');
            }

        }
    }
    DataLayerPush(obj) {
        this.datalayer.Push(obj);
    }
    DataLayerGet() {
        this.datalayer.Get();
    }
}