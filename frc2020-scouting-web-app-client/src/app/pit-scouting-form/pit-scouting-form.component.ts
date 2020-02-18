import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-pit-scouting-form",
  templateUrl: "./pit-scouting-form.component.html",
  styleUrls: ["./pit-scouting-form.component.css"]
})
export class PitScoutingFormComponent implements OnInit {

  events: string[] = [
    "AZ North",
    "AZ West",
    "LA North",
    "Del Mar",
  ];

  teams: number[] = [
    6833,
    2375,
    842,
    1678
  ];

  driveTrains: string[] = [
    "Tank",
    "Mecanum",
    "Slide / Holonomic",
    "Butterfly / Grasshopper",
    "Kiwi / Triangle",
    "Nonadrive / Butterslide",
    "Octocanum",
    "Swerve"
  ];

  gearboxes: string[] = [
    "Single-Stage",
    "Dual-Stage",
    "Triple-Stage",
    "Custom"
  ];

  motors: string[] = [
    "CIM",
    "Mini CIM",
    "BAG",
    "Neo Brushless",
    "Neo Brushless 550",
    "775 Pro",
    "775 Redline",
    "Falcon 500"
  ];

  wheels: string[] = [
    "HiGrip",
    "SmoothGrip",
    "Stealth",
    "Mecanum",
    "Performance",
    "Omni",
    "Pneumatic",
    "Plaction"
  ];

  intakes: string[] = [
    "1. Ground intake, 1 power cell at a time",
    "2. Ground intake, mutliple power cells at a time",
    "3. High chute intake, 1 power cell at a time",
    "4. High chute intake, multiple power cells at a time",
    "5. 1 + 3",
    "6. 1 + 4",
    "7. 2 + 3",
    "8. 2 + 4"
  ];



  constructor() {}

  ngOnInit() {}
}
