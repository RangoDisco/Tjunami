import { Component, OnInit } from '@angular/core';
import { Article } from '../../shared/common/article.model';
import { ArticleService } from '../../shared/common/article.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  articlesPanier: Article[] = [];

  constructor(private service: ArticleService) {}

  ngOnInit(): void {
    this.articlesPanier = this.service.articlesPanier;
  }

  retirerDuPanier(article: Article) {
    this.service.supprimerDuPanier(article);
  }
}
