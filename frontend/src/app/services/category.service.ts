import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Careercategory } from '../model/careercategory';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  browse = '';

  category(): Observable<Careercategory[]>{
    return this.http.get<Careercategory[]> (`${environment.baseUrl}/getcareercategory`,{responseType: 'json'});
  }
 
}