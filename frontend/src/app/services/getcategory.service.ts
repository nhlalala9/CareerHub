import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Career } from '../model/career';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class GetcategoryService {

  constructor(private http: HttpClient) { }

  getCategory():Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.baseUrl}/getcategory`, {responseType: 'json'});
  }
}
