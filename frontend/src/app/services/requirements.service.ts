import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Requirements } from '../model/requirements';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequirementsService {
  constructor(private http: HttpClient) {}

  //getting data from the backend ro frontend

  getRequirements(careerpathId: number): Observable<Requirements[]> {
    return this.http.get<Requirements[]>(`${environment.baseUrl}/getoneRequirement/${careerpathId}`);
  }
}
