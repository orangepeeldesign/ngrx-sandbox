import { Component, OnInit } from '@angular/core';
import {Widget} from "../shared/models/widget";
import {Observable} from "rxjs";
import {WidgetsService} from "../shared/services/widgets-service";
import {AppStore} from "../shared/models/app-store";
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent {

  widgets = [];
  selectedWidget: Observable<any>;

  constructor(private _widgetsService: WidgetsService,
              private _store: Store<AppStore>) {
    this.selectedWidget = _store.select('selectedWidget');

    _widgetsService.loadWidgets()
        .subscribe(
            widgets => this.widgets = widgets,
            error => console.error(error.json())
        );
  }

  selectWidget(widget) {
    this._store.dispatch({type: 'SELECT_WIDGET', payload: widget});
  }

  saveWidget(widget) {
    console.log('widget', widget);
  }
}
