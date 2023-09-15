import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  private apiUrl = "http://localhost:3333/summary/"

  constructor(private http: HttpClient) { }

  getText(videoId: string): Observable<any>{
    const url = this.apiUrl + videoId;
   
    return this.http.get(url)
  }

  getsummary(text: string): Observable<any>{
    return this.http.post(this.apiUrl, {
      text: text
    })
  }
}
