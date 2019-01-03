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
    this.occupied = 2;
    this.room = new Room();
    this.color = new Color(255, 0, 0);
  }

  color: Color;
  occupied: number;
  @Input() room: Room;

  ngOnInit() {
    this.occupied = 2;
    this.checkForOccupied();
    this.updateColor();
  }

  updateColor() {
    if (this.occupied === 1) {
      this.color = new Color(255, 0, 0);
    } else if (this.occupied === 0) {
      this.color = new Color(0, 255, 0);
    } else {
      const n = this.room.crowd / this.room.capacity * 100;
      const r = Math.round((255 * n) / 100);
      const g = Math.round((255 * (100 - n)) / 100);
      this.color = new Color(r, g, 0);
    }
    return this.color.toString();
  }

  checkForOccupied() {
    if (this.room.type === 'classroom' || this.room.type === 'aula' || this.room.type === 'conference') {
      let check = 0;
      if (this.room.reservations !== undefined) {
        for (const reservation of this.room.reservations) {
          if (reservation.start < new Date() && reservation.end > new Date()) {
            check = 1;
          }
        }
      }
      this.occupied = check;
    }
  }

}
