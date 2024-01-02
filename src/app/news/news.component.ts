import { Component, OnInit } from '@angular/core';
import { NewsService } from './shared/news.service';
import { Article, News } from './shared/news.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: News | undefined;
  articles: Article[] | undefined;
  totalResult: number = 0;
  sub!: Subscription;
  isLoading: boolean = false;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.getNews();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getNews() {
    this.isLoading = true;
    this.sub = this.newsService.getNews().subscribe(
      (news) => {
        // this.news = news;
        this.articles = news.articles;
        this.totalResult = news.totalResults;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      }
    );
  }
}
