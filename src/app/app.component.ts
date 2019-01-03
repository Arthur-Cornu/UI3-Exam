import {Component} from '@angular/core';
import {Room} from './model/room';
import {Observable} from 'rxjs';
import {RoomService} from '../services/room.service';

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

  constructor(private roomService: RoomService) {
    this.isList = true;
    this.roomService.getRooms()
      .subscribe(
        room => this.rooms = room,
        error => {
          console.log(error as string);
        });
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
