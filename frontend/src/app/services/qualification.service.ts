import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Qualification } from '../model/qualification';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {

  constructor(private http: HttpClient) { }

  getQualification(id: any): Observable<Qualification[]>{
    return this.http.get<Qualification[]>(`${environment.baseUrl}/getQualifications/${id}`);
  }
}
