import {Component, Input, OnInit} from '@angular/core';
import {Color} from '../../model/color';
import {Room} from '../../model/room';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  constructor() {
    this.color = new Color(255, 0, 0);
  }

  color: Color;
  ocupied?: boolean;
  @Input() room: Room;

  ngOnInit() {
    this.updateColor();
  }

  updateColor() {
    const n = this.room.crowd / this.room.capacity * 100;
    const r = Math.round((255 * n) / 100);
    const g = Math.round((255 * (100 - n)) / 100);
    this.color = new Color(r, g, 0);
    return this.color.toString();
  }

}
