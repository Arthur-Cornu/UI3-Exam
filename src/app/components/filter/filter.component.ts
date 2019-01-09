import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  naam_: boolean;
  type_: boolean;
  beamer_: boolean;
  drukte_: boolean;
  @Output() closed = new EventEmitter();
  @Output() toggle: EventEmitter<String> = new EventEmitter<String>();

  constructor() {
  }

  ngOnInit() {
    this.loadLocalStorage();
  }

  onFilterChange(ev: string) {
    this[ev] = !this[ev];
    this.toggle.emit(ev);
    localStorage.setItem([ev].toString(), this[ev]);
  }

  close() {
    this.closed.emit();
  }

  loadLocalStorage() {
    if (localStorage.getItem('naam_')) {
      if (localStorage.getItem('naam_') === 'true') {
        this.naam_ = true;
        this.toggle.emit('naam_');
      } else {
        this.naam_ = false;
      }
    } else {
      this.naam_ = true;
      this.toggle.emit('naam_');
    }
    if (localStorage.getItem('type_')) {
      if (localStorage.getItem('type_') === 'true') {
        this.type_ = true;
        this.toggle.emit('type_');
      } else {
        this.type_ = false;
      }
    } else {
      this.type_ = true;
      this.toggle.emit('type_');
    }
    if (localStorage.getItem('beamer_')) {
      if (localStorage.getItem('beamer_') === 'true') {
        this.beamer_ = true;
        this.toggle.emit('beamer_');
      } else {
        this.beamer_ = false;
      }
    }
    if (localStorage.getItem('drukte_')) {
      if (localStorage.getItem('drukte_') === 'true') {
        this.drukte_ = true;
        this.toggle.emit('drukte_');
      } else {
        this.drukte_ = false;
      }
    } else {
      this.drukte_ = true;
      this.toggle.emit('drukte_');
    }
  }
}
