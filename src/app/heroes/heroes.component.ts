import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../heroes';
import {Router} from '@angular/router';
import {DataService} from '../data.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  @Input() hero: Hero;

  constructor(private router: Router, private _data: DataService) {
  }

  ngOnInit() {
    this._data.heroo.subscribe(res => this.hero = res);
  }

  gender = ['Male', 'Female', 'Unknown'];

  sendMeOverview() {
    this.router.navigate(['overview']);
  }

  alertShow() {
    alert('Hallo ik ben een Alert box');
  }

}
