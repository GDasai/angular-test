import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Hero} from './heroes';

@Injectable()
export class DataService {

  hero = new BehaviorSubject<any>(new Hero);
  heroo = this.hero.asObservable();

  constructor() {
  }

}
