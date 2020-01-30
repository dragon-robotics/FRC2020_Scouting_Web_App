import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PitScoutingFormComponent } from './pit-scouting-form/pit-scouting-form.component';
import { MatchScoutingFormComponent } from './match-scouting-form/match-scouting-form.component';
import { StatisticsDashboardComponent } from './statistics-dashboard/statistics-dashboard.component';

/*
  Example bulit from Angular Material Schematics.
  Link to Schematics Descriptions:
    https://material.angular.io/guide/schematics
*/
import { DashboardExampleComponent } from './dashboard-example/dashboard-example.component';
import { FormExampleComponent } from './form-example/form-example.component';
import { NavigationExampleComponent } from './navigation-example/navigation-example.component';
import { TableExampleComponent } from './table-example/table-example.component';
import { TreeExampleComponent } from './tree-example/tree-example.component';

const routes: Routes = [
  { path: '', redirectTo: '/pit-scouting-form', pathMatch: 'full' },
  { path: 'pit-scouting-form', component: PitScoutingFormComponent },
  { path: 'match-scouting-form', component: MatchScoutingFormComponent },
  { path: 'statistics-dashboard', component: StatisticsDashboardComponent },
  /* Various schematics paths to be used for future reference */
  { path: 'dashboard-example', component: DashboardExampleComponent },
  { path: 'form-example', component: FormExampleComponent },
  { path: 'navigation-example', component: NavigationExampleComponent },
  { path: 'table-example', component: TableExampleComponent },
  { path: 'tree-example', component: TreeExampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
