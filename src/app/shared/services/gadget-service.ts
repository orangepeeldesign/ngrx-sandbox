import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Item} from "../models/item";
import {Gadget} from "../models/gadget";
import {Widget} from "../models/widget";
import {AppStore} from "../models/app-store";
import {Store} from '@ngrx/store';

@Injectable()
export class GadgetService {
    gadget: Observable<Gadget>;
    items: Observable<any>;
    widgets: Observable<Array<Widget>>;

    constructor(private store: Store<AppStore>) {
        this.gadget = Observable.combineLatest(
            store.select('items'),
            store.select('widgets'),
            (items: Item[] = [], widgets: Widget[] = []) => {
                return {
                    items: [...items],
                    widgets: [...widgets]
                }
            });

        this.gadget
            .subscribe(c => console.log('Gadget.gadget', c));
    }
};