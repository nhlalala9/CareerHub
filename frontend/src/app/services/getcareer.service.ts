import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Career } from '../model/career';

@Injectable({
  providedIn: 'root'
})
export class GetcareerService {

  constructor(private http: HttpClient) { }

  getcareerpath(categoryId: any): Observable<Career[]>{
    return this.http.get<Career[]>(`http://localhost:3000/careerpath?careercategoryid=${categoryId}`)
  }
}
