import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class GetcategoryService {

  constructor(private http: HttpClient) { }

  getCategory(): Observable<Category[]> | any {
    return this.http.get(`http://localhost:3000/category`, {responseType: 'json'});
  }
}
