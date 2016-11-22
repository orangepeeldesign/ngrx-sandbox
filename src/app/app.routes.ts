import {Routes, RouterModule} from '@angular/router';
import {ItemsComponent} from "./items/items.component";

const routes: Routes = [
    {
        path: '',
        component: ItemsComponent,
    }
];

export const routing = RouterModule.forRoot(routes);