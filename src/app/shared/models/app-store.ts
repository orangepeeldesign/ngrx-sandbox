import {Item} from "./item";
import {Widget} from "./widget";
export interface AppStore {
    items: Item[];
    selectedItem: Item;
    widgets: Widget[];
    selectedWidget: Widget;

};