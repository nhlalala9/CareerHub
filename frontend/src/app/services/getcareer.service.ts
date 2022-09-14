import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetcareerService {

  constructor(private http: HttpClient) { }

  getcareerpath(categoryId: any){
    return this.http.get(`http://localhost:3000/careerpath?careercategoryid=${categoryId}`)
  }
}
