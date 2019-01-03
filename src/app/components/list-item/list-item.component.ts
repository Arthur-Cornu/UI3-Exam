import {Component, Input, OnInit} from '@angular/core';
import {Color} from '../../model/color';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  constructor() {
    this.id = -1;
    this.name = ''; //
    this.description = '';
    this.type = '';
    this.capacity = 0; //
    this.crowd = 0; //
    this.beamer = false;
    this.color = new Color(255, 0, 0);
  }

  color: Color;
  @Input() id: number;
  @Input() name: string;
  @Input() description: string;
  @Input() capacity: number;
  @Input() crowd: number;
  @Input() beamer: boolean;
  @Input() type: string;

  ngOnInit() {
    this.updateColor();
  }

  updateColor() {
    const n = this.crowd / this.capacity * 100;
    const r = Math.round((255 * n) / 100);
    const g = Math.round((255 * (100 - n)) / 100);
    this.color = new Color(r, g, 0);
    return this.color.toString();
  }

}
