import {Component} from '@angular/core';
import {Room} from './model/room';
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
  private beamer_ = false;
  private bezet_ = true;
  private capaciteit_ = false;
  private drukte_ = true;
  private naam_ = true;
  private type_ = true;

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

  setSetting(event: string) {
    this[event] = !this[event];
  }
}
