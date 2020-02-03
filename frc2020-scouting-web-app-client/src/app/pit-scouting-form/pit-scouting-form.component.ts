import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-pit-scouting-form",
  templateUrl: "./pit-scouting-form.component.html",
  styleUrls: ["./pit-scouting-form.component.css"]
})
export class PitScoutingFormComponent implements OnInit {
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

  constructor() {}

  ngOnInit() {}
}
