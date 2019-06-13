import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Process } from './process.model'
import {Observable} from 'rxjs';
import { ScheduleInfo } from './scheduleinfo.model';

@Injectable({
  providedIn: 'root'
})
export class ProcessesService {

  apiURL: string = 'https://eproject.azurewebsites.net/api'

  constructor(private httpClient: HttpClient) { }

  getProcesses(username: string): Observable<Process[]> {
    return this.httpClient.get<Process[]>(`${this.apiURL}/Project2/GetProcesses?userName=` + username);
  }

  setProcesses(username: string, processes: Process[]): Observable<any> {
    return this.httpClient.post<Process[]>(`${this.apiURL}/Project2/SetProcesses?userName=` + username, processes);
  }

  getSchedule(scheduleInfo: ScheduleInfo): Observable<string> {
    return this.httpClient.post<string>(`${this.apiURL}/Project2/GetSchedule`, scheduleInfo);
  }

}
