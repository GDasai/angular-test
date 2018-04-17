import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {OverviewComponent} from './overview/overview.component';
import {BackendComponent} from './backend/backend.component';

const routes: Routes = [
  {
    path: 'register',
    component: HeroesComponent
  },
  {
    path: 'overview',
    component: OverviewComponent
  },
  {
    path: 'backend',
    component: BackendComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
