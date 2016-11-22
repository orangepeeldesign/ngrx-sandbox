import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Item} from "../shared/models/item";
import {Gadget} from "../shared/models/gadget";
import {AppStore} from "../shared/models/app-store";
import {Store} from '@ngrx/store';
import {GadgetService} from "../shared/services/gadget-service";
import {ItemsService} from "../shared/services/items-service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  items: Observable<any>;
  selectedItem: Observable<any>;
  gadget: Observable<any>;
  constructor(private itemsService: ItemsService,
              private gadgetService: GadgetService,
              private store: Store<AppStore>) {
    this.items = itemsService.items;
    this.selectedItem = store.select('selectedItem');
    this.selectedItem.subscribe(v => console.log(v));
  /*  this.gadget = gadgetService.gadget;
*/
    itemsService.loadItems();
  }


  resetItem() {
    let emptyItem: Item = {id: null, name: '', description: ''};
    this.store.dispatch({type: 'SELECT_ITEM', payload: emptyItem});
  }

  selectItem(item: Item) {
    this.store.dispatch({type: 'SELECT_ITEM', payload: item});
  }

  saveItem(item: Item) {
    this.itemsService.saveItem(item);

    // Generally, we would want to wait for the result of `itemsService.saveItem`
    // before resetting the current item.
    this.resetItem();
  }

  deleteItem(item: Item) {
    this.itemsService.deleteItem(item);

    // Generally, we would want to wait for the result of `itemsService.deleteItem`
    // before resetting the current item.
    this.resetItem();
  }

}
