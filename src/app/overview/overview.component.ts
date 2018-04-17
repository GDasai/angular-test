import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  hero: any;

  constructor(private router: Router, private _data: DataService) {
  }

  ngOnInit() {
    this._data.heroo.subscribe(res => this.hero = res);
  }

  sendMeRegister() {
    this.router.navigate(['register']);
  }

  sendMeBackend() {
    this.router.navigate(['backend']);
  }
}
