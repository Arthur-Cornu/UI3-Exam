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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RoomMenuComponent,
    ListItemComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
