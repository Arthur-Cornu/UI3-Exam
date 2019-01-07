import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {RoomMenuComponent} from './components/room-menu/room-menu.component';
import {FormsModule} from '@angular/forms';
import {ListItemComponent} from './components/list-item/list-item.component';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryDataService} from '../services/in-memory-data.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {FilterComponent} from './components/filter/filter.component';
import {DetailComponent} from './components/detail/detail.component';
import {RouterModule, Routes} from '@angular/router';
import { RoomDisplayComponent } from './components/room-display/room-display.component';
import { MapComponent } from './components/map/map.component';

const routing: Routes = [
  {path: 'room/:id', component: DetailComponent},
  {path: '**', component: RoomDisplayComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RoomMenuComponent,
    ListItemComponent,
    FilterComponent,
    DetailComponent,
    RoomDisplayComponent,
    MapComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forRoot(
      routing, {enableTracing: false}
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
