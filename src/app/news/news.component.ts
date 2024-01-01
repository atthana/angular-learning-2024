import { Component, OnInit } from '@angular/core';
import { NewsService } from './shared/news.service';
import { Article, News } from './shared/news.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: News | undefined;
  articles: Article[] | undefined;
  totalResult: number = 0;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(){
    this.newsService.getNews().subscribe(
      (news) => {
        // this.news = news;
        this.articles = news.articles;
        this.totalResult = news.totalResults;    
      }
    );
  }

}
