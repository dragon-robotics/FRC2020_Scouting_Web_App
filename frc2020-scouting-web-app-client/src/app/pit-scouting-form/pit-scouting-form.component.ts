import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: "app-pit-scouting-form",
  templateUrl: "./pit-scouting-form.component.html",
  styleUrls: ["./pit-scouting-form.component.css"]
})
export class PitScoutingFormComponent implements OnInit {
  events: string[] = ["AZ North", "AZ West", "LA North", "Del Mar"];

  teams: number[] = [6833, 2375, 842, 1678];

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

  /* Intake/Indexer/Shooter mechanism */

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

  indexers: string[] = ["Spin-dexer", "Conveyor", "Dump Truck", "Others"];

  /* Climber mechanism */
  deployments: string[] = [
    "Elevator",
    "Piston",
    "4-bar",
    "Scissor-Lift",
    "Others"
  ];

  acquisitions: string[] = [
    "Single Hook",
    "Dual Hooks",
    "Multi Hooks",
    "Grappling Hook",
    "Carabiner",
    "Others"
  ];

  climbers: string[] = ["Winch", "Elevator", "Scissor-Lift", "4-bar", "Others"];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  /* Full Robot Picture */
  onUploadRobotPicClick() {}

  /* Drivetrain Pictures */
  onUploadDrivetrainPicClick() {}

  /* Intake/Indexer/Shooter Pictures */
  onUploadIntakePicClick() {}
  onUploadIndexerPicClick() {}
  onUploadShooterPicClick() {}

  /* Climber Pictures */
  onUploadDeploymentPicClick() {}
  onUploadAcquisitionPicClick() {}
  onUploadClimberPicClick() {}
  onUploadAutoBalancerPicClick() {}
  onUploadBuddyClimbPicClick() {}

  /* Control Panel Pictures */
  onUploadRotatorPicClick() {}
}
