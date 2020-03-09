import { Component } from '@angular/core';
import { shareReplay, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ScoutingDataService } from "./scouting-data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "FRC 2020 Scouting App";

  /*
    This is listening to whether or not our viewport is in handset mode
    using Breakpoint Observer. https://alligator.io/angular/breakpoints-angular-cdk/
  */
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private scoutingDataService: ScoutingDataService
  ) {}
}
