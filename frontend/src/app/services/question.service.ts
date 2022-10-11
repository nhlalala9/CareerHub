import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Questions } from '../model/questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getQuestion(id: any): Observable<Questions[]>{
    return this.http.get<Questions[]>(`${environment.baseUrl}/getQuestions/${id}`,{responseType: 'json'})
  }
}
