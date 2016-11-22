import {Output, EventEmitter, Input, Component} from "@angular/core";
import {Item} from "../shared/models/item";
@Component({
    selector: 'item-detail',
    template: `
  `
})
export class ItemsDetail {
    originalName: string;
    selectedItem: Item;
    @Output() saved = new EventEmitter();
    @Output() cancelled = new EventEmitter();

    @Input() set item(value: Item){
        if (value) this.originalName = value.name;
        this.selectedItem = Object.assign({}, value);
    }
}