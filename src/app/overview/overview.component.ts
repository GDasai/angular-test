import { Component, OnInit } from '@angular/core';
import {Hero} from '../heroes';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
