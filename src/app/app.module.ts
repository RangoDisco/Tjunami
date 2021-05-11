import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PimpPageComponent } from './pimp-page/pimp-page.component';
import { PanierComponent } from './panier/panier.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { TruncatorPipe } from './common/truncator.pipe';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { HttpClientModule } from '@angular/common/http';
import { MeteoComponent } from './meteo/meteo.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { SidePannelComponent } from './side-pannel/side-pannel.component';
import { HomePageComponent } from './home-page/home-page.component';
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
