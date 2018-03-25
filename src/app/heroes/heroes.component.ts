import {Component, OnInit} from '@angular/core';
import {Hero} from '../heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {

    id: 1,
    name: 'Glenn',
    surename: 'Dasai',
    dayofbirth: '24-11-1987',
    profession: 'Tester',
    gender: ''
  };

  constructor() {
  }

  ngOnInit() {
  }

  gender = ["Male", "Female", "Unknown"];

}
