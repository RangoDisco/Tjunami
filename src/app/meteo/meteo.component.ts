import { Component, OnInit } from '@angular/core';
import { MeteoService } from 'src/app/common/meteo.service';
import { MeteoData } from '../common/meteo.model';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {
  // Creation de l'instance de meteo
  public meteoData: MeteoData = new MeteoData('', '', '', '')

  constructor(private meteoService: MeteoService) { }

  ngOnInit(): void {
    // Appel de la fonction du service
    this.meteoService.getWeather().subscribe(data => {
      // Remplissage de l'instance de la classe avec les données reçues
      this.meteoData = new MeteoData(data.date.sol, data.date.earth, data.degrees.min, data.degrees.max)
    })
  }

}
