import { Component, OnInit } from '@angular/core';
import { Article } from '../../shared/common/article.model';
import { ArticleService } from '../../shared/common/article.service';
import Swal from 'sweetalert2';

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

  // Display une confirmation de commande
  confirmerCommande() {
    Swal.fire({
      icon: 'success',
      title: 'Commande confirmée',
      text: "Merci pour ta commande ! Tu la recevras d'ici 6 à 8 mois !",
      confirmButtonText: 'Ok',
    });
  }
}
