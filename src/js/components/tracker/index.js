import DataLayer from "./plugins/dataLayer";

export default class Tracker{
    constructor(options){
        this.datalayer = new DataLayer();
    }
    PageLinkTrack(){

    }
    ElementViewTrack(elements){
        console.log(elements);
    }
    DataLayerPush(obj){
        this.datalayer.Push(obj);
    }
    DataLayerGet(){
        this.datalayer.Get();
    }
}