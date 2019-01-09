import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const rooms = [
      {
        'id': 1,
        'name': 'GR101',
        'type': 'classroom',
        'floor': 1,
        'x': 0,
        'y': 0,
        'width': 220,
        'height': 250,
        'beamer': false,
      }, {
        'id': 2,
        'name': 'GR102',
        'type': 'aula',
        'floor': 1,
        'x': 220,
        'y': 0,
        'width': 350,
        'height': 200,
        'beamer': true,
        'reservations': [{
          'start': new Date((new Date().getTime() - (1 * 60 * 60 * 1000))).getTime(),
          'end': new Date((new Date().getTime() + (2 * 60 * 60 * 1000))).getTime()
        }, {
          'start': new Date((new Date().getTime() - (2 * 60 * 60 * 1000))).getTime(),
          'end': new Date((new Date().getTime() - (60 * 60 * 1000))).getTime()
        }]
      }, {
        'id': 3,
        'name': 'GR103',
        'type': 'cafetaria',
        'floor': 1,
        'x': 570,
        'y': 0,
        'width': 200,
        'capacity': 30,
        'crowd': 1,
        'height': 200,
        'beamer': false,
      },
      {
        'id': 4,
        'name': 'GR104',
        'type': 'classroom',
        'floor': 1,
        'x': 770,
        'y': 0,
        'width': 220,
        'capacity': 0,
        'crowd': 0,
        'height': 200,
        'beamer': true,
      },

      {
        'id': 5,
        'name': 'GR105',
        'type': 'classroom',
        'floor': 1,
        'x': 990,
        'y': 0,
        'width': 300,
        'height': 200,
        'beamer': false,
      }, {
        'id': 6,
        'name': 'GR106',
        'type': 'classroom',
        'floor': 1,
        'x': 1290,
        'y': 0,
        'width': 270,
        'height': 320,
        'beamer': true,
      }, {
        'id': 7,
        'name': 'GR107',
        'type': 'classroom',
        'floor': 1,
        'x': 1290,
        'y': 320,
        'width': 270,
        'height': 350,
        'beamer': true,
      }, {
        'id': 8,
        'name': 'GR108',
        'type': 'classroom',
        'floor': 1,
        'x': 1240,
        'y': 670,
        'width': 320,
        'height': 222,
        'beamer': true,
      },
      {
        'id': 9,
        'name': 'GR109',
        'type': 'cafetaria',
        'floor': 1,
        'x': 1020,
        'y': 670,
        'width': 220,
        'capacity': 22,
        'crowd': 20,
        'height': 222,
        'beamer': false,
      }, {
        'id': 10,
        'name': 'GR110',
        'type': 'study',
        'floor': 1,
        'x': 800,
        'y': 670,
        'width': 220,
        'capacity': 30,
        'crowd': 15,
        'height': 222,
        'beamer': false,
      },
      {
        'id': 11,
        'name': 'GR111',
        'type': 'classroom',
        'floor': 1,
        'x': 520,
        'y': 670,
        'width': 280,
        'height': 222,
        'beamer': true,
      }
      ,
      {
        'id': 12,
        'name': 'GR112',
        'type': 'classroom',
        'floor': 1,
        'x': 2000,
        'y': 2000,
        'width': 200,
        'height': 200,
        'beamer': false,
      }
    ];
    return {rooms};
  }
}

