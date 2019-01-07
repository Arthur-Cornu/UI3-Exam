import {Reservation} from './reservation';

export class Room {
  id: number;
  name: string;
  capacity: number;
  crowd: number;
  beamer: boolean;
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
  floor: number;
  reservations: Reservation[];

  constructor() {
    this.id = -1;
    this.name = '';
    this.type = '';
    this.capacity = 1;
    this.crowd = 0;
    this.beamer = false;
    this.floor = 0;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.reservations = [];
  }
}
