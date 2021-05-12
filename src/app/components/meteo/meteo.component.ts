import { Component, OnInit } from '@angular/core';
import { Fact } from 'src/app/shared/common/fact';
import { FactService } from 'src/app/shared/common/fact.service';
import { MeteoService } from 'src/app/shared/common/meteo.service';
import { MeteoData } from '../../shared/common/meteo.model';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css'],
})
export class MeteoComponent implements OnInit {
  // Creation de l'instance de meteo
  public meteoData: MeteoData = new MeteoData('', '', '', '');
  public randomNumber = Math.floor(Math.random() * 14)
  public randomFact: Fact = new Fact('', '', '')
  public selectedFact

  constructor(private meteoService: MeteoService, private factService: FactService) { }

  ngOnInit(): void {
    // Appel de la fonction du service
    this.meteoService.getWeather().subscribe((data) => {
      // Remplissage de l'instance de la classe avec les données reçues
      this.meteoData = new MeteoData(
        data.date.sol,
        data.date.earth,
        data.degrees.min,
        data.degrees.max
      );
    });

    this.factService.getFact().subscribe((data) => {
      this.selectedFact = data[this.randomNumber]
      this.randomFact = new Fact(
        this.selectedFact.title,
        this.selectedFact.event_date_utc,
        this.selectedFact.details
      )
    })
  }
  displayFact() {
    Swal.fire({
      title: `<strong>${this.randomFact.title}</strong>`,
      icon: 'info',
      iconColor: '#1fd662',
      html: `${this.randomFact.date} <br> 
      ${this.randomFact.desc}`,
      showCloseButton: false,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Fermer',
      confirmButtonAriaLabel: 'Fermer',
      confirmButtonColor: '#1fd662',
      background: '#252525'
    })
  }
}
