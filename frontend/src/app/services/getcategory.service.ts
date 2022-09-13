import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetcategoryService {

  constructor(private http: HttpClient) { }

  getCategory(){
    return this.http.get(`http://localhost:3000/careercategory`);
  }
}
