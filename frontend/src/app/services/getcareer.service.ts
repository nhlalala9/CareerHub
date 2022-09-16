import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetcareerService {

  constructor(private http: HttpClient) { }

  getcareerpath(categoryId: any): Observable<any>{
    return this.http.get(`http://localhost:3000/careerpath?careercategoryid=${categoryId}`)
  }

  getcareer(): Observable<any>{
    return this.http.get(`http://localhost:3000/careerpath`)
  }

}
