import {Component, Input, OnInit} from '@angular/core';
import {Color} from '../../model/color';
import {Room} from '../../model/room';
import {Reservation} from '../../model/reservation';
import {RoomService} from '../../../services/room.service';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  constructor(private roomService: RoomService) {
    this.room = new Room();
    this.color = new Color(255, 0, 0);
  }

  color: Color;
  occupied: number;
  currentReservation: Reservation;
  timer: String;
  selected = false;
  @Input() beamer_ = false;
  @Input() bezet = true;
  @Input() drukte = true;
  @Input() naam = true;
  @Input() type = true;
  @Input() room: Room;

  ngOnInit() {
    this.occupied = 2;
    this.currentReservation = null;
    this.checkForOccupied();
    this.updateColor();
    setInterval(() => this.setTime(), 1000);
  }

  updateColor() {
    let n = 0;
    if (this.occupied === 1) {
      if (this.currentReservation == null) {
        n = 100;
      } else {
        n = (this.currentReservation.end - new Date().getTime()) / (this.currentReservation.end - this.currentReservation.start) * 100;
      }
    } else if (this.occupied === 0) {
      n = 0;
    } else {
      n = this.room.crowd / this.room.capacity * 100;
    }
    const r = Math.round((255 * n) / 100);
    const g = Math.round((255 * (100 - n)) / 100);
    this.color = new Color(r, g, 0);
    return this.color.toString();
  }

  checkForOccupied() {
    if (this.room.type === 'classroom' || this.room.type === 'aula' || this.room.type === 'conference') {
      let check = 0; // free
      if (this.room.reservations !== undefined) {
        const now = new Date().getTime();
        for (const reservation of this.room.reservations) {
          if (this.isBetween(now, reservation.start, reservation.end)) {
            check = 1; // timed
            this.currentReservation = <Reservation>reservation;
          }
        }
      }
      this.occupied = check;
    }
  }

  setTime(): any {
    if (this.currentReservation != null) {
      const secondsLeft = (this.currentReservation.end - new Date().getTime()) / 1000;
      const h = Math.floor(secondsLeft / 3600);
      let m = Math.floor(secondsLeft % 3600 / 60).toString();
      let s = Math.floor(secondsLeft % 3600 % 60).toString();
      if (m.length === 1) {
        m = '0' + m;
      }
      if (s.length === 1) {
        s = '0' + s;
      }
      this.timer = (h + ':' + m + ':' + s);
      this.updateColor();
    } else {
      this.timer = ('00:00:00');
    }
  }

  toggleSelect() {
    this.selected = !this.selected;
  }

  saverange(val: number) {
    this.roomService.updateRoom(this.room);
  }

  reserve(hours: number) {
    const start = new Date().getTime();
    const end = new Date((new Date().getTime() + (hours * 60 * 60 * 1000))).getTime();
    const reservatie = new Reservation();
    reservatie.start = start;
    reservatie.end = end;

    if (this.room.reservations === undefined) {
      this.room.reservations = [];
    }

    let free = true;
    for (const reservation of this.room.reservations) {
      if (this.isBetween(reservatie.start, reservation.start, reservation.end) ||
        this.isBetween(reservatie.end, reservation.start, reservation.end)) {
        free = false;
      }
    }
    if (free) {
      this.room.reservations.push(reservatie);
      this.roomService.updateRoom(this.room);
      this.checkForOccupied();
    } else {
      alert('Er is nog een reservatie tussen u gekozen uren, reservatie faalde.');
    }
  }

  isBetween(value: number, start: number, end: number) {
    return (value > start && value < end);
  }

}
