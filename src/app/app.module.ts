import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeteoComponent } from './meteo/meteo.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { SidePannelComponent } from './side-pannel/side-pannel.component';

@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent,
    SpotifyComponent,
    SidePannelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
