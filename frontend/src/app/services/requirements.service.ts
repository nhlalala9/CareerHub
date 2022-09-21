import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Requirements } from '../model/requirements';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequirementsService {
  constructor(private http: HttpClient) {}

  //getting data from the backend ro frontend

  getRequirements(): Observable<Requirements[]> {
    return this.http.get<Requirements[]>(`http://localhost:3000/requirerments`);
  }
}
