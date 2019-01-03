export class Reservation {
  start: Date;
  end: Date;

  constructor(start: Date, end: Date) {
    this.end = end;
    this.start = start;
  }
}
