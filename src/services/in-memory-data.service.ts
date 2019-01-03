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
        'width': 5,
        'height': 4,
        'capacity': 0,
        'beamer': false,
      },
      {
        'id': 2,
        'name': 'GR102',
        'type': 'aula',
        'floor': 1,
        'x': 0,
        'y': 0,
        'width': 5,
        'height': 4,
        'capacity': 0,
        'beamer': true,
      }
    ];
    return {rooms};
  }
}

