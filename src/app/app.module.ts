import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {StoreModule} from "@ngrx/store";
import {AppComponent} from './app.component';
import {selectedWidget} from "./shared/stores/selectedWidget";
import {selectedItem} from "./shared/stores/selectedItem";
import {items} from "./shared/stores/items";
import {ItemsComponent} from './items/items.component';
import {WidgetsComponent} from './widgets/widgets.component';
import {WidgetsList} from "./widgets/widgets-list.component";
import {WidgetDetails} from "./widgets/widget-details.component";
import {ItemsList} from "./items/items-list.component";
import {ItemsDetail} from "./items/items-detail.component";
import {GadgetService} from "./shared/services/gadget-service";
import {ItemsService} from "./shared/services/items-service";
import {WidgetsService} from "./shared/services/widgets-service";

@NgModule({
    declarations: [
        AppComponent,
        ItemsComponent,
        WidgetsComponent,
        WidgetsList,
        WidgetDetails,
        ItemsList,
        ItemsDetail
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        StoreModule.provideStore({items, selectedItem, selectedWidget})
    ],
    providers: [GadgetService, ItemsService, WidgetsService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
