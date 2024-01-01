export interface News {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;
  author: string;
  title: string;
  description?: any;
  url: string;
  urlToImage?: any;
  publishedAt: string;
  content?: any;
}

export interface Source {
  id?: any;
  name: string;
}
