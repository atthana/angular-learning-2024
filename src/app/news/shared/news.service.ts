import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  newUrl = 'https://newsapi.org/v2/top-headlines?country=th&apiKey=8d845a48d3b640bfaafd975997ea1ce3';

  constructor(private http: HttpClient) { }

  getNews(): Observable<News>{
    return this.http.get<News>(this.newUrl);
  }
}
