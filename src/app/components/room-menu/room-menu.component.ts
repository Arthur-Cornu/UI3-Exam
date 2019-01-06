import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-room-menu',
  templateUrl: './room-menu.component.html',
  styleUrls: ['./room-menu.component.scss']
})
export class RoomMenuComponent implements OnInit {
  isList: boolean;
  filtersShown = false;
  @Output() goList = new EventEmitter();
  @Output() goMap = new EventEmitter();
  @Output() goUp = new EventEmitter();
  @Output() goDown = new EventEmitter();
  @Output() toggle: EventEmitter<String> = new EventEmitter<String>();

  constructor() {
    this.isList = true;
  }

  ngOnInit() {
  }

  list() {
    this.isList = true;
    this.goList.emit();
  }

  showFilter() {
    this.filtersShown = !this.filtersShown;
  }

  getHidden() {
    if (this.filtersShown) {
      return 'visible';
    } else {
      return 'hidden';
    }
  }

  map() {
    this.isList = false;
    this.goMap.emit();
  }

  up() {
    this.goUp.emit();
  }

  down() {
    this.goDown.emit();
  }

  setSetting(event: string) {
  this.toggle.emit(event);
  }
}
