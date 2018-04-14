import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../heroes';
import {Router} from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  @Input() hero: Hero;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  sendMeRegister() {
    this.router.navigate(['register']);
  }
}
