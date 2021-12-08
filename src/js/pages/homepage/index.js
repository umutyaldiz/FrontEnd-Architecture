import Page from "../page";

class homepage extends Page {
    constructor(options) {
        super(options);
    }
    Init() {
        super.Load();
    }
}

const js = new homepage();
js.Init();