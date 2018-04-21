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
    this.router.navigate(['']);
  }

  sendMeBackend() {
    this.router.navigate(['backend']);
  }

  getFormattedDate(): string {

    let formattedDate = null;
    if (this.hero.dateofbirth !== null && this.hero.dateofbirth !== undefined) {
      formattedDate = this.hero.dateofbirth.day + '-' + this.hero.dateofbirth.month + '-' + this.hero.dateofbirth.year;
    }
    return formattedDate;
  }

}
