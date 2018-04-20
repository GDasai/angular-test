import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {OverviewComponent} from './overview/overview.component';
import {AppRoutingModule} from './/app-routing.module';
import {DataService} from './data.service';
import {BackendComponent} from './backend/backend.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    OverviewComponent,
    BackendComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
