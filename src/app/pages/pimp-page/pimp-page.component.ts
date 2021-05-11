import { Component, OnInit } from '@angular/core';
import { Article } from '../../shared/common/article.model';
import { ArticleService } from '../../shared/common/article.service';

@Component({
  selector: 'app-pimp-page',
  templateUrl: './pimp-page.component.html',
  styleUrls: ['./pimp-page.component.css'],
})
export class PimpPageComponent implements OnInit {
  articles: Article[] = [];
  chosenArticle: Article = new Article('', 0, '', '');

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articles = this.articleService.articles;
    this.chosenArticle = this.articleService.articles[1];
    console.log(this.chosenArticle);
  }

  ajouterAuPanier(article: Article) {
    this.articleService.ajouterArticleAuPanier(article);
  }

  seeMeWith(article: Article) {
    this.chosenArticle = article;
  }
}
