import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ScoutingDataService } from '../scouting-data.service';

interface Event {
  eventID: string;
  eventName: string;
}

@Component({
  selector: "app-pit-scouting-form",
  templateUrl: "./pit-scouting-form.component.html",
  styleUrls: ["./pit-scouting-form.component.css"]
})
export class PitScoutingFormComponent implements OnInit {
  eventSelectControl = new FormControl("", Validators.required);
  selectedEvent: Event;
  events: Event[] = [
    {
      eventName: "AZ North",
      eventID: "2020azfl"
    },
    {
      eventName: "AZ West",
      eventID: "2020azpx"
    },
    {
      eventName: "Week 0",
      eventID: "2020week0"
    }
  ];

  teamSelectControl = new FormControl("", Validators.required);
  selectedTeam: number;
  teams: number[];

  teamName: string = "";

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

  shooters: string[] = [
    "Single-sided Wheels w/ Hood",
    "Single-sided w/ Weighted Flywheel(s) and Hood",
    "Dual-sided Wheels",
    "Dual-sided w/ Weighted Flywheel(s)"
  ];

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

  constructor(private scoutingDataService: ScoutingDataService) {}

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

  /* Get all the teams from the user selected event */
  getTeamsAtEvent() {
    let eventID = this.selectedEvent.eventID;
    this.scoutingDataService.getTeamsAtEvent(eventID)
      .subscribe(teams =>{
        this.teams = teams;
      });
  }

  getTeamNameFromTeamID(){
    let teamID = this.selectedTeam;
    this.scoutingDataService
      .getTeamNameFromTeamID(teamID)
      .subscribe(team => {
        this.teamName = team.teamName;
      });
  }
}
