import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit {
  hero: any;

  constructor(private router: Router, private _data: DataService) {
  }

  ngOnInit() {
    this._data.heroo.subscribe(res => this.hero = res);
  }

  sendMeOverview() {
    this.router.navigate(['overview']);
  }
}
