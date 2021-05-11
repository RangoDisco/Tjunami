import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PimpPageComponent } from './pages/pimp-page/pimp-page.component';
import { PanierComponent } from './components/panier/panier.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { TruncatorPipe } from './shared/common/truncator.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { HttpClientModule } from '@angular/common/http';
import { MeteoComponent } from './components/meteo/meteo.component';
import { SpotifyComponent } from './components/spotify/spotify.component';
import { SidePannelComponent } from './components/side-pannel/side-pannel.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
@NgModule({
  declarations: [
    PimpPageComponent,
    PanierComponent,
    AppComponent,
    FooterComponent,
    NavBarComponent,
    CarrouselComponent,
    MeteoComponent,
    SpotifyComponent,
    SidePannelComponent,
    HomePageComponent,
    TruncatorPipe,
    MoviesPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
