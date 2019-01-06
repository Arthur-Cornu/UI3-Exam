import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  naam_ = true;
  type_ = true;
  beamer_ = false;
  drukte_ = true;
  @Output() closed = new EventEmitter();
  @Output() toggle: EventEmitter<String> = new EventEmitter<String>();

  constructor() {
  }

  ngOnInit() {
  }

  onFilterChange(ev: string) {
    this[ev] = !this[ev];
    this.toggle.emit(ev);
  }

  close() {
    this.closed.emit();
  }
}
