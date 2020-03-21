import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-scouting-form',
  templateUrl: './match-scouting-form.component.html',
  styleUrls: ['./match-scouting-form.component.css']
})
export class MatchScoutingFormComponent implements OnInit {

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
    1678,
  ];
  
  matches: number[] = [
    1,
    2,
    3,
  ];

  balls: string[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8+",
  ];

  climbs: string[] = [
    "No Climb",
    "Self Climb",
    "Buddy Climb (w/ 1)",
    "Buddy Climb (w/ 2)",
  ]

  constructor() { }

  ngOnInit() {
  }

}
