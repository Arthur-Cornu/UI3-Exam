import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  started: boolean;
  range: number;
  @Output() startstop: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() add = new EventEmitter();
  @Output() remove = new EventEmitter();
  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();
  @Output() slide: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  inc() {
    this.increment.emit();
  }

  dec() {
    this.decrement.emit();
  }

  plus() {
    this.add.emit();
  }

  min() {
    this.remove.emit();
  }

  startStop() {
    this.started = !this.started;
    this.startstop.emit(this.started);
  }

  saverange(newValue) {
    this.slide.emit(newValue);
  }
}
