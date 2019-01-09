import {Component, Input, OnInit} from '@angular/core';
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

  constructor() {
  }

  ngOnInit() {
  }

}
