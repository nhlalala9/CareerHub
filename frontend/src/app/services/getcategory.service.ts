import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Career } from '../model/career';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class GetcategoryService {

  constructor(private http: HttpClient) { }

  getCategory():Observable<Career[]> {
    return this.http.get<Career[]>(`http://localhost:3000/category`, {responseType: 'json'});
  }
}
