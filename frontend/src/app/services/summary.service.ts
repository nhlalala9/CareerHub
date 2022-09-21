import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Salary } from '../model/salary';
import {Summary} from '../model/summary';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  constructor(private http:HttpClient) { }

  summary(careerpathId:any ): Observable<Summary[]>{
    return this.http.get<Summary[]>(`${environment.baseUrl}/getsummary/${careerpathId}`)
  }
  
  salary(careerpathId:any): Observable<Salary[]>{
    return this.http.get<Salary[]>(`${environment.baseUrl}/getsalary/${careerpathId}`)
  }
}
