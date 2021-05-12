import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanierComponent } from './components/panier/panier.component';
import { PimpPageComponent } from './pages/pimp-page/pimp-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { YoubotListComponent } from './components/youbot-list/youbot-list.component';
import { PageJeuComponent } from './pages/page-jeu/page-jeu.component'

const routes: Routes = [
  { path: 'pimpmyrobot', component: PimpPageComponent },
  { path: '', component: HomePageComponent },
  { path: 'films', component: MoviesPageComponent },
  { path: 'youbotlist', component: YoubotListComponent},
  { path: 'jeu', component: PageJeuComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
