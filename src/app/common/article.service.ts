import { Injectable } from '@angular/core';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articles: Article[] = [
    {
      id: 1,
      name: 'Casquette',
      price: 40,
      img: '../../assets/pimpImages/cap.png',
    },
    {
      id: 2,
      name: 'Baskets',
      price: 110,
      img: '../../assets/pimpImages/basket.png',
    },
    {
      id: 3,
      name: 'Boots',
      price: 130,
      img: '../../assets/pimpImages/boot.png',
    },
    {
      id: 4,
      name: 'Coiffure indienne',
      price: 80,
      img: '../../assets/pimpImages/feather.png',
    },
    {
      id: 5,
      name: 'Chapeau cowboy',
      price: 50,
      img: '../../assets/pimpImages/hat.png',
    },
    {
      id: 6,
      name: 'Echarpe',
      price: 35,
      img: '../../assets/pimpImages/scarf.png',
    },
    {
      id: 6,
      name: 'Bandana',
      price: 15,
      img: '../../assets/pimpImages/scarf2.png',
    },
  ];

  articlesPanier: Article[] = [];
  constructor() {}

  ajouterArticleAuPanier(article: Article) {
    this.articles.splice(this.articles.indexOf(article), 1);
    this.articlesPanier.push(article);
  }

  supprimerDuPanier(article: Article) {
    this.articlesPanier.splice(this.articlesPanier.indexOf(article), 1);
    this.articles.push(article);
  }
}
