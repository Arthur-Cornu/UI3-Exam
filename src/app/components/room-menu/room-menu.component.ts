import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-room-menu',
  templateUrl: './room-menu.component.html',
  styleUrls: ['./room-menu.component.scss']
})
export class RoomMenuComponent implements OnInit {
  isList: boolean;
  @Output() goList = new EventEmitter();
  @Output() goMap = new EventEmitter();
  @Output() goUp = new EventEmitter();
  @Output() goDown = new EventEmitter();
  constructor() {
    this.isList = true;
  }

  ngOnInit() {
  }

  list() {
    this.isList = true;
    this.goList.emit();
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
}
