import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Room} from '../../model/room';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() rooms: Room[];
  @Input() beamer_ = false;
  @Input() bezet = true;
  @Input() drukte = true;
  @Input() naam = true;
  @Input() type = true;
  @Output() goDeselect = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

}
