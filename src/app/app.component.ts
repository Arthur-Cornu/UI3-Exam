import {Component} from '@angular/core';
import {Room} from './model/room';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private isList: boolean;
  private floor: number;
  private rooms: Room[];
  title = 'ExamUI3Classroom';

  constructor() {
    this.isList = true;
    this.rooms = [new Room(0, 'GR001', 10, 9), new Room(0, 'GR002', 20, 1, 'AULA', 'Room', true), new Room(0, 'GR003', 30, 20, 'CLASSROOM', 'Room', true), new Room(0, 'GR004', 30, 15, 'AULA', 'Room', false)];
  }

  list() {
    this.isList = true;
  }

  map() {
    this.isList = false;
  }

  up() {
    this.floor = this.floor++;
  }

  down() {
    this.floor = this.floor--;
  }
}
