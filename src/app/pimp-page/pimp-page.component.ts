import { Component, OnInit } from '@angular/core';
import { Article } from '../common/article.model';
import { ArticleService } from '../common/article.service';

@Component({
  selector: 'app-pimp-page',
  templateUrl: './pimp-page.component.html',
  styleUrls: ['./pimp-page.component.css'],
})
export class PimpPageComponent implements OnInit {
  articles: Article[] = [];
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articles = this.articleService.articles;
  }

  ajouterAuPanier(article: Article) {
    this.articleService.ajouterArticleAuPanier(article);
  }
}
