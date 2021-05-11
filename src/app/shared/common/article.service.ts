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
      imgWith: '../../assets/pimpImages/imgWithCap.jpg',
    },
    {
      id: 2,
      name: 'Baskets',
      price: 110,
      img: '../../assets/pimpImages/basket.png',
      imgWith: '../../assets/pimpImages/imgWithBaskets.jpg',
    },
    {
      id: 3,
      name: 'Boots',
      price: 130,
      img: '../../assets/pimpImages/boot.png',
      imgWith: '../../assets/pimpImages/imgWithBoots.jpg',
    },
    {
      id: 4,
      name: 'Coiffure indienne',
      price: 80,
      img: '../../assets/pimpImages/feather.png',
      imgWith: '../../assets/pimpImages/imgWithIndienne.jpg',
    },
    {
      id: 5,
      name: 'Chapeau cowboy',
      price: 50,
      img: '../../assets/pimpImages/hat.png',
      imgWith: '../../assets/pimpImages/imgWithHat.jpg',
    },
    {
      id: 6,
      name: 'Echarpe',
      price: 35,
      img: '../../assets/pimpImages/scarf.png',
      imgWith: '../../assets/pimpImages/imgWithEcharpe.jpg',
    },
    {
      id: 7,
      name: 'Bandana',
      price: 15,
      img: '../../assets/pimpImages/scarf2.png',
      imgWith: '../../assets/pimpImages/imgWithBandana.jpg',
    },
    {
      id: 8,
      name: 'Déguisement',
      price: 15,
      img: '../../assets/pimpImages/funnyHat.png',
      imgWith: '../../assets/pimpImages/imgWithDeguisement.jpg',
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
