import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormExampleComponent } from './form-example/form-example.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardExampleComponent } from './dashboard-example/dashboard-example.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { TableExampleComponent } from './table-example/table-example.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TreeExampleComponent } from './tree-example/tree-example.component';
import { MatTreeModule } from '@angular/material/tree';
import { NavigationExampleComponent } from './navigation-example/navigation-example.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { PitScoutingFormComponent } from './pit-scouting-form/pit-scouting-form.component';
import { MatchScoutingFormComponent } from './match-scouting-form/match-scouting-form.component';
import { StatisticsDashboardComponent } from './statistics-dashboard/statistics-dashboard.component';
import { HttpClientModule } from "@angular/common/http";
import { ScoutingDataService } from "./scouting-data.service";
import { MatCheckboxModule } from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    FormExampleComponent,
    DashboardExampleComponent,
    TableExampleComponent,
    TreeExampleComponent,
    NavigationExampleComponent,
    PitScoutingFormComponent,
    MatchScoutingFormComponent,
    StatisticsDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatCheckboxModule,
  ],
  providers: [
    ScoutingDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
