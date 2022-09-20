import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salary } from '../model/salary';
import {Summary} from '../model/summary';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  constructor(private http:HttpClient) { }

  summary(careerpathId:any ): Observable<Summary[]>{
    return this.http.get<Summary[]>(`http://localhost:3000/summary?careerpathid=${careerpathId}`)
  }
  
  salary(careerpathId:any): Observable<Salary[]>{
    return this.http.get<Salary[]>(`http://localhost:3000/Salaryimage?careerpathid=${careerpathId}`)
  }
}
