import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { debug } from 'util';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RAMService {

  apiURL: string = 'https://eproject.azurewebsites.net/api'

  constructor(private httpClient: HttpClient) { }

  getRAM(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiURL}/Project3/GetSystemRam`);
  }

}