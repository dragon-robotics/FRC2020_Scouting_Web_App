import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class ScoutingDataService {
  /* Main API */
  api_url = "http://192.168.1.85:3000";

  // scoutingDataURL = `${this.api_url}/api/scoutingData`; // Appends Initial URL with api URL
  getTeamsAtEventURL = `${this.api_url}/api/getTeamsAtEvent`; // Appends Initial URL with api URL
  getTeamNameFromTeamIDURL = `${this.api_url}/api/getTeamNameFromTeamID`; // Appends Initial URL with api URL
  // teamMatchEventInfoURL = `${this.api_url}/api/teamMatchEventInfo`; // Appends Initial URL with api URL
  // getMatchAndTeamInfoURL = `${this.api_url}/api/getMatchAndTeamInfo`; // Appends Initial URL with api URL

  constructor(private http: HttpClient) {}

  getTeamsAtEvent(eventID: string): Observable<any> {
    return this.http.get(this.getTeamsAtEventURL + "/" + eventID);
  }

  getTeamNameFromTeamID(teamID: number): Observable<any> {
    return this.http.get(this.getTeamNameFromTeamIDURL + "/" + teamID);
  }
}
