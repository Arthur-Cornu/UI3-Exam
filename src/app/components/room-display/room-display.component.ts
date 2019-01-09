import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Room} from '../../model/room';
import {RoomService} from '../../../services/room.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-room-display',
  templateUrl: './room-display.component.html',
  styleUrls: ['./room-display.component.scss']
})
export class RoomDisplayComponent implements OnInit {
  private isList: boolean;
  private floor: number;
  private rooms: Room[];
  private filteredRooms: Room[];
  private beamer_ = false;
  private bezet_ = true;
  private capaciteit_ = false;
  private drukte_ = true;
  private naam_ = true;
  private type_ = true;
  public selectedId: number;
  @Output() goDeselectItem = new EventEmitter<number>();

  constructor(private roomService: RoomService) {
    this.isList = true;
    this.roomService.getRooms()
      .subscribe(
        room => {
          this.rooms = room;
          this.getRooms();
        },
        error => {
          console.log(error as string);
        });
    this.floor = 0;

  }

  list() {
    this.isList = true;
  }

  map() {
    this.isList = false;
  }

  up() {
    if (this.rooms.find(x => x.floor === (this.floor + 1))) {
      this.floor = this.floor + 1;
    }
    this.getRooms();
  }

  down() {
    if (this.rooms.find(x => x.floor === (this.floor - 1))) {
      this.floor = this.floor - 1;
    }
    this.getRooms();
  }

  setSetting(event: string) {
    this[event] = !this[event];
  }

  ngOnInit(): void {
  }

  getRooms() {
    this.filteredRooms = this.rooms.filter(room => room.floor === this.floor);
    console.log(this.filteredRooms);
  }

  setSlectedId(id: number) {
    this.selectedId = id;
  }

}
