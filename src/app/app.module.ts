import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {RoomMenuComponent} from './components/room-menu/room-menu.component';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {FormsModule} from '@angular/forms';
import {ListItemComponent} from './components/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RoomMenuComponent,
    ToolbarComponent,
    ListItemComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
