import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  constructor(private http:HttpClient) { }

  summary(careerpathId:any ){
    return this.http.get(`http://localhost:3000/summary?careerpathid=${careerpathId}`)
  }

  salary(careerpathId:any){
    return this.http.get(`http://localhost:3000/Salaryimage?careerpathid=${careerpathId}`)
  }
}
