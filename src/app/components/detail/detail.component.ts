import {Component, OnInit} from '@angular/core';
import {Room} from '../../model/room';
import {RoomService} from '../../../services/room.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Reservation} from '../../model/reservation';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  room: Room;
  error = false;
  hour = 0;
  submitted = true; // needed to submit for real for some spooky reason

  constructor(private roomService: RoomService, private activeRoute: ActivatedRoute, private router: Router) {
    this.room = new Room();
  }

  ngOnInit() {
    this.activeRoute.paramMap.pipe(switchMap((params: ParamMap) => this.roomService.getRoom(+params.get('id'))))
      .subscribe(
        room => this.room = room,
        error => {
          this.error = true;
          console.log(error as string);
        });
  }

  submitFunction() {
    this.roomService.updateRoom(this.room);
    this.router.navigateByUrl('');
  }

  reserve(hours: number) {
    const start = new Date((new Date().getTime() + (this.hour * 60 * 60 * 1000))).getTime();
    const end = new Date((new Date().getTime() + ((hours + this.hour) * 60 * 60 * 1000))).getTime();
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
    } else {
      alert('Er is nog een reservatie tussen u gekozen uren, reservatie faalde.');
    }
  }

  isBetween(value: number, start: number, end: number) {
    return (value > start && value < end);
  }

}
