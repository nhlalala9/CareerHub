import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Career } from '../model/career';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  constructor(private http: HttpClient) { }

  getSuggestion(id: any): Observable<Career[]>{
    return this.http.get<Career[]>(`${environment.baseUrl}/getsuggestion/${id}`)
  }
}
